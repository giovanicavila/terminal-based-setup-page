import { PenTool } from "lucide-react";
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
import { useTranslate } from "@/contexts/translate-context";
import { FeatureSection } from "./feature-section";
import { NeovimInstallSection } from "./neovim-install-section";

export function NeovimSection() {
  const { t } = useTranslate();

  return (
    <>
      <FeatureSection
        description={t.features.neovimDesc}
        features={t.features.neovimFeatures}
        icon={<PenTool className="h-5 w-5" />}
        id="neovim"
        title={t.features.neovimTitle}
      />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <Accordion className="mb-8" collapsible type="single">
          <AccordionItem value="install">
            <AccordionTrigger className="font-semibold text-lg">
              {t.common.installation}
            </AccordionTrigger>
            <AccordionContent>
              <NeovimInstallSection />
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
                      {t.shortcuts.neovimBasic}
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
                          <TableCell>Navegar lista</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              j / k
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
                          <TableCell>Explorer lateral</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              &lt;leader&gt;e
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
                      {t.shortcuts.neovimFiles}
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
                          <TableCell>Buscar arquivo</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              &lt;leader&gt;ff
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Buscar texto</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              &lt;leader&gt;fg
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Buffers</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              &lt;leader&gt;fb
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Abrir Lazy</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              &lt;leader&gt;l
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Abrir lazygit</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              &lt;leader&gt;gg
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
                      {t.shortcuts.neovimEditing}
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
                          <TableCell>Modo inserção</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              i
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Modo normal</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              Esc
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Salvar</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              :w
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Salvar e fechar</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              :wq
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Go to definition</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              gd
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Code actions</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              &lt;leader&gt;ca
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
                      {t.shortcuts.neovimSplits}
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
                          <TableCell>Split vertical</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              &lt;leader&gt;|
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Split horizontal</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              &lt;leader&gt;-
                            </kbd>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Navegar splits</TableCell>
                          <TableCell>
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                              Ctrl+h/j/k/l
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
