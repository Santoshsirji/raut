import React from "react";
import Slate from "./slate/Slate";
import { Skeleton } from "@nextui-org/react";

const BlogLoadingSkeleton = () => {
    return (
        <Slate>

            <div className="space-y-3 animate-pulse">
                <div className=" w-full flex items-center gap-3">
                    <div className="w-full flex flex-col items-center gap-2">
                        <Skeleton className="h-7 w-full bg-gray-400 dark:bg-gray-600 rounded-" />
                        <Skeleton className="h-7 w-4/5 bg-gray-400 dark:bg-gray-600 rounded-" />
                    </div>
                </div>
                <div className="max-w-[300px] w-full flex items-center gap-3">
                <div className="max-w-[300px] w-full flex items-center gap-3">
                    <div>
                        <Skeleton className="flex bg-gray-400 dark:bg-gray-600 rounded-full w-12 h-12" />
                    </div>
                    <div className="w-full flex flex-row gap-2">
                        <Skeleton className="h-3 w-3/5 bg-gray-400 dark:bg-gray-600 rounded-" />
                        <Skeleton className="h-3 w-4/5 bg-gray-400 dark:bg-gray-600 rounded-" />
                    </div>
                </div>
                </div>
                <div className="w-full flex flex-row">
                        <Skeleton className="h-3 w-full bg-gray-400 dark:bg-gray-600 rounded-" />
                </div>
                <div className="w-4/5 flex flex-row">
                        <Skeleton className="h-3 w-full bg-gray-400 dark:bg-gray-600 rounded-" />
                </div>
                <div className="w-11/12 flex flex-row">
                        <Skeleton className="h-3 w-full bg-gray-400 dark:bg-gray-600 rounded-" />
                </div>
            </div>
        </Slate>

    )
}

export default BlogLoadingSkeleton;
