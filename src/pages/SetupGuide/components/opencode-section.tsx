import { Bot } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslate } from "@/contexts/translate-context";
import { CodeBlock } from "./code-block";
import { FeatureSection } from "./feature-section";

export function OpenCoderSection() {
  const { t } = useTranslate();

  return (
    <>
      <FeatureSection
        description={t.features.opencodeDesc}
        features={t.features.opencodeFeatures}
        icon={<Bot className="h-5 w-5" />}
        id="opencode"
        title={t.features.opencodeTitle}
      />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <Accordion className="mb-8" collapsible type="single">
          <AccordionItem value="install">
            <AccordionTrigger className="font-semibold text-lg">
              {t.common.installation}
            </AccordionTrigger>
            <AccordionContent>
              <CodeBlock
                code="npm install -g opencode-ai"
                label={t.install.opencodeInstall}
                language="bash"
              />
              <p className="my-2 text-center text-muted-foreground text-sm">
                ou
              </p>
              <CodeBlock code="brew install sst/tap/opencode" language="bash" />
              <CodeBlock
                code="opencode --version"
                label={t.install.verifyInstall}
                language="bash"
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="config-openrouter">
            <AccordionTrigger className="font-semibold text-lg">
              {t.install.opencodeConfig} — OpenRouter
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 text-muted-foreground text-sm">
                {t.config.opencodeDesc}
              </p>
              <CodeBlock
                code={`mkdir -p ~/.config/opencode

# Cria o arquivo de config
# ~/.config/opencode/config.json`}
                language="bash"
              />
              <CodeBlock
                code={t.config.opencodeContent}
                label="~/.config/opencode/config.json"
                language="json"
              />
              <p className="mt-4 text-muted-foreground text-sm">
                Modelos gratuitos disponíveis no OpenRouter:
              </p>
              <ul className="mt-2 space-y-1 text-muted-foreground text-sm">
                <li>
                  <code className="rounded bg-muted px-1 py-0.5 text-xs">
                    openrouter/google/gemini-2.0-flash-exp:free
                  </code>
                </li>
                <li>
                  <code className="rounded bg-muted px-1 py-0.5 text-xs">
                    openrouter/meta-llama/llama-3.3-70b-instruct:free
                  </code>
                </li>
                <li>
                  <code className="rounded bg-muted px-1 py-0.5 text-xs">
                    openrouter/mistralai/mistral-7b-instruct:free
                  </code>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="config-ollama">
            <AccordionTrigger className="font-semibold text-lg">
              {t.install.opencodeOllama}
            </AccordionTrigger>
            <AccordionContent>
              <CodeBlock
                code={`# Instala Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Baixa um modelo
ollama pull qwen2.5-coder:7b`}
                language="bash"
              />
              <p className="mt-4 mb-4 text-muted-foreground text-sm">
                Edite ~/.config/opencode/config.json:
              </p>
              <CodeBlock
                code={`{
  "model": "ollama/qwen2.5-coder:7b",
  "provider": {
    "ollama": {
      "apiBase": "http://localhost:11434"
    }
  }
}`}
                label="~/.config/opencode/config.json"
                language="json"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
