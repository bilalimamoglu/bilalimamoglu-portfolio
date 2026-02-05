import { siteData } from "@/data/siteData";
import SectionHeader from "./SectionHeader";
import { ArrowRightIcon } from "./Icons";

export default function Contact() {
  return (
    <div id="contact" className="bg-secondary py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[720px]">
        <SectionHeader number="05" title="Get in Touch" />

        <p className="text-[17px] text-text-secondary mb-8">
          I&apos;m always interested in discussing MLOps challenges, infrastructure
          strategy, or how to build ML systems that teams can actually trust.
          Feel free to reach out.
        </p>

        <a
          href={`mailto:${siteData.email}`}
          className="inline-flex items-center gap-3 font-serif text-2xl text-accent hover:text-text-primary transition-colors"
        >
          {siteData.email}
          <ArrowRightIcon className="w-5 h-5" />
        </a>

        <div className="mt-12 p-6 bg-accent-glow rounded-xl border border-accent/20">
          <p className="text-sm text-text-secondary">
            <strong className="text-accent font-medium">Consulting:</strong>{" "}
            {siteData.consulting.note}
          </p>
        </div>
      </div>
    </div>
  );
}
