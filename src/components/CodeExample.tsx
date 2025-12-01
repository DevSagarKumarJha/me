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
    <div className="relative rounded-lg overflow-hidden border border-orange-300 bg-[#1a1a1a] w-full">
      {/* Top Bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-[#262626] border-b border-orange-300">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        {fileName && (
          <p className="text-sm sm:text-base ml-3 text-gray-700 dark:text-gray-300 truncate">
            {fileName}
          </p>
        )}
      </div>

      {/* Code Container */}
      <div className="relative max-h-[60vh] sm:max-h-[75vh]">
        <pre
          className="p-3 sm:p-4 text-xs sm:text-sm"
          style={{ backgroundColor: "#0a0a0a" }}
          tabIndex={0}
        >
          <code ref={codeRef} className={`language-${resolvedLang} `}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}
