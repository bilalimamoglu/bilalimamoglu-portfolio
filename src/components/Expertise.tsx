import { siteData } from "@/data/siteData";
import SectionHeader from "./SectionHeader";
import { PlatformIcon, AIIcon, CICDIcon, DatabaseIcon } from "./Icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  platform: PlatformIcon,
  ai: AIIcon,
  cicd: CICDIcon,
  database: DatabaseIcon,
};

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 px-6 md:px-12">
      <SectionHeader number="01" title="What I Build" />

      <div className="grid md:grid-cols-2 gap-6">
        {siteData.expertise.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={index}
              className="expertise-card p-8 bg-secondary border border-border rounded-xl"
            >
              <div className="w-10 h-10 bg-accent-glow rounded-lg flex items-center justify-center mb-5">
                {Icon && <Icon className="w-5 h-5 text-accent" />}
              </div>
              <h3 className="text-lg font-medium mb-3">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
