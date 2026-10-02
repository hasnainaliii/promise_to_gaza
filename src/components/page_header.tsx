import { SectionIntro } from "@/components/section_intro";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lede: string;
}

export function PageHeader({ eyebrow, title, lede }: PageHeaderProps) {
  return (
    <header className="relative isolate overflow-hidden bg-cream paper-grain">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 -z-10 size-96 rounded-full bg-cream-deep"
      />
      <div className="relative mx-auto max-w-page px-5 pb-section pt-14 sm:px-8 lg:pb-section-lg lg:pt-20">
        <div className="animate-rise-in">
          <SectionIntro level="h1" reveal={false} eyebrow={eyebrow} title={title} lede={lede} />
        </div>
      </div>
      <div aria-hidden="true" className="tatreez-band h-3 text-cream-deep" />
    </header>
  );
}
