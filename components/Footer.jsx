"use client";

import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";


const Footer = () => {
  return (
    <div
      className="
    bg-white
    dark:bg-gray-800
    bottom-0
    border-t
    border-neutral-300
    shadow-sm
    py-4
    gap-8
    w-full
    sm:flex
    "
    >
      <div
        className="
      flex
      items-center
      w-full
      justify-center
      dark:text-white
      "
      >
        <Image alt="Logo" src={"/bmlogo.png"} width={70} height={70} className="h-20 w-auto rounded-full" />
        <span className="font-bold px-2 py-2 text-black dark:text-white">Santosh Raut</span>
      </div>
      <div className="flex w-full items-center justify-center">Copyright © 2024 rautsantosh.com.np</div>
      <div
        className="
      flex
      gap-4
      w-full
      items-center
      justify-center
      py-2
      "
      > <Link href="https://www.youtube.com/@Basic-Mathematics"><FaYoutube size={25} /></Link>
        <Link href="https://www.facebook.com/profile.php?id=100042576018619"><FaFacebook size={25} /></Link>
        <Link href="https://www.instagram.com/santosh_raut_11/"><FaInstagramSquare size={25} /></Link>
        <Link href="https://twitter.com/Scienceario"><FaXTwitter size={25} /></Link>
      </div>
    </div>
  )
}

export default Footer
