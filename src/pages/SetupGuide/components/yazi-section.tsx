import { FolderOpen } from "lucide-react";
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

export function YaziSection() {
  const { t } = useTranslate();

  return (
    <>
      <FeatureSection
        description={t.features.yaziDesc}
        features={t.features.yaziFeatures}
        icon={<FolderOpen className="h-5 w-5" />}
        id="yazi"
        title={t.features.yaziTitle}
      />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <Accordion className="mb-8" collapsible type="single">
          <AccordionItem value="install">
            <AccordionTrigger className="font-semibold text-lg">
              {t.common.installation}
            </AccordionTrigger>
            <AccordionContent>
              <h4 className="mb-2 font-medium">1. {t.install.yaziRust}</h4>
              <CodeBlock
                code={`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source "$HOME/.cargo/env"
cargo --version`}
                language="bash"
              />

              <h4 className="mt-6 mb-2 font-medium">2. {t.install.yaziDeps}</h4>
              <Tabs defaultValue="macos">
                <TabsList>
                  <TabsTrigger value="macos">{t.common.macOS}</TabsTrigger>
                  <TabsTrigger value="ubuntu">{t.common.ubuntu}</TabsTrigger>
                </TabsList>
                <TabsContent value="macos">
                  <CodeBlock
                    code="brew install ffmpegthumbnailer unar jq poppler fd ripgrep fzf zoxide imagemagick"
                    language="bash"
                  />
                </TabsContent>
                <TabsContent value="ubuntu">
                  <CodeBlock
                    code="sudo apt install ffmpegthumbnailer unar jq poppler-utils fd-find ripgrep fzf zoxide imagemagick -y"
                    language="bash"
                  />
                </TabsContent>
              </Tabs>

              <h4 className="mt-6 mb-2 font-medium">
                3. {t.install.yaziInstall}
              </h4>
              <CodeBlock
                code="cargo install --locked yazi-fm yazi-cli"
                language="bash"
              />
              <CodeBlock
                code="yazi --version"
                label="Verificar"
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
                {t.config.yaziDesc}
              </p>
              <CodeBlock
                code={t.config.yaziContent}
                label="~/.config/yazi/yazi.toml"
                language="toml"
              />

              <h4 className="mt-6 mb-2 font-medium">4. {t.install.yaziNvim}</h4>
              <p className="mb-2 text-muted-foreground text-sm">
                Crie ~/.config/nvim/lua/plugins/yazi.lua:
              </p>
              <CodeBlock
                code={t.config.yaziNvimPlugin}
                label="~/.config/nvim/lua/plugins/yazi.lua"
                language="lua"
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="shortcuts">
            <AccordionTrigger className="font-semibold text-lg">
              {t.common.shortcuts}
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {t.shortcuts.yaziNav}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Ação</TableHead>
                          <TableHead>Tecla</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Navegar</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              h j k l
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Abrir arquivo</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              Enter
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{t.shortcuts.openNvim}</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              e
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Mostrar ocultos</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              .
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Buscar</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              /
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{t.shortcuts.close}</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              q
                            </kbd>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {t.shortcuts.yaziOps}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Ação</TableHead>
                          <TableHead>Tecla</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Novo arquivo</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              a
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Nova pasta</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              A
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Copiar</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              y
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Cortar</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              x
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Colar</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              p
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Renomear</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              r
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Deletar</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              d
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Selecionar</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              Space
                            </kbd>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {t.shortcuts.openNvim}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Ação</TableHead>
                          <TableHead>Atalho</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            Abrir Yazi (diretório do buffer)
                          </TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              &lt;leader&gt;fy
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Abrir Yazi (cwd)</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              &lt;leader&gt;fY
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Abrir/Fechar Yazi</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              Ctrl+↑
                            </kbd>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
