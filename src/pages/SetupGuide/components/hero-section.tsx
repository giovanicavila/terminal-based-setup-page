import { ArrowDown, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslate } from "@/contexts/translate-context";

interface HeroSectionProps {
  onStartClick: () => void;
}

export function HeroSection({ onStartClick }: HeroSectionProps) {
  const { t } = useTranslate();

  return (
    <section className="relative overflow-hidden border-border border-b bg-gradient-to-b from-background to-muted/30 pt-12 pb-16 md:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-muted-foreground text-sm">
            <Terminal className="h-4 w-4" />
            <span>Terminal-based Development Stack</span>
          </div>

          <h1 className="mb-6 font-bold text-4xl text-foreground tracking-tight sm:text-5xl md:text-6xl">
            {t.hero.title}
          </h1>

          <p className="mb-8 text-lg text-muted-foreground leading-relaxed sm:text-xl">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button onClick={onStartClick} size="lg">
              {t.hero.ctaText}
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="https://github.com/opencode-ai/opencode"
                rel="noopener noreferrer"
                target="_blank"
              >
                {t.hero.ctaText2}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
