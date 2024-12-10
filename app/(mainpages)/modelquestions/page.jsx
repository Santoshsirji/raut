"use client";
import Container from "@/components/Container"
import NoteHero from "@/components/notes/NoteHero"
import React from "react"

const Page = () => {
  const chemistry12 = [{
    title: "NEB Class 12 Chemistry Model Question Paper",
    description: "Explore our comprehensive collection of model questions for Chemistry NEB Grade 12. Perfect for students preparing for exams, these questions cover a wide range of topics including organic, inorganic, and physical chemistry. Test your knowledge, strengthen your understanding, and boost your confidence with these meticulously crafted questions. Download now to ace your Chemistry exams!",
    imageSrc: "/questions/chemistry.jpg",
    href: "https://drive.google.com/file/d/1mW__lLPTGKuACkNVf7MKHJR0PXREqoXz/view?usp=sharing"
  },
  {
    title: "10 Model Question Sets of Physics NEB Grade XII",
    description: "Dive into our exclusive set of 10 model question papers tailored for Physics NEB Grade XII. Ideal for exam preparation, these question sets encompass various topics including mechanics, electromagnetism, optics, and modern physics. Test your comprehension, reinforce your understanding, and elevate your exam readiness with these meticulously crafted questions. Download now to excel in your Physics examinations!",
    imageSrc: "/questions/physics.jpg",
    href: "https://drive.google.com/file/d/1VqTmD7DIW6EZLElWvG0uC6dp3gYcZSHq/view?usp=sharing"
  },
  {
    title: "NEB Class 12 Physics Model Quesion 2080",
    description: "Discover excellence with our NEB Class 12 Physics Model Question Papers for the year 2080. Crafted meticulously to align with the latest curriculum standards, these question sets cover a diverse range of topics including mechanics, electromagnetism, optics, and modern physics. Perfect for exam preparation, these questions will help you gauge your understanding and boost your confidence. Download now to excel in your NEB Class 12 Physics examinations!",
    imageSrc: "/questions/physics.jpg",
    href: "https://drive.google.com/file/d/1n78ruGr08M0eNzqKrRM59X5AtwavVrp-/view?usp=sharing"
  },
  {
    title: "NEB Class 12 Biology Model Quesion 2080",
    description: "Unveil the excellence of our NEB Class 12 Biology Model Question Papers for the year 2080. Carefully curated to meet the latest curriculum standards, these question sets cover a wide array of topics including genetics, ecology, physiology, and more. Designed to aid in exam preparation, these questions will sharpen your understanding and bolster your confidence. Download now to conquer your NEB Class 12 Biology exams with ease!",
    imageSrc: "/questions/biology.jpg",
    href: "https://drive.google.com/file/d/1_dSmSYqnInH8ydfhwbZBry1LY8pUXaQZ/view?usp=sharing"
  },
  ]
  const physics12 = [{
    title: "NEB Class 12 Maths Model Question 2080",
    description: "Embark on your journey to mathematical mastery with our NEB Class 12 Maths Model Question Papers for the year 2080. Tailored meticulously to align with the latest curriculum, these question sets encompass a diverse range of topics including calculus, algebra, geometry, and more. Perfect for exam preparation, these questions will enhance your problem-solving skills and boost your confidence. Download now to excel in your NEB Class 12 Maths examinations!",
    imageSrc: "https://images.unsplash.com/photo-1632571401005-458e9d244591?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "https://drive.google.com/file/d/1sTytMFnFAua1Asgvt52xBP4LNs82J2xo/view?usp=sharing",
  },{
    title: "NEB Grade XI Nepali Model Question 2080",
    description: "Unlock the path to success with our NEB Class 12 Nepali Model Question Papers for the year 2080. Crafted meticulously to align with the latest curriculum standards, these question sets cover a broad spectrum of Nepali literature, language, and grammar. Perfect for exam preparation, these questions will help you sharpen your comprehension and writing skills while boosting your confidence. Download now to excel in your NEB Class 12 Nepali examinations!",
    imageSrc: "/notes/yogmaya.jpg",
    href: "https://drive.google.com/file/d/1dJTOIH9QKuRzEoGkrgjTOjjULZvPUsR3/view?usp=sharing",
  },
]

  return (
    <div
    className="
    w-full
    "
    >
      <Container>
        <div
        className="
        w-full
        flex
        flex-col
        space-y-10
        "
        >
        <Container>
        <div className="text-xl font-bold text-center">Model Question Papers and PYQs</div>
        <NoteHero subjects={chemistry12}/>
        </Container>
        <Container>
        <div className="text-xl font-bold text-center">----X----</div>
        <NoteHero subjects={physics12}/>
        </Container>
        </div>
      </Container>
    </div>
  )
}

export default Page
