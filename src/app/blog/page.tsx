"use client";
import React, { useEffect, useState } from "react";
import LottieAnimation from "@/components/Lottie";
import { useSidebarStore } from "@/utils/zustand/sidebar.store";

const Page = () => {
  const routing = useSidebarStore();
  const [loading, setLoading]: any = useState(true);
  useEffect(() => {
    setTimeout(() => {}, 1000000);
    routing.setInitialSide("Bio");
  }, []);
  return (
    <div>
      <p className="text-white">{routing.side}</p>
      <div className="flex flex-col gap-4 w-52">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  );
};

export default Page;
