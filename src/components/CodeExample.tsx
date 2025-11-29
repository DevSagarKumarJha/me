import { useState, useEffect, useRef } from "react";
import { Check, Copy, Expand } from "lucide-react";
import Prism from "prismjs";

import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";

import { Button } from "./ui/button";

// ------------------------------
//      Type Definitions
// ------------------------------
interface CodeExampleProps {
  code?: string;
  language?: string;
  fileName?: string;
  copyable?: boolean;
}

type LangMap = {
  [key: string]: string;
};

const CodeExample = ({
  code = "",
  language = "tsx",
  fileName = "intro.js",
  copyable = false,
}: CodeExampleProps) => {
  const [copied, setCopied] = useState(false);

  const codeRef = useRef<HTMLElement | null>(null);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const getPrismLanguage = (lang: string): string => {
    const langMap: LangMap = {
      js: "javascript",
      tsx: "tsx",
      css: "css",
      scss: "scss",
      html: "html",
      json: "json",
      bash: "bash",
      shell: "bash",
    };

    return langMap[lang] || lang;
  };

  return (
    <div
      className={`relative rounded-md overflow-hidden border border-orange-300 inset-2 md:inset-4 z-50 flex flex-col
      }`}
    >
      <div className="flex justify-start bg-gray-100 dark:bg-[#2a2a2a] border-b border-orange-300">
        <div className="flex justify-center items-center gap-1 pl-4 pr-2">
          <div className="bg-red-500 p-2 rounded-full"></div>
          <div className="bg-yellow-500 p-2 rounded-full"></div>
          <div className="bg-green-500 p-2 rounded-full"></div>
        </div>

        {fileName && (
          <div className="flex items-center w-full py-1.5 md:py-2  text-gray-700 dark:text-gray-200 text-lg">
            {fileName}
          </div>
        )}
      </div>

      <div
        className={`relative flex-1 justify-center items-center overflow-auto`}
      >
        <pre
          className={"p-3 md:p-4 overflow-x-auto text-lg md:text-xl"}
          style={{ backgroundColor: "var(--code-bg, #0a0a0a)" }}
        >
          <code
            ref={codeRef}
            className={`language-${getPrismLanguage(language)}`}
          >
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeExample;
