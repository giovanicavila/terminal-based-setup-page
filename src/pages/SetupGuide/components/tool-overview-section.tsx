import { Bot, FolderOpen, PenTool, Terminal } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTranslate } from "@/contexts/translate-context";

export function ToolOverviewSection() {
  const { t } = useTranslate();

  const tools = [
    {
      name: "tmux",
      icon: Terminal,
      role: t.why.tmuxRole,
      advantage: t.why.tmuxAdvantage,
    },
    {
      name: "Neovim + LazyVim",
      icon: PenTool,
      role: t.why.neovimRole,
      advantage: t.why.neovimAdvantage,
    },
    {
      name: "Yazi",
      icon: FolderOpen,
      role: t.why.yaziRole,
      advantage: t.why.yaziAdvantage,
    },
    {
      name: "OpenCoder",
      icon: Bot,
      role: t.why.opencodeRole,
      advantage: t.why.opencodeAdvantage,
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-8 text-center font-bold text-3xl text-foreground tracking-tight">
          {t.why.title}
        </h2>

        <div className="overflow-hidden rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">{t.why.tool}</TableHead>
                <TableHead>{t.why.role}</TableHead>
                <TableHead className="hidden md:table-cell">
                  {t.why.advantage}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <TableRow key={tool.name}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        <span>{tool.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{tool.role}</TableCell>
                    <TableCell className="hidden text-muted-foreground md:table-cell">
                      {tool.advantage}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
