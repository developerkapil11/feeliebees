import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { primaryButton } from "@/components/ui/page-ui";

export default function LetsTalk() {
  return (
    <section className="bg-linear-to-br from-[#FFE1CF] via-[#FFF3D8] to-[#DCEFD2] px-[6%] py-12 text-center tablet:py-[4vw]">
      <h2 className="text-[max(34px,3vw)]">Let’s Talk About Feelings</h2>
      <p className="mt-4 text-[max(15px,1.15vw)]">
        We’d love to help you find your way.
      </p>
      <Link href="/contact" className={`${primaryButton} mt-6`}>
        Get in touch <ArrowRight />
      </Link>
    </section>
  );
}
