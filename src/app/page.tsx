// pages/Home.tsx
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import ScrollAnimation from "@/components/ScrollAnimation";
import TypeWriter from "@/components/TypeWriter";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
     

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className=""></div>
        <TypeWriter />
        <ScrollAnimation />
      </main>
    </AnimatePresence>
  );
}
