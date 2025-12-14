import { ToolCase } from "lucide-react";
import { BiLogoJavascript, BiLogoTypescript, BiLogoVisualStudio } from "react-icons/bi";
import { MdStorage } from "react-icons/md";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAmazonwebservices, SiApachekafka, SiDocker, SiExpress, SiGithubactions, SiMongodb, SiOpenai, SiPostgresql, SiPostman } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";



export const categories = [
  {
    title: "Web - Development",
    icon: TbWorldWww,
    skills: [
      {
        language: "JavaScript",
        description: "Languages of the web",
        icon: BiLogoJavascript,
      },
      {
        language: "TypeScript",
        description: "JavaScript with Types",
        icon: BiLogoTypescript,
      },
      {
        language: "NodeJS",
        description: "JavaScript Run-time Engine",
        icon: RiNodejsFill,
      },
      {
        language: "ReactJS",
        description: "A JavaScript Library",
        icon: RiReactjsFill,
      },
      {
        language: "NextJS",
        description: "React Framework",
        icon: RiNextjsFill,
      },
      {
        language: "Tailwind CSS",
        description: "CSS Framework",
        icon: RiTailwindCssFill,
      },
      {
        language: "Express JS",
        description: "Web Framework for Node.js",
        icon: SiExpress,
      },
    ],
  },
  {
    title: "Tools And Platforms",
    icon: ToolCase,
    skills: [
      {
        language: "Git & GitHub",
        description: "Version Control",
        icon: RiNodejsFill,
      },
      { language: "VS Code", description: "Code Editor", icon: BiLogoVisualStudio },
      { language: "Postman", description: "API Testing", icon: SiPostman },
      { language: "OpenAI", description: "LLM", icon: SiOpenai },
    ],
  },
  {
    title: "Database And Storage",
    icon: MdStorage,
    skills: [{ language: "PostgreSQL", description: "Relational DB", icon: SiPostgresql }, {
      language: "MongoDB",
      description: "NoSQL DB ",
      icon: SiMongodb
    }],
  },
  {
    title: "Devops And Cloud",
    icon: ToolCase,
    skills: [
      { language: "AWS", description: "Containerization", icon: SiAmazonwebservices }
      ,
      { language: "CI/CD", description: "CI/CD with Github Actions", icon: SiGithubactions }
      ,
      { language: "Docker", description: "Cloud Computing", icon: SiDocker }
      ,
      { language: "Apache", description: "Distributed Streaming Platform", icon: SiApachekafka }
  
  ],
  },
];
