"use client";

import { useEffect, useRef } from "react";
import Prism from "prismjs";

import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";

interface CodeExampleProps {
  code?: string;
  language?: string;
  fileName?: string;
  copyable?: boolean;
}

const langMap: Record<string, string> = {
  js: "javascript",
  tsx: "tsx",
  html: "html",
  css: "css",
  scss: "scss",
  json: "json",
  bash: "bash",
  shell: "bash",
};

export default function CodeExample({
  code = "",
  language = "tsx",
  fileName = "intro.js",
}: CodeExampleProps) {
  const codeRef = useRef<HTMLElement | null>(null);
  const resolvedLang = langMap[language] || language;

  useEffect(() => {
    if (codeRef.current) Prism.highlightElement(codeRef.current);
  }, [code, resolvedLang]);

  return (
    <div className="relative rounded-md overflow-hidden border border-orange-300 inset-2 md:inset-4 z-50 flex flex-col">
      {/* Top bar */}
      <div className="flex justify-start bg-gray-100 dark:bg-[#2a2a2a] border-b border-orange-300">
        <div className="flex justify-center items-center gap-1 pl-4 pr-2">
          <div className="bg-red-500 p-2 rounded-full"></div>
          <div className="bg-yellow-500 p-2 rounded-full"></div>
          <div className="bg-green-500 p-2 rounded-full"></div>
        </div>

        {fileName && (
          <div className="flex items-center w-full py-1.5 md:py-2 text-gray-700 dark:text-gray-200 text-lg">
            {fileName}
          </div>
        )}
      </div>

      {/* Code Container */}
      <div className="relative flex-1 justify-center items-center overflow-auto">
        <pre
          className={`sm:p-4 overflow-x-auto text-xs sm:text-sm`}
          // 👇 static style (no dynamic values = SSR safe)
          style={{ backgroundColor: "var(--code-bg, #0a0a0a)" }}
          tabIndex={0} // 👈 explicitly added (fix mismatch)
        >
          <code
            ref={codeRef}
            className={`language-${resolvedLang}`} // 👈 stable on server + client
          >
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}
