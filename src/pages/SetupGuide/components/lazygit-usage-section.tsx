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
import { CodeBlock } from "./code-block";

export function LazygitUsageSection() {
  const { t } = useTranslate();

  return (
    <div className="space-y-4">
      <p className="text-muted-foreground text-sm">{t.usage.lazygitDesc}</p>

      <CodeBlock
        code={
          "# Abre de dentro do Neovim:\n<leader>gg\n\n# Ou direto no terminal:\nlazygit"
        }
        language="bash"
      />

      <h4 className="font-medium">{t.common.githubSetup}</h4>
      <CodeBlock
        code={`# Identidade\ngit config --global user.name "Seu Nome"\ngit config --global user.email "seu@email.com"\n\n# Chave SSH\nssh-keygen -t ed25519 -C "seu@email.com"\ncat ~/.ssh/id_ed25519.pub\n\n# Testa conexão\nssh -T git@github.com`}
        language="bash"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">{t.usage.lazygitBasic}</CardTitle>
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
                      j / k
                    </kbd>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Stage/Unstage</TableCell>
                  <TableCell>
                    <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                      Space
                    </kbd>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Stage all</TableCell>
                  <TableCell>
                    <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                      a
                    </kbd>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Commit</TableCell>
                  <TableCell>
                    <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                      c
                    </kbd>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Push</TableCell>
                  <TableCell>
                    <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                      P
                    </kbd>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Pull</TableCell>
                  <TableCell>
                    <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                      p
                    </kbd>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              {t.usage.lazygitBranches}
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
                  <TableCell>Criar branch</TableCell>
                  <TableCell>
                    <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                      n
                    </kbd>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Checkout</TableCell>
                  <TableCell>
                    <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                      Space
                    </kbd>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Merge</TableCell>
                  <TableCell>
                    <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                      M
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
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              {t.usage.lazygitCommits}
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
                  <TableCell>Expandir</TableCell>
                  <TableCell>
                    <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                      Enter
                    </kbd>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Reword último</TableCell>
                  <TableCell>
                    <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                      r
                    </kbd>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Reset</TableCell>
                  <TableCell>
                    <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                      g
                    </kbd>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cherry-pick</TableCell>
                  <TableCell>
                    <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                      c
                    </kbd>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">{t.usage.lazygitStash}</CardTitle>
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
                  <TableCell>Guardar</TableCell>
                  <TableCell>
                    <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                      s
                    </kbd>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Aplicar</TableCell>
                  <TableCell>
                    <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                      Space
                    </kbd>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Descartar</TableCell>
                  <TableCell>
                    <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                      d
                    </kbd>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">{t.usage.lazygitOther}</CardTitle>
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
                <TableCell>Ajuda</TableCell>
                <TableCell>
                  <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                    ?
                  </kbd>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Refresh</TableCell>
                <TableCell>
                  <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                    R
                  </kbd>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Menu contexto</TableCell>
                <TableCell>
                  <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                    x
                  </kbd>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fechar</TableCell>
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
    </div>
  );
}
