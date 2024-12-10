import React from "react";
import { Card, Skeleton } from "@nextui-org/react";
import Container from "./Container";
import Slate from "./slate/Slate";

export default function CardLoading() {
    const mapNumber = ["4", "2", "4", "4", "4", "6", "7", "8", "9", "10"]
    return (
        <Container>
            <div
                className="
                    flex
                    flex-wrap
                    md:mx-10
                    md:gap-10
                    sm:gap-4
                    :gap-40
                    gap-20
                    justify-center
                "
            >
                {mapNumber.map((item, index) => (
                    <div key={index} className="rounded-3xl overflow-hidden">
                        <Card className="h-[455px] animate-pulse
                            w-[90vw]
                            md:w-[350px] space-y-4 p-4 bg-gray-300 dark:bg-gray-500" radius="">
                            <div className="space-y-4 animate-pulse justify-between flex flex-col h-full">
                                <div className=" w-full flex items-center gap-4">
                                    <div className="w-full flex flex-col items-center gap-2">
                                        <Skeleton className="h-[198px] w-full bg-gray-50 dark:bg-gray-300 rounded-xl" />

                                    </div>
                                </div>
                                <div className="w-full flex flex-row">
                                    <Skeleton className="h-10 w-4/4 bg-gray-50 dark:bg-gray-300 rounded-" />
                                </div>
                                <div className="w-full space-y-2">
                                    <div className="w-4/4 flex flex-row">
                                        <Skeleton className="h-4 w-full bg-gray-50 dark:bg-gray-300 rounded-" />
                                    </div>
                                    <div className="w-12/12 flex flex-row">
                                        <Skeleton className="h-4 w-full bg-gray-50 dark:bg-gray-300 rounded-" />
                                    </div>
                                    <div className="w-4/4 flex flex-row">
                                        <Skeleton className="h-4 w-full bg-gray-50 dark:bg-gray-300 rounded-" />
                                    </div>
                                    <div className="w-12/12 flex flex-row">
                                        <Skeleton className="h-4 w-full bg-gray-50 dark:bg-gray-300 rounded-" />
                                    </div>
                                    <div className="w-4/4 flex flex-row">
                                        <Skeleton className="h-4 w-full bg-gray-50 dark:bg-gray-300 rounded-" />
                                    </div>
                                    <div className="w-11/12 flex flex-row">
                                        <Skeleton className="h-4 w-full bg-gray-50 dark:bg-gray-300 rounded-" />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}

            </div>
        </Container>
    );
}
