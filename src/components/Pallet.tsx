// components/Palette.js
"use client"
import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import pallette1 from "../../public/assets/img/pallette1.png"
import pallette2 from "../../public/assets/img/pallette2.png"
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import { auth } from '@/auth';
const Palette = async() => {
    const session = await auth();
  const nextauthuser = session?.user!;
  const nextauthemail = nextauthuser.email;
  //const isAdmin = user?.email === process.env.ADMIN_EMAIL;
  const isAdminNextAuth = nextauthemail === process.env.ADMIN_EMAIL;
    const [isHovered, setIsHovered] = useState(false);

 
  const handleColorClick = (color:string) => {
    console.log(`Selected color: ${color}`);
  };

  return (
    <div  onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)} className={`transition-all ease-in-out duration-400 delay-200 hover:scale-75 items-center relative group w-72 h-72 ${isHovered ? 'cursor-hover' : 'cursor-default'}`}>
      <Image
    src={pallette1}
    alt="Paint Palette"
   
    
    className="rounded-full transition duration-300 ease-in-out group-hover:hidden"
  />
  <Image
    src={pallette2}
    alt="Paint Palette (Hover)"
    
    className="rounded-full transition duration-300 ease-in-out group-hover:block"
  />
      <button
        className="btn btn-circle btn-xs absolute top-28 left-12 bg-yellow-300 cursor-hover group-hover:bg-green-300"
        onClick={() => handleColorClick('yellow')}
      ></button>
      <button
        className="btn btn-circle btn-xs absolute top-14 left-28 bg-blue-300 cursor-hover group-hover:bg-purple-300"
        onClick={() => handleColorClick('blue')}
      ></button>
      <button
        className="btn btn-circle btn-xs absolute top-20 left-48 bg-green-300 cursor-hover group-hover:bg-blue-500"
        onClick={() => handleColorClick('green')}
      ></button>
      {nextauthuser ? (
              <>
                <div className="flex flex-row">
                  <SignOutButton />
                  Sign Out of github,nextauth
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-row">
                  <SignInButton type="github" />
                  <p>Sign In with Github, nextauth</p>
                </div>
              </>
            )}
      <button
        className="btn btn-circle btn-xs absolute bottom-24 right-12 bg-red-500 cursor-hover group-hover:bg-green-300"
        onClick={() => handleColorClick('red')}
      ></button>
    </div>
  );
};

export default Palette;
