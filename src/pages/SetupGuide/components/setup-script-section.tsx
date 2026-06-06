import { ScrollText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslate } from "@/contexts/translate-context";
import { CodeBlock } from "./code-block";

export function SetupScriptSection() {
  const { t } = useTranslate();

  return (
    <section className="scroll-mt-20 py-12" id="setup-script">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ScrollText className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-2xl">
                  {t.setupScript.title}
                </CardTitle>
                <p className="mt-1 text-muted-foreground text-sm">
                  {t.setupScript.desc}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`mkdir -p ~/scripts

# Cria o arquivo
nano ~/scripts/dev.sh`}
              language="bash"
            />

            <CodeBlock
              code={t.setupScript.scriptContent}
              label="~/scripts/dev.sh"
              language="bash"
            />

            <h4 className="mt-6 mb-2 font-medium">
              Tornar executável e criar alias:
            </h4>
            <CodeBlock
              code={`chmod +x ~/scripts/dev.sh
${t.setupScript.aliasSetup}
source ~/.zshrc`}
              language="bash"
            />

            <h4 className="mt-4 mb-2 font-medium">Uso:</h4>
            <CodeBlock code={t.setupScript.usage} language="bash" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
