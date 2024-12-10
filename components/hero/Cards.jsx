"use client";
import Link from "next/link";
import React from "react"
import Image from "next/image";

const Cards = ({ subject }) => {

  return (
    <div
      className="
    flex
    flex-col
    bg-white
    dark:bg-gray-800
    h-[555px]
    w-full
    md:w-[400px]
    overflow-hidden
    border
    border-neutral-100
    rounded-2xl
    shadow-lg
    cursor-pointer
    font-semibold
    spcace-y-4
    justify-between
    "
    >
      <div
        className="w-full"
      >
        <Image
          alt="Banner"
          src={subject.imageSrc}
          
          width={400}
          height={100}
          quality={40}
          className="
        w-full
        h-[198px]
        saturate-150
        "
        />
      </div>
      <h1
        className="
        w-full
        text-start
        overflow-hidden
        text-lg
        font-medium
        text-gray-900
        dark:text-white
        px-4
        "
      >
        {subject.title}
      </h1>
      <p
        className="
        w-full
        text-justify
        text-sm
        px-4
        font-normal
        overflow-hidden
        dark:text-white
        "
      >
        {subject.description}
      </p>
      <Link
        href={subject.href}
        className="
        w-full
        saturate-105
        bg-[#131313]
        hover:saturate-150
        py-3
        text-white
        text-lg
        text-center
        hover:bg-zinc-950
        "
      >
        Checkout
      </Link>
    </div>
  )
}

export default Cards
