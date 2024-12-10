import BlogContentLoading from '@/components/BlogContentLoading'
import CardLoading from '@/components/CardLodaingSkeleton'
import ChapterLoading from '@/components/ChapterLoading'
import BlogLoadingSkeleton from '@/components/LoadingSkeleton'
import React from 'react'

const page = () => {
  return (
    <div className='pt-36'>
     <ChapterLoading/>
     <CardLoading/>
     <BlogLoadingSkeleton/>
     <BlogContentLoading/>
    </div>
  )
}

export default page
