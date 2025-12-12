import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Me - Sagar Kumar Jha | Sagar Kumar Jha",
  description: "About Sagar Kumar Jha",
};

export default function AboutPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-5xl mx-auto">
        {children}
    </main>
  );
}