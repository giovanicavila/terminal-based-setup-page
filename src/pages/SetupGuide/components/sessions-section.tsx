import { Terminal } from "lucide-react";
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

export function SessionsSection() {
  const { t } = useTranslate();

  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">
            <span className="flex items-center gap-2">
              <Terminal className="h-5 w-5" />
              {t.usage.sessions}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
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
              <TableRow>
                <TableCell>Encerrar sessão</TableCell>
                <TableCell>
                  <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                    tmux kill-session -t dev
                  </kbd>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{t.usage.scroll}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ação</TableHead>
                <TableHead>Comando</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Entrar scroll</TableCell>
                <TableCell>
                  <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                    Ctrl+a [
                  </kbd>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sair scroll</TableCell>
                <TableCell>
                  <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                    q
                  </kbd>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Copiar texto</TableCell>
                <TableCell>
                  <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                    Ctrl+a [ → Space → Enter
                  </kbd>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Colar</TableCell>
                <TableCell>
                  <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
                    Ctrl+a ]
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
