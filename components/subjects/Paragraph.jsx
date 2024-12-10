"use client";

const Paragraph = ({text}) => {
  return (
    <div
    className='
    flex
    flex-wrap
    text-wrap
    w-full
    text-sm
    text-justify
    text-zinc-800
    '
    >
      {text}
    </div>
  )
}

export default Paragraph
