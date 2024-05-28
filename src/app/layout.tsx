import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/MainLayout";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dian'es Digital Arts",
  description: "A showcase of art creations by Diane",
};
import localFont from 'next/font/local'
const rustic = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Rustic.otf',
      weight: '200'
    },
    
  ],
  variable: '--font-rustic'
})
const bariol = localFont({
  src: [
    {
      path: '../../public/assets/fonts/bariol.otf',
      weight: '400'
    },
    
  ],
  variable: '--font-bariol'
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${rustic.variable} ${bariol.variable}`}>
        <Layout>{children}</Layout>
        </body>
    </html>
  );
}
