"use client";
const ChapterHeading
 = ({title}) => {
  return (
    <h1
    className="
    mt-6
    w-full
    flex
    bg-[#131313]
    dark:bg-gray-950
    font-extrabold
    text-2xl
    lg:text-3xl
    text-white
    py-14
    px-2
    md:px-4
    lg:px-6
    xl:px-10
    "
    >
      {title}
    </h1>
  )
}

export default ChapterHeading

