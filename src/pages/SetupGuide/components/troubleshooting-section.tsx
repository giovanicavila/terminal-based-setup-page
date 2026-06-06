import { AlertTriangle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslate } from "@/contexts/translate-context";
import { CodeBlock } from "./code-block";

export function TroubleshootingSection() {
  const { t } = useTranslate();

  const issues = [
    {
      title: t.troubleshooting.invalidStyle,
      description: t.troubleshooting.invalidStyleDesc,
      code: `set -g status-style "fg=colour244,bg=colour233"
set -g window-status-current-style "fg=colour255,bold"

# Salva e recarrega:
tmux source-file ~/.tmux.conf`,
      language: "bash",
    },
    {
      title: t.troubleshooting.wrongColors,
      description: t.troubleshooting.wrongColorsDesc,
      code: `# No ~/.tmux.conf:
set -g default-terminal "tmux-256color"
set -ag terminal-overrides ",xterm-256color:RGB"

# No ~/.zshrc:
export TERM=xterm-256color`,
      language: "bash",
    },
    {
      title: t.troubleshooting.cargoNotFound,
      description: t.troubleshooting.cargoNotFoundDesc,
      code: `source "$HOME/.cargo/env"
# ou adiciona permanentemente:
echo 'source "$HOME/.cargo/env"' >> ~/.zshrc
source ~/.zshrc`,
      language: "bash",
    },
    {
      title: t.troubleshooting.yaziNoPreview,
      description: t.troubleshooting.yaziNoPreviewDesc,
      code: `# No ~/.config/yazi/yazi.toml:
[preview]
ueberzug_scale = 1
ueberzug_offset = [0, 0, 0, 0]`,
      language: "toml",
    },
    {
      title: t.troubleshooting.opencodeContext,
      description: t.troubleshooting.opencodeContextDesc,
      code: "cd ~/projects/meu-projeto && opencode",
      language: "bash",
    },
  ];

  return (
    <section className="scroll-mt-20 py-12" id="troubleshooting">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-2xl">
                  {t.troubleshooting.title}
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Accordion className="w-full" collapsible type="single">
              {issues.map((issue) => (
                <AccordionItem key={issue.title} value={issue.title}>
                  <AccordionTrigger className="font-medium text-base">
                    {issue.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4 text-muted-foreground text-sm">
                      {issue.description}
                    </p>
                    <CodeBlock code={issue.code} language={issue.language} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
