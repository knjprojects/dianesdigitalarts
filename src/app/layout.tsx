import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/MainLayout";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dian'es Digital Arts",
  description: "A showcase of art creations by Diane",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
        </body>
    </html>
  );
}
