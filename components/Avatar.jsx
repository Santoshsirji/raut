"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdExit } from "react-icons/io";

const Avatar = ({ src, onClick, name, currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="
    flex
    flex-col
    items-center
    justify-center
    rounded-full
    cursor-pointer
    border
    "
        onClick={() => setIsOpen(value => !value)}
      >
        <Image width={100} height={100} src={currentUser.image || "/bmlogo.png"} alt={"Logo"} className="w-[40px] h-auto rounded-full" />
      </div>
      {isOpen && (
        <div
          className="
                fixed
                top-20
                right-5
                rounded-xl
                bg-white
                dark:bg-gray-700
                border-2
                border-neutral-200
                shadow-xl
                dark:text-white
                w-64
                text-lg
                h-max
                "
        >
          <div
            className="w-full bg-slate-100 dark:bg-gray-700  px-3 py-2 flex space-x-1 text-sm text-neutral-500 dark:text-white items-center">
            <span>
              {currentUser.name}
            </span>
            {currentUser.email === "santoshraut9862281653@gmail.com" && (<Image alt="Verfiied" src={"/verified.png"} height={40} width={40} className="w-4 h-4" />)}
          </div>
          <div
            onClick={onClick}
            className="w-full hover:bg-slate-200 dark:hover:bg-gray-900 overflow-hidden bg-transparent cursor-pointer px-3 py-2 text-lg font-semibold flex items-center justify-between pr-10">
            <div className="">Logout</div>
            <div className=""><IoMdExit size={24} /></div>
          </div>
        </div>
      )}

    </>
  )
}

export default Avatar
