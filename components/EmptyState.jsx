import React from "react"
import { TbFileSad } from "react-icons/tb";
import SlateTitle from "./slate/SlateTitle";
import SlateParagraph from "./slate/SlateParagraph";
const EmptyState = () => {
  return (
    <div
    className="
    w-full
    bg-white
    h-full
    flex
    flex-col
    items-center
    justify-center
    text-center
    "
    >
      <div  className="text-zinc-900 saturate-150">
          <TbFileSad size={100} />
      </div>
          <SlateTitle text={"Uh Oh!"}/>
          <SlateParagraph text={"No blogs at the moment."}/>
          <SlateParagraph text={"Please comeback later."}/>
    </div>
  )
}

export default EmptyState;
