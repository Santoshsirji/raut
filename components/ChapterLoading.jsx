"use client";

import React from "react";
import Slate from "./slate/Slate";
import { Skeleton } from "@nextui-org/react";

const ChapterLoading = () => {
    return (
        <div className="flex flex-col">
            <div className="w-full border-t-[1px] border-neutral-200">
                <main className="max-w-7xl mx-auto px-1 sm:px-6 :px-8 space-y-8">
                    <Slate>
                        <div className="
                            py-16
                            w-[90vw]
                            md:w-[80vw]
                            lg:w-[70vw]
                            xl:w-full
                            2xl:w-full
                            animate-pulse
                            duration-2000
                            lg:pr-3
                        ">
                            <div className="my-5 w-full">
                                <Skeleton className="h-36 w-full bg-gray-200 dark:bg-gray-500" />
                            </div>
                            <div className="text- mb-5 space-y-5">
                                <Skeleton className="h-7 w-11/12 rounded- bg-gray-200 dark:bg-gray-500" />
                                <Skeleton className="h-5 w-5/5 rounded- bg-gray-200 dark:bg-gray-500" />
                            </div>
                            <div className="text- mb-5 space-y-5">
                                <Skeleton className="h-5 w-11/12 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-5/5 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-3/6 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-11/12 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-11/12 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-5/5 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-3/4 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-11/12 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-11/12 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-5/5 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-3/5 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-11/12 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-11/12 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-5/5 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-3/3 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-11/12 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-11/12 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-5/5 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-3/6 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-11/12 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-11/12 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-5/5 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-3/5 bg-gray-200 dark:bg-gray-500 rounded-" />
                                <Skeleton className="h-5 w-11/12 bg-gray-200 dark:bg-gray-500 rounded-" />
                                {/* Add more skeleton elements here */}
                            </div>
                        </div>
                    </Slate>
                </main>
            </div>
        </div>
    );
}

export default ChapterLoading;
