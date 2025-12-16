import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Sagar Kumar Jha",
  description: "Project built by Sagar Kumar Jha",
};

export default function ProjectPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="max-w-4xl mx-auto sm:py-12 py-3">{children}</main>;
}
