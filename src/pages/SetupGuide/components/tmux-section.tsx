import { Terminal } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslate } from "@/contexts/translate-context";
import { CodeBlock } from "./code-block";
import { FeatureSection } from "./feature-section";

export function TmuxSection() {
  const { t } = useTranslate();

  return (
    <>
      <FeatureSection
        description={t.features.tmuxDesc}
        features={t.features.tmuxFeatures}
        icon={<Terminal className="h-5 w-5" />}
        id="tmux"
        title={t.features.tmuxTitle}
      />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <Accordion className="mb-8" collapsible type="single">
          <AccordionItem value="install">
            <AccordionTrigger className="font-semibold text-lg">
              {t.common.installation}
            </AccordionTrigger>
            <AccordionContent>
              <Tabs className="mt-4" defaultValue="macos">
                <TabsList>
                  <TabsTrigger value="macos">{t.common.macOS}</TabsTrigger>
                  <TabsTrigger value="ubuntu">{t.common.ubuntu}</TabsTrigger>
                </TabsList>
                <TabsContent value="macos">
                  <CodeBlock
                    code="brew install tmux"
                    label={t.install.tmuxInstall}
                    language="bash"
                  />
                </TabsContent>
                <TabsContent value="ubuntu">
                  <CodeBlock
                    code="sudo apt install tmux -y"
                    label={t.install.tmuxInstall}
                    language="bash"
                  />
                </TabsContent>
              </Tabs>
              <CodeBlock
                code="tmux -V"
                label={t.install.verifyInstall}
                language="bash"
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="config">
            <AccordionTrigger className="font-semibold text-lg">
              {t.common.configuration}
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 text-muted-foreground text-sm">
                {t.config.tmuxDesc}
              </p>
              <CodeBlock
                code={t.config.tmuxContent}
                label="~/.tmux.conf"
                language="bash"
              />
              <p className="mt-4 mb-2 text-muted-foreground text-sm">
                Recarregue sem reiniciar:
              </p>
              <CodeBlock code="tmux source-file ~/.tmux.conf" language="bash" />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="tpm">
            <AccordionTrigger className="font-semibold text-lg">
              {t.install.tpmInstall}
            </AccordionTrigger>
            <AccordionContent>
              <CodeBlock
                code="git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm"
                language="bash"
              />
              <p className="mt-4 mb-4 text-muted-foreground text-sm">
                Adicione no final do ~/.tmux.conf:
              </p>
              <CodeBlock
                code={`set -g @plugin 'tmux-plugins/tpm'
set -g @plugin 'tmux-plugins/tmux-resurrect'
set -g @plugin 'tmux-plugins/tmux-continuum'

set -g @continuum-restore 'on'

run '~/.tmux/plugins/tpm/tpm'`}
                language="bash"
              />
              <p className="mt-4 text-muted-foreground text-sm">
                Instale os plugins pressionando{" "}
                <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                  Ctrl+a I
                </kbd>
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">{t.shortcuts.tmuxWindows}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ação</TableHead>
                    <TableHead>Comando</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Criar nova janela</TableCell>
                    <TableCell>
                      <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                        Ctrl+a c
                      </kbd>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Ir para janela N</TableCell>
                    <TableCell>
                      <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                        Ctrl+a N
                      </kbd>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Próxima janela</TableCell>
                    <TableCell>
                      <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                        Ctrl+a n
                      </kbd>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Janela anterior</TableCell>
                    <TableCell>
                      <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                        Ctrl+a p
                      </kbd>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Renomear janela</TableCell>
                    <TableCell>
                      <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                        Ctrl+a ,
                      </kbd>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Listar janelas</TableCell>
                    <TableCell>
                      <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                        Ctrl+a w
                      </kbd>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Fechar janela</TableCell>
                    <TableCell>
                      <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                        Ctrl+a &amp;
                      </kbd>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{t.shortcuts.tmuxPanes}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ação</TableHead>
                      <TableHead>Comando</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Split vertical</TableCell>
                      <TableCell>
                        <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                          Ctrl+a %
                        </kbd>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Split horizontal</TableCell>
                      <TableCell>
                        <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                          Ctrl+a &quot;
                        </kbd>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Fechar pane</TableCell>
                      <TableCell>
                        <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                          Ctrl+a x
                        </kbd>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Zoom pane</TableCell>
                      <TableCell>
                        <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                          Ctrl+a z
                        </kbd>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Navegar panes</TableCell>
                      <TableCell>
                        <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                          Alt + ←↑→↓
                        </kbd>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                {t.shortcuts.tmuxSessions}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ação</TableHead>
                      <TableHead>Comando</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Desconectar</TableCell>
                      <TableCell>
                        <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                          Ctrl+a d
                        </kbd>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Renomear sessão</TableCell>
                      <TableCell>
                        <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                          Ctrl+a $
                        </kbd>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Listar sessões</TableCell>
                      <TableCell>
                        <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                          Ctrl+a s
                        </kbd>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Listar (fora tmux)</TableCell>
                      <TableCell>
                        <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                          tmux ls
                        </kbd>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Reconectar</TableCell>
                      <TableCell>
                        <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                          tmux a -t dev
                        </kbd>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
