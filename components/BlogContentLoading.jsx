import React from "react"
import Slate from "./slate/Slate";
import { Skeleton } from "@nextui-org/react";

const BlogContentLoading = () => {
  return (
      <Slate>
          <div className="
                py-16
                w-full
                md:w-[75vw]
                :w-[65vw]
                xl:w-full
                animate-pulse
                2xl:w-full
                ">
              <div className="my-5 w-full">
                  <Skeleton className="h-24 bg-neutral-200" />
              </div>
              <div className="text- mb-5 space-y-5 w-full">
                  <Skeleton className="h-5 w-3/5 rounded- bg-neutral-200" />
                  <Skeleton className="h-5 w-5/5 rounded- bg-neutral-200" />
              </div>
              <div className="text- mb-5 space-y-10 w-full">
                  <Skeleton className="h-5 w-3/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-5/5 bg-neutral-200 rounded-" />
              </div>
              <div className="text- mb-5 space-y-5 w-full">
                  <Skeleton className="h-5 w-3/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-5/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-2/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-1/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-5/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-5/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-5/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-5/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-5/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-5/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-7 w-5/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-5/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-7 w-3/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-5/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-3/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-1/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-3/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-5/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-7 w-3/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-5/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-4/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-3/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-5/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-3/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-3/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-5/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-3/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-5/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-7 w-1/5 bg-neutral-200 rounded-" />
                  <Skeleton className="h-5 w-5/5 bg-neutral-200 rounded-" />
              </div>
          </div>
      </Slate>
  )
}

export default BlogContentLoading
