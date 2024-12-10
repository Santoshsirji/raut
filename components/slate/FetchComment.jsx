import React from 'react'
import SlateWriterDetails from './SlateWriterDetails';

const FetchComment = ({comments}) => {
  return (
    <div 
    className='
    w-full
    p-4
    flex
    flex-col
    space-y-10
    lg:px-10
    md:px-5
    sm:px-2
    px-1
    items-center
    '
    >
      <div className='
      w-full
      text-2xl
      font-bold
      text-zinc-900
      dark:text-white
      '>
        {`Comments (${comments.length}) `}
      </div>
      <div className='
      w-full
      text-xl
      font-semibold
      text-zinc-900
      dark:text-white
      '>
        {!comments || comments.length === 0 && ("No comments")}
      </div>
      <div className='w-full space-y-4 
      dark:text-zinc-900'>
        {comments.map((item, index)=> (
          <div key={index} className='w-full p-4 rounded-lg bg-slate-100 flex flex-col'>
            <SlateWriterDetails blog={item}/>
            <span className='text-lg font-normal'>{item.paragraph}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FetchComment
