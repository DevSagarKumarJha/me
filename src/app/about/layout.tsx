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
    <main className="max-w-4xl mx-auto sm:py-12 py-3">
        {children}
    </main>
  );
}