import { Project, ProjectStatus } from "@/types/project";


export const projects: Project[] = [
  {
    name: "ZenUI",
    description:
      "An accessible, production-ready UI component library built with Next.js and TailwindCSS. Implements WCAG 2.1 AA compliance standards with comprehensive documentation and TypeScript support for enterprise applications.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://zenui.dev",
    live: true,
    impact: "50+ reusable components",
    status: ProjectStatus.ACTIVE,
  },
  {
    name: "CodeScore",
    description:
      "A comprehensive coding assessment platform enabling developers to solve algorithmic problems with real-time code execution and instant feedback. Built with full-stack architecture for scalability.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Judge0",
      "Docker",
    ],
    repo: "https://github.com/DevSagarKumarJha/codescore",
    impact: "100+ problem sets",
    status: ProjectStatus.IN_PROGRESS,
  },
  {
    name: "WishList Wizard",
    description:
      "A responsive web application for managing wishlists with persistent local storage and clean UI/UX. Demonstrates frontend best practices and localStorage optimization.",
    tech: ["React", "LocalStorage", "Tailwind CSS"],
    link: "https://wish-list-wizard.vercel.app/",
    repo: "https://github.com/DevSagarKumarJha/WishListWizard",
    live: true,
    status: ProjectStatus.ACTIVE,
  },
  {
    name: "Book Library",
    description:
      "Book Library is a simple web application that allows users to browse, search, and filter books from an external API. The application supports both list view and grid view, along with sorting and pagination features.",
    tech: ["HTML/CSS", "JavaScript", "FreeApi"],
    link: "https://devsagarkumarjha.github.io/BookLibrary/",
    repo: "https://github.com/DevSagarKumarJha/BookLibrary",
    live: true,
    status: ProjectStatus.ACTIVE,
  },
];
