import { siteData } from "@/data/siteData";
import SectionHeader from "./SectionHeader";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-6 md:px-12 lg:px-20">
      <SectionHeader number="02" title="How I Think" />

      <div className="max-w-[820px]">
        <p className="font-serif text-2xl text-text-primary leading-relaxed mb-6">
          {siteData.philosophy.intro}
        </p>

        {siteData.philosophy.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-base text-text-secondary mb-5">
            {paragraph}
          </p>
        ))}

        <div className="mt-12 pl-6 border-l-2 border-accent">
          {siteData.philosophy.principles.map((principle, index) => (
            <div key={index} className="mb-7 last:mb-0">
              <h4 className="font-mono text-xs text-accent uppercase tracking-wide mb-2">
                {principle.title}
              </h4>
              <p className="text-[15px] text-text-secondary">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
