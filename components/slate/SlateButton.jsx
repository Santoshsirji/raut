"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
const SlateButton = ({id}) => {

    return (
        <div
        className="
        w-max
        bg-[#131313]
        text-md
        p-2
        text-center
        font-semibold
        rounded-lg
        hover:bg-zinc-950
        cursor-pointer
        text-white
        "
        >
            <Link href={`/blogs/${id}`} className="w-full">Read More</Link>
        </div>
    )
};

export default SlateButton;