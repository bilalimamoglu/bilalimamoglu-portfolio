import { siteData } from "@/data/siteData";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <SectionHeader number="03" title="About" />

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16">
        <div>
          {siteData.about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`mb-5 leading-relaxed ${
                index === 0
                  ? "text-lg text-text-primary"
                  : "text-base text-text-secondary"
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <div className="mb-9">
            <h4 className="font-mono text-[11px] text-text-muted uppercase tracking-widest mb-4">
              Focus
            </h4>
            <ul>
              {siteData.about.focus.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-text-secondary py-2 border-b border-border"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] text-text-muted uppercase tracking-widest mb-4">
              Interests
            </h4>
            <ul>
              {siteData.about.interests.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-text-secondary py-2 border-b border-border"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
