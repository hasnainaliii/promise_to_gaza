import { SectionIntro } from "@/components/section_intro";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lede: string;
}

export function PageHeader({ eyebrow, title, lede }: PageHeaderProps) {
  return (
    <header className="surface-crimson relative isolate overflow-hidden">
      <div className="relative mx-auto max-w-page px-5 pb-section pt-14 sm:px-8 lg:pb-section-lg lg:pt-20">
        <div className="animate-rise-in">
          <SectionIntro level="h1" reveal={false} eyebrow={eyebrow} title={title} lede={lede} />
        </div>
      </div>
    </header>
  );
}
