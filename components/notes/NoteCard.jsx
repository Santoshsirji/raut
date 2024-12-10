"use client";
import Link from "next/link";
import React from 'react'
import Image from "next/image";

const Cards = ({ subject }) => {

  return (
    <div
      className='
    flex
    flex-col
    bg-white
    dark:bg-gray-800
    dark:shadow-none
    h-[555px]
    w-full
    md:w-[400px]
    overflow-hidden
    border
    border-gray-200
    rounded-2xl
    shadow-lg
    shadow-neutral-100
    cursor-pointer
    font-semibold
    spcace-y-4
    justify-between
    '
    >
      <div
        className="w-full"
      >
        <Image
          alt="Banner"
          src={subject.imageSrc}
          width={1000}
          height={1000}
          className='
          w-full
          h-[228px]
          saturate-150
          border-b
          border-neutral-200
        '
        />
      </div>
      <div
        className='
        w-full
        h-14
        overflow-hidden
        px-4
        '
      >
        {subject.title}
      </div>
      <div
        className='
        w-full
        text-justify
        px-2
        h-max
        text-sm
        font-light
        overflow-hidden
        '
      >
        {subject.description}
      </div>
      <Link
        href={subject.href}
        className='
        w-full
        saturate-105
        bg-[#131313]
        py-3
        text-white
        text-lg
        text-center
        hover:bg-zinc-950
        '
        target="_blank"
      >
        Checkout
      </Link>
    </div>
  )
}

export default Cards
