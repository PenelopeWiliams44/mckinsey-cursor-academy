import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CopyPrompt({ text, label = "Copy prompt" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <div className="group relative my-3 border border-border bg-[var(--cream)]">
      <div className="flex items-center justify-between border-b border-border px-3 py-1.5">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Prompt for Cursor
        </span>
        <Button
          size="sm"
          variant="ghost"
          onClick={onCopy}
          className="h-7 gap-1.5 px-2 text-xs text-foreground hover:bg-[var(--gold)]/20"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : label}
        </Button>
      </div>
      <pre className="overflow-x-auto p-3 text-[13px] leading-relaxed text-foreground whitespace-pre-wrap font-mono">
        {text}
      </pre>
    </div>
  );
}
