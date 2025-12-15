import type { Metadata } from "next";
import { Roboto, Noto_Sans } from "next/font/google";
import "./globals.css";
import ThemeProviderWrapper from "@/components/wrappers/ThemeProviderWrapper"; // new client wrapper
import { Navbar } from "@/components/ui/Navbar";
import FooterSection from "@/sections/FooterSection";
import { GlobalModalProvider } from "@/components/wrappers/GlobalModalProvider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sagar Kumar Jha",
  description: "Full Stack Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${notoSans.variable} ${roboto.variable} antialiased bg-white dark:bg-black/80 max-w-4xl mx-auto`}
      >
        <ThemeProviderWrapper>
          <GlobalModalProvider>
            <Navbar />
            {children}
            <FooterSection />
          </GlobalModalProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
