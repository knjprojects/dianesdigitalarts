import ScrollAnimation from "@/components/ScrollAnimation";
import TypeWriter from "@/components/TypeWriter";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=""></div>
     <TypeWriter />
     <ScrollAnimation />
     
    </main>
  );
}
