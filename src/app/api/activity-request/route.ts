
import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { activities } from "@/content/activities";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const activityId =
      typeof body.activityId === "string" ? body.activityId : "";
    const joinMailingList = body.joinMailingList === true;

    if (
      !email ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const activity = activities.find((item) => item.id === activityId);

    if (!activity) {
      return NextResponse.json(
        { error: "This activity could not be found." },
        { status: 404 }
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!siteUrl || !resendApiKey || !fromEmail) {
      console.error("Activity email service is not configured.");

      return NextResponse.json(
        { error: "Email delivery is temporarily unavailable." },
        { status: 503 }
      );
    }

    const downloadUrl = new URL(activity.file, siteUrl).toString();

    // Send the selected activity's download link.
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [email],
        subject: `Your FeelieBees activity: ${activity.title}`,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#344236">
            <h2>Your activity is ready!</h2>
            <p>Thank you for exploring FeelieBees.</p>
            <p>Here is your activity: <strong>${activity.title}</strong></p>
            <p>
              <a href="${downloadUrl}"
                 style="display:inline-block;padding:12px 20px;background:#398357;color:#ffffff;text-decoration:none;border-radius:8px">
                Download your activity PDF
              </a>
            </p>
            <p>Enjoy creating and connecting together!</p>
            <p>The FeelieBees team</p>
          </div>
        `,
      }),
    });

    if (!emailResponse.ok) {
      console.error("Activity delivery failed:", await emailResponse.text());

      return NextResponse.json(
        { error: "We couldn't send your activity. Please try again." },
        { status: 502 }
      );
    }

    // Add the visitor to the mailing list only with explicit opt-in.
    if (joinMailingList) {
      const apiKey = process.env.MAILCHIMP_API_KEY;
      const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
      const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

      if (!apiKey || !audienceId || !serverPrefix) {
        console.error("Mailing list service is not configured.");

        return NextResponse.json(
          {
            error:
              "Your activity email was sent, but mailing-list signup is temporarily unavailable. Please try the signup again later.",
            emailSent: true,
          },
          { status: 503 }
        );
      }

      const subscriberHash = createHash("md5").update(email).digest("hex");

      const subscriberResponse = await fetch(
        `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email_address: email,
            status_if_new: "pending",
            marketing_permissions: [
              {
                marketing_permission_id:
                  process.env.MAILCHIMP_MARKETING_PERMISSION_ID,
                enabled: true,
              },
            ].filter((permission) => permission.marketing_permission_id),
          }),
        }
      );

      if (!subscriberResponse.ok) {
        console.error(
          "Mailing list signup failed:",
          await subscriberResponse.text()
        );

        return NextResponse.json(
          {
            error:
              "Your activity email was sent, but mailing-list signup could not be completed. Please try again later.",
            emailSent: true,
          },
          { status: 503 }
        );
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Activity request failed:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
