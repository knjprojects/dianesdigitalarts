"use client"
import React from 'react';
//import { AppProps } from 'next/app';
//import { AnimatePresence } from 'framer-motion';
import ScrollAnimation from "@/components/ScrollAnimation";
import TypeWriter from "@/components/TypeWriter";
 //<AnimatePresence mode="wait">
 import { useSidebarStore } from '@/utils/zustand/sidebar.store';
 import LottieAnimation from '@/components/Lottie';
export default function Home() {
  const routing=useSidebarStore()
  return (
   
     

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {routing.side=="Geo"? 
        <div className="h-screen w-screen/2 items-center"> <LottieAnimation /> </div>
       :
         <div className=""> 
        <p className="text-white">{routing.side}</p>
        <TypeWriter />
        <ScrollAnimation /></div>
}
        
       
       
      </main>
   
  );
}
