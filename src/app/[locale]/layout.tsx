import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/providers/theme-provider";
import WelcomeSection from "@/components/WelcomeSection";

const firacode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Erica Reis",
  description: "Developer Portfolio of Erica Reis",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${firacode.variable} antialiased bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NextIntlClientProvider>
            <Header />

            <WelcomeSection />

            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
