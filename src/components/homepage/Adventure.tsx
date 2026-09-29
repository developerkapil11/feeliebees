import { AdventureArt } from "@/components/ui/adventure-art";

export default function Adventure() {
    return (
        <section
        className="adventure-section relative flex flex-col overflow-hidden bg-[#b5eaff] desktop:grid desktop:grid-cols-1 max-desktop:[&>.section-art]:relative max-desktop:[&>.section-art]:inset-auto max-desktop:[&>.section-art]:order-1 max-desktop:[&>.section-art]:block max-desktop:[&>.section-art]:h-auto max-desktop:[&>.section-art]:object-contain"
        aria-labelledby="adventure-title"
        >
        <AdventureArt />
        <div className="adventure-copy relative w-full px-[6%] pt-6.5 pb-5 text-center desktop:col-start-1 desktop:row-start-1 desktop:z-1 desktop:mt-[5%] desktop:ml-[37.5%] desktop:w-[27%] desktop:self-start desktop:p-0 [&>h2]:text-[39px] [&>h2]:leading-[.98] tablet:[&>h2]:text-[max(40px,4.5vw)] desktop:[&>h2]:leading-[.95] [&>p]:mx-auto [&>p]:mt-2.5 [&>p]:max-w-82.5 [&>p]:text-[13px] [&>p]:leading-[1.32] max-desktop:[&_p_br]:hidden desktop:[&>p]:mt-3 desktop:[&>p]:max-w-none desktop:[&>p]:text-xs tablet:[&>p]:mt-4.75 tablet:[&>p]:text-[max(13px,1.32vw)] wide:[&>p]:mt-[1em]">
          <h2 id="adventure-title">
            Small tools.
            <br />
            Big feelings.
          </h2>
          <p>
            Stories, play and activities to help
            <br /> children understand, express and
            <br /> grow with their emotions.
          </p>
        </div>
        </section>
    )
}
