"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Decoration = () => {
  const [messages, setMessages] = useState(["Physics", "Chemistry", "Computer Science"]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < messages[currentIndex].length) {
        setText(prevText => prevText + messages[currentIndex].charAt(index));
        setIndex(prevIndex => prevIndex + 1);
      } else {
        setTimeout(() => {
          setText("");
          setIndex(0);
          setCurrentIndex(prevIndex => (prevIndex + 1) % messages.length);
        }, 2000); 
      }
    }, 40); // Adjust typing speed here

    return () => clearTimeout(timer);
  }, [index, currentIndex, messages]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prevShowCursor => !prevShowCursor);
    }, 350); 
    return () => clearInterval(cursorTimer);
  }, [showCursor]);

  const clipPathStyle = {
    clipPath: "polygon(10% 0px, 100% 0%, 100% 100%, 0px 100%)"
  };


  return (
    <div
      className="
      w-full
      flex
      items-center
      h-96
      justify-between
      "
    >
      <div
        className="
        md:w-[50%]
        flex
        flex-col
        "
      >
        <div className="font-semibold text-zinc-700 dark:text-white text-3xl md:text-4xl">Welcome to <span className=" text-black saturate-150 dark:text-rose-600">Santosh Raut</span></div>
        <div className="w-max">
          <div className="w-[350px] flex flex-col">
            <div className="font-semibold text-zinc-700 dark:text-white text-lg w-full">
              <span className="w-[50%]">Get Notes of: </span>
              <span className=" text-black saturate-150 dark:text-rose-600 w-[49%]">{text}</span>
              <span className={showCursor ? "opacity-100" : "opacity-0"}>|</span>
            </div>
          </div>
        </div>
        <p
          className="
          md:font-normal
          text-sm
          pr-4
          text-zinc-700
          dark:text-white
          text-wrap
          w-full
          "
        >
          Feeling confused and lacking perfect notes? Don&apos;t worry, I&apos;ve got you covered. Browse through NEB subjects and discover the best notes tailored just for you. And the best part? It&apos;s all free! This corner in the internet is my way of sharing exceptional notes that I meticulously crafted during my student years. Wishing you the best of luck!
        </p>
        <div className="flex items-center h-20 space-x-5">
          <Link href={"/modelquestions"} className="bg-zinc-800 dark:bg-rose-600 hover:opacity-95 hover:saturate-150 text-white font-semibold py-2 px-4 rounded-sm text-sm">Get PYQs</Link>
          <Link href={"/note"} className="bg-zinc-200 dark:bg-rose-200 dark:hover:bg-rose-400 hover:bg-zinc-400 text-zinc-900 font-semibold py-2 px-4 rounded-sm text-sm">Explore Notes</Link>
        </div>
      </div>
      <div
        className="h-full grow w-[50%] hidden md:flex"
        style={clipPathStyle}
      >
        <div className="h-full object-cover"><Image src={"https://images.unsplash.com/photo-1605256585681-455837661b18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Notes Image" height={500} width={1000} className="w-full scale-[2] saturate-125 h-full" quality={30}/></div>
      </div>
    </div>
  );
}

export default Decoration;
