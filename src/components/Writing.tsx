import { siteData } from "@/data/siteData";
import SectionHeader from "./SectionHeader";
import { ArrowRightIcon } from "./Icons";

export default function Writing() {
  return (
    <section id="writing" className="py-24 px-6 md:px-12">
      <SectionHeader number="04" title="Writing" />

      <div className="flex flex-col bg-border rounded-xl overflow-hidden border border-border">
        {siteData.writing.map((article, index) => (
          <a
            key={index}
            href={`/writing/${article.slug}`}
            className="writing-item grid grid-cols-1 md:grid-cols-[100px_1fr_auto] gap-2 md:gap-6 items-center p-6 md:py-6 md:px-7 bg-secondary no-underline"
          >
            <span className="font-mono text-xs text-text-muted order-2 md:order-1">
              {article.date}
            </span>
            <span className="text-[15px] text-text-primary order-1 md:order-2">
              {article.title}
            </span>
            <ArrowRightIcon className="writing-arrow w-4 h-4 text-text-muted transition-all hidden md:block order-3" />
          </a>
        ))}
      </div>
    </section>
  );
}
