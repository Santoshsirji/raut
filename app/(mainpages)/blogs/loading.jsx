"use client";

import BlogLoadingSkeleton from "@/components/LoadingSkeleton";
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    const numberofRenders=['1','2','3', '4','5','6','7','8','9','10']
    return (
        <div
        className="
        flex 
        flex-col 
        items-center 
        gap-10 
        w-full
        "
        >
            {numberofRenders.map((item, index) => { 
                
                return <BlogLoadingSkeleton key={index} />
            })}
        </div>
    )
}