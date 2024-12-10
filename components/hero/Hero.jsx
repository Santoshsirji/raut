"use client";

import React from 'react'
import Cards from './Cards'

const Hero = () => {
  const subjects = [{
    title: "NEB Grade-12 Physics Notes",
    description: "Hey folks! In NEB Grade 12 Physics, we've gone through each topic with a fine-tooth comb, covering everything from the basics to the more intricate derivations. Whether you're struggling with definitions or need help with complex concepts, these notes have got you covered. So why hesitate? Dive into this goldmine of information and take your physics game to the next level!",
    imageSrc: "https://images.unsplash.com/photo-1708011271954-c0d2b3155ded?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: 'physicsnotes/grade12'
  },
  {
    title: "NEB Chemistry-Grade 12 Notes",
    description: "In NEB Chemistry Grade 12, we've got you covered with Organic Chemistry and Inorganic Chemistry. You'll find all the important stuff like chemical equations, definitions, and handwritten notes with all the reactions in one handy PDF.",
    imageSrc: "https://images.unsplash.com/photo-1614283226124-5a2f0f23752b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: 'chemistrynotes/grade12'
  },
  {
    title: "NEB Computer-Grade 12 Notes",
    description: "The NEB Grade 12 Computer Notes contain detailed explanations of all chapters, covering topics such as DBMS, Networking and Communication, Web Technology II, C Programming, OOP, Software Process Model, and Recent Trends in Technology.",
    imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: 'computernotes/grade12'
  },
  {
    title: "NEB Physics- Grade 11 Notes",
    description: "We've got you covered with comprehensive notes for every chapter of the Grade 11 Physics syllabus. From the basic definitions to the most intricate derivations, our notes have it all. If you're in need of a reliable and time-saving resource for creating your own notes, look no further.",
    imageSrc: "https://images.unsplash.com/photo-1708011271954-c0d2b3155ded?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: 'physicsnotes/grade11'
  },
  {
    title: "NEB Chemistry- Grade 11 Notes",
    description: "Hey there! In our NEB Grade 11 Chemistry Notes. We've designed these notes to cover every aspect of the Grade 11 Chemistry syllabus, from the fundamental concepts to the trickier topics. Whether you're grappling with organic, physical, applied chemistry or diving into inorganic reactions, these notes have all the essentials you need. So, why wait? Grab your copy of these notes and make your chemistry learning experience a breeze!",
    imageSrc: "https://images.unsplash.com/photo-1614283226124-5a2f0f23752b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: 'chemistrynotes/grade11'
  },
  ]

  return (
    <>
    <div className='bg-black text-white px-1 py-4 sm:px-2 sm:py-3 md:px-5 md:py-5 lg:px-10 text-start  rounded-2xl shadow-md'>
      <div 
      className='
      flex
      flex-col
      w-full
      '
      >
        <h2 className="text-lg font-semibold lg:text-2xl w-full md:text-xl">Why Santosh Raut?</h2>
        <p className='text-xs sm:text-sm font-light lg:text-base tracking-tight text-justify'>
          The biggest problem that students face in every school is often related to mental health issues. These include stress, anxiety, and depression, which can stem from academic pressure, social challenges, and personal issues. In order to mitigate these issues we continually update concise, subject-specific notes that students can use to create their own study materials. Our platform also opens the possibility of quick topics revision before exams, especially when schedules are tight. Our goal is to support your overall well-being and academic success.
        </p>
      </div>
    </div>
    <span>Browse Subjects</span>
    <div
      className="
            flex
            flex-wrap
            md:mx-10
            md:gap-10
            sm:gap-5
            lg:gap-40
            gap-20
            justify-center
      "
      >
      {subjects?.map((subject, index) => (
        <Cards key={index} subject={subject} />
      ))}
    </div>
    </>
  )
}

export default Hero
