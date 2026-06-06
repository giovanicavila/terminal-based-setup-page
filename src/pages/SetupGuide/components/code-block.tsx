import { Check, Copy } from "lucide-react";
import { type ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  code: string;
  language?: string;
  label?: string;
  children?: ReactNode;
}

export function CodeBlock({ code, language = "bash", label }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-4 overflow-hidden rounded-lg border border-border bg-muted/50">
      {label && (
        <div className="flex items-center justify-between border-border border-b px-4 py-2">
          <span className="font-medium text-muted-foreground text-xs">
            {label}
          </span>
          <span className="text-muted-foreground text-xs">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
          <code className="text-foreground">{code}</code>
        </pre>
        <Button
          aria-label={copied ? "Copied" : "Copy code"}
          className="absolute top-2 right-2"
          onClick={handleCopy}
          size="icon-xs"
          variant="ghost"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-green-500" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </Button>
      </div>
    </div>
  );
}
