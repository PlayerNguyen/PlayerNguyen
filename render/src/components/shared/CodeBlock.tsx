import { useState, useEffect } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-css";

const langMap: Record<string, string> = {
  js: "javascript",
  jsx: "jsx",
  ts: "typescript",
  typescript: "typescript",
  javascript: "javascript",
  bash: "bash",
  sh: "bash",
  json: "json",
  css: "css",
  html: "html",
};

interface CodeBlockProps {
  language?: string;
  children: React.ReactNode;
}

export function CodeBlock({ language, children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const code = String(children).replace(/\n$/, "");
  const lang = (language && langMap[language.toLowerCase()]) || undefined;
  const [html, setHtml] = useState("");

  useEffect(() => {
    if (lang && Prism.languages[lang]) {
      setHtml(Prism.highlight(code, Prism.languages[lang], lang));
    } else {
      setHtml(code.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    }
  }, [code, lang]);

  function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative group my-6 bg-canvas border border-hairline rounded-md overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-hairline bg-canvas-soft/50">
        <span className="text-code text-mute font-mono">
          {language || "code"}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded-sm text-code text-mute hover:text-ink hover:bg-hairline/20 transition-colors"
        >
          {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      {/* Code body */}
      <div className="overflow-x-auto">
        <pre className="p-4 m-0">
          <code
            className="font-mono text-code leading-[18px] block"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </pre>
      </div>
    </div>
  );
}

export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 rounded-sm bg-canvas-soft text-canvas-text-soft font-mono text-code border border-hairline/50">
      {children}
    </code>
  );
}
