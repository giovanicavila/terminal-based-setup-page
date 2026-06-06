import { Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslate } from "@/contexts/translate-context";

export function InstallationSteps() {
  const { t } = useTranslate();

  const steps = [
    { order: 1, name: "tmux", desc: t.install.tmuxInstall },
    { order: 2, name: "Rust/Cargo", desc: t.install.yaziRust },
    { order: 3, name: "Neovim", desc: t.install.neovimInstall },
    { order: 4, name: "LazyVim", desc: t.install.lazyvimInstall },
    { order: 5, name: "Yazi", desc: t.install.yaziInstall },
    { order: 6, name: "OpenCoder", desc: t.install.opencodeInstall },
  ];

  return (
    <section className="scroll-mt-20 py-12" id="installation">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Package className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-2xl">
                  {t.common.recommendedOrder}
                </CardTitle>
                <p className="mt-1 text-muted-foreground text-sm">
                  Ordem recomendada de instalação
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ol className="relative ml-3 space-y-6 border-border border-l">
              {steps.map((step) => (
                <li className="ml-6" key={step.order}>
                  <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-xs">
                    {step.order}
                  </span>
                  <h3 className="font-medium text-foreground">{step.name}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
