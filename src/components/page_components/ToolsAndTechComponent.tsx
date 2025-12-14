import { Settings } from "lucide-react";
import React from "react";
import { IconType } from "react-icons";

interface SkillProps {
  language: string;
  icon: IconType;
  description: string;
}

interface CategoryProps {
  title: string;
  skills: SkillProps[];
  icon: IconType;
}

interface ToolsAndTechProps {
  categories: CategoryProps[];
}

const ToolsAndTechComponent: React.FC<ToolsAndTechProps> = ({ categories }) => {
  return (
    <div className="w-full flex justify-center py-16 sm:px-12 px-2">
      <div className="max-w-5xl w-full">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Settings className="w-10 h-10 animate-spin text-black dark:text-white" />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">
              Tools & Technologies
            </h2>
          </div>
        </div>

        {categories.map((category, i) => (
          <div key={i} className="">
            <h2 className="text-lg sm:text-xl font-semibold mb-6 flex items-center gap-2">
              <category.icon className="text-lg" />
              {category.title}
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {category.skills.map((skill, j) => (
                <div
                  key={j}
                  className="group relative flex gap-2 p-3 sm:p-4 rounded-xl border transition-all duration-300 overflow-hidden backdrop-blur-sm bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-sm dark:bg-zinc-900/30 dark:border-zinc-800/50 dark:hover:bg-zinc-900/50 dark:hover:border-zinc-700"
                >
                  <skill.icon className="text-4xl" />

                  <div>
                    <h3 className="font-medium text-sm">{skill.language}</h3>
                    {skill.description && (
                      <p className="sm:text-sm text-xs italic text-gray-600 dark:text-gray-400">
                        {skill.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsAndTechComponent;
