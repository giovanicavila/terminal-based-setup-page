import { ChevronUp, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { Button } from "@/components/ui/button";
import { useTranslate } from "@/contexts/translate-context";
import {
  languageNames,
  type SupportedLanguage,
  supportedLanguages,
} from "@/i18n";
import { HeroSection } from "./components/hero-section";
import { InstallationSteps } from "./components/installation-steps";
import { NeovimSection } from "./components/neovim-section";
import { OpenCoderSection } from "./components/opencode-section";
import { SetupScriptSection } from "./components/setup-script-section";
import { TmuxSection } from "./components/tmux-section";
import { ToolOverviewSection } from "./components/tool-overview-section";
import { TroubleshootingSection } from "./components/troubleshooting-section";
import { UsageSection } from "./components/usage-section";
import { YaziSection } from "./components/yazi-section";

const sectionIds = [
  "overview",
  "installation",
  "tmux",
  "neovim",
  "yazi",
  "opencode",
  "setup-script",
  "usage",
  "troubleshooting",
] as const;

interface LanguageSelectorProps {
  currentLanguage: SupportedLanguage;
  onChange: (lang: SupportedLanguage) => void;
}

function LanguageSelector({
  currentLanguage,
  onChange,
}: LanguageSelectorProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        aria-label={useTranslate().t.common.languageToggle}
        className="flex items-center gap-2"
        onClick={() => setOpen(!open)}
        size="sm"
        variant="outline"
      >
        <Globe className="h-4 w-4" />
        <span>{languageNames[currentLanguage]}</span>
      </Button>
      {open && (
        <div className="absolute top-full right-0 mt-1 w-36 overflow-hidden rounded-lg border border-border bg-popover shadow-lg">
          {supportedLanguages.map((lang) => (
            <button
              className={`flex w-full items-center px-4 py-2 text-sm transition-colors hover:bg-accent ${
                lang === currentLanguage
                  ? "bg-accent font-medium text-accent-foreground"
                  : "text-popover-foreground"
              }`}
              key={lang}
              onClick={() => {
                onChange(lang);
                setOpen(false);
              }}
              type="button"
            >
              {languageNames[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function TableOfContents() {
  const { t } = useTranslate();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, []);

  const labels: Record<string, string> = {
    overview: t.common.overview,
    installation: t.common.recommendedOrder,
    tmux: "tmux",
    neovim: "Neovim + LazyVim",
    yazi: "Yazi",
    opencode: "OpenCoder",
    "setup-script": t.common.setupScript,
    usage: t.common.usage,
    troubleshooting: t.common.troubleshooting,
  };

  return (
    <nav aria-label={t.common.onThisPage} className="space-y-1">
      <p className="mb-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">
        {t.common.onThisPage}
      </p>
      {sectionIds.map((id) => (
        <a
          className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${
            activeSection === id
              ? "bg-accent font-medium text-accent-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          href={`#${id}`}
          key={id}
        >
          {labels[id]}
        </a>
      ))}
    </nav>
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <Button
      aria-label="Voltar ao topo"
      className="fixed right-6 bottom-6 z-50 shadow-lg"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      size="icon"
      variant="outline"
    >
      <ChevronUp className="h-4 w-4" />
    </Button>
  );
}

export function SetupGuidePage() {
  const { t, language, setLanguage } = useTranslate();

  const handleStartClick = () => {
    const el = document.getElementById("installation");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-border border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <button
            className="cursor-pointer font-bold text-foreground text-sm tracking-tight"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            type="button"
          >
            {t.common.pageTitle}
          </button>
          <div className="flex items-center gap-2">
            <ThemeToggleButton />
            <LanguageSelector
              currentLanguage={language}
              onChange={setLanguage}
            />
          </div>
        </div>
      </header>

      <HeroSection onStartClick={handleStartClick} />

      {/* Main content with sidebar */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar TOC - hidden on mobile */}
          <aside className="hidden w-56 shrink-0 pt-12 lg:block">
            <div className="sticky top-20">
              <TableOfContents />
            </div>
          </aside>

          {/* Main content */}
          <main className="min-w-0 flex-1 pb-20">
            <section className="scroll-mt-20" id="overview">
              <ToolOverviewSection />
            </section>

            <InstallationSteps />

            <TmuxSection />
            <NeovimSection />
            <YaziSection />
            <OpenCoderSection />

            <SetupScriptSection />
            <UsageSection />
            <TroubleshootingSection />
          </main>
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  );
}
