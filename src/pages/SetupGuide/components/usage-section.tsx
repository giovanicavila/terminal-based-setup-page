import { GitBranch, Play } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslate } from "@/contexts/translate-context";
import { CodeBlock } from "./code-block";
import { LazygitUsageSection } from "./lazygit-usage-section";
import { SessionsSection } from "./sessions-section";

function FirstTimeUsage() {
  const { t } = useTranslate();

  return (
    <AccordionItem value="first-time">
      <AccordionTrigger className="font-medium text-base">
        {t.usage.firstTime}
      </AccordionTrigger>
      <AccordionContent>
        <p className="mb-4 text-muted-foreground text-sm">
          {t.usage.firstTimeDesc}
        </p>
        <CodeBlock
          code={
            "# 1. Cria uma nova sessão tmux\ntmux new -s dev\n\n# Agora você está dentro do tmux\ncd ~/projects/meu-projeto\n\n# Abre o Neovim\nnvim ."
          }
          language="bash"
        />
        <h4 className="mt-6 mb-2 font-medium">{t.usage.reconnect}</h4>
        <p className="mb-4 text-muted-foreground text-sm">
          {t.usage.reconnectDesc}
        </p>
        <CodeBlock
          code={
            "tmux attach -t dev\n# ou simplesmente, se só tiver uma sessão:\ntmux a"
          }
          language="bash"
        />
      </AccordionContent>
    </AccordionItem>
  );
}

function WorkflowSection() {
  const { t } = useTranslate();

  return (
    <AccordionItem value="workflow">
      <AccordionTrigger className="font-medium text-base">
        {t.usage.typicalFlow}
      </AccordionTrigger>
      <AccordionContent>
        <pre className="overflow-x-auto rounded-lg border border-border bg-muted/50 p-4 text-foreground text-sm leading-relaxed">
          {t.usage.typicalFlowDesc}
        </pre>
      </AccordionContent>
    </AccordionItem>
  );
}

function OpenCodeUsageSection() {
  const { t } = useTranslate();

  return (
    <AccordionItem value="opencode-usage">
      <AccordionTrigger className="font-medium text-base">
        {t.usage.opencodeUsage}
      </AccordionTrigger>
      <AccordionContent>
        <p className="mb-4 text-muted-foreground text-sm">
          {t.usage.opencodeDesc}
        </p>
        <CodeBlock
          code="cd ~/projects/meu-projeto && opencode"
          language="bash"
        />
        <p className="mt-4 mb-2 text-muted-foreground text-sm">
          Exemplos de comandos:
        </p>
        <pre className="overflow-x-auto rounded-lg border border-border bg-muted/50 p-4 text-foreground text-sm leading-relaxed">
          {t.usage.opencodeExamples}
        </pre>
      </AccordionContent>
    </AccordionItem>
  );
}

export function UsageSection() {
  const { t } = useTranslate();

  return (
    <section className="scroll-mt-20 py-12" id="usage">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Play className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-2xl">{t.usage.title}</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Accordion className="w-full" collapsible type="single">
              <FirstTimeUsage />
              <WorkflowSection />

              <OpenCodeUsageSection />

              <AccordionItem value="lazygit">
                <AccordionTrigger className="font-medium text-base">
                  <div className="flex items-center gap-2">
                    <GitBranch className="h-4 w-4" />
                    <span>{t.usage.lazygitUsage}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <LazygitUsageSection />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <SessionsSection />
      </div>
    </section>
  );
}
