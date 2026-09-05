import { SectionIntro } from "@/components/section_intro";
import { TatreezDivider } from "@/components/tatreez_divider";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lede: string;
}

export function PageHeader({ eyebrow, title, lede }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden border-b border-line bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 size-96 rounded-full bg-sand/70"
      />
      <div className="relative mx-auto max-w-page px-5 py-section sm:px-8">
        <SectionIntro level="h1" eyebrow={eyebrow} title={title} lede={lede} />
      </div>
      <TatreezDivider className="text-sand-deep/60" />
    </header>
  );
}
