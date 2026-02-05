interface SectionHeaderProps {
  number: string;
  title: string;
}

export default function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className="flex items-baseline gap-4 mb-12">
      <span className="font-mono text-xs text-accent">{number}</span>
      <h2 className="font-serif text-3xl font-normal">{title}</h2>
    </div>
  );
}
