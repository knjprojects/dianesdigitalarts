"use client"
import React from 'react'
import Image from "next/image";
//import Hero from "./Hero";
import Link from "next/link";
import SplineDesign from "./Spline";
import SnapSectionsWrapper from './SnapSectionsWrapper';
import TypeWriter from "./TypeWriter";
type Props = {}

const Homey = (props: Props) => {
  return (
    //apply snap-y to parentof the sections we want to snap, then snap-center to the children sections, try snap-mandatory or snap-proximity
    //without bg-cover the bg will repeat and look ugly, bg-center actually stretches the bg from the middle outwards, not top left go out
    //my initial gradient from-purple-600 to-green-500 via-blue-700
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-grad bg-no-repeat bg-center bg-cover snap-y">
      <SnapSectionsWrapper> <section className="snap-center h-240 border-opacity-0 z-10">
      <p className=" text-white animate-bounce md:drop-shadow-md drop-shadow-xl border-opacity-50 font-bold fixed left-0 top-0 flex justify-center border-b border-gray-300 bg-gradient-to-r from-purple-600 to-green-500 via-blue-700  pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
         Diane's Digital Art 
      </p>

      </section>
        <TypeWriter />
      <section>
        <SplineDesign />
      </section>
     <section className="">
     
     </section>
     <section className="h-240 w-full bg-pink-400 ">
      <div className="m-64 bg-[#29F191]">
        <p>Paragraph here</p>
      </div>
     </section>
     <section className="h-240 w-full bg-green-400">
      <div className="m-64 bg-[#882FFF]">
        <p>Paragraph here</p>
      </div>
     </section> </SnapSectionsWrapper>
      
      
    </main>
  )
}

export default Homey