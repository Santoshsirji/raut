"use client";
import Link from "next/link";


export default function NotFound() {

    return (
        <div
        className="
        w-full
        h-[90vh]
        flex
        flex-col
        items-center
        justify-center
        space-y-5
        "
        >
            <div className="text-center">
            <h2 className="text-xl font-bold">Not Found</h2>
            <p className="text-base">Could not find requested url</p>
            </div>
            <Link href={"/"} className="p-4 text-lg border-2 rounded-lg border-black cursor-pointer dark:bg-rose-600 dark:border-white hover:saturate-150">Return Home</Link>
        </div>
    )
}