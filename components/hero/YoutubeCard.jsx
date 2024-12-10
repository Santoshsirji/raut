"use client";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function YoutubeCard({subject}) {
    return (
        <div
            className="
            flex
            flex-col
            bg-white
            dark:bg-gray-800
            w-full
            md:w-[400px]
            h-[600px]
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
                    height={200}
                    className="
                    w-full
                    h-[198px]
                    saturate-150
                    "
                />
                <div className="bg-white w-max h-max rounded-full">
                <FaYoutube size={30} className="text-red-600 saturate-200 brightness-125 bg-white"/>
                </div>

            </div>
            <h2
                className="
                w-full
                h-20
                overflow-hidden
                text-lg
                font-medium
                text-gray-900
                dark:text-white
                px-1
                "
            >
                {subject.title}
            </h2>
            <p
                className="
                w-full
                text-justify
                px-4
                text-sm
                font-light
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