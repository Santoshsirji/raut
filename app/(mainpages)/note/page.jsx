import Container from '@/components/Container'
import NoteHero from '@/components/notes/NoteHero'
import React from 'react'

const Page = () => {
  const chemistry12 = [{
    title: "Aldehydes and Ketones",
    description: "Gain comprehensive insights into aldehydes and ketones with our expertly crafted notes. Covering nomenclature, synthesis, reactivity, and spectroscopy, these resources are invaluable for students and professionals alike. Perfect for exam preparation or expanding your understanding of organic chemistry. Download now to enhance your knowledge base and master the intricacies of these fundamental compounds.",
    imageSrc: "/notes/Aldehyde.png",
    href: 'https://drive.google.com/file/d/1bJqyPk2CVBSZ6VxSrMU6uOtt79PjPAup/view?usp=sharing'
  },
  {
    title: "Phenols",
    description: "Explore the depths of phenols with our meticulously prepared notes. Covering key aspects such as nomenclature, synthesis, reactions, and spectroscopic analysis, these resources are essential for students and professionals. Ideal for exam preparation and deepening your understanding of organic chemistry. Download now to expand your knowledge and expertise in the realm of phenols.",
    imageSrc: "https://images.unsplash.com/photo-1627389955646-6596047473d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: 'https://drive.google.com/file/d/1bFBD6hTo8Edecg27KDtrHhKjGJfBtNpk/view?usp=sharing'
  },
  {
    title: "Heavy Metals",
    description: "Delve into the realm of heavy metals with our comprehensive notes. Explore their properties, toxicity mechanisms, environmental impacts, and analytical techniques. Perfect for students and professionals seeking a thorough understanding of heavy metal chemistry. Ideal for exam preparation or expanding your knowledge base in environmental science and toxicology. Download now to enhance your expertise in this critical area of study.",
    imageSrc: "https://plus.unsplash.com/premium_photo-1674641194871-ccd0ecdbee9f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: 'https://drive.google.com/file/d/1dXY9-ASN_5dm7vTiJzU1yKR6NV53_-ns/view?usp=sharing'
  },
  {
    title: "Ether",
    description: "Unlock the intricacies of ethers with our detailed notes. Covering their synthesis, nomenclature, reactivity, and applications, these resources are indispensable for students and professionals alike. Perfect for exam preparation and deepening your understanding of organic chemistry. Download now to broaden your knowledge and master the nuances of ethers in various fields.",
    imageSrc: "/notes/ether.jpg",
    href: 'https://drive.google.com/file/d/1EFwQhQM0apl35Ma6NaPeDvZQsRbHeJy3/view?usp=sharing'
  },
  ]
  const physics12 = [{
    title: "Recent Trends in Physics",
    description: "Discover the latest trends in physics with our comprehensive notes. Explore cutting-edge research topics, including quantum computing, gravitational waves, dark matter studies, and beyond. Designed for students and professionals seeking to stay abreast of advancements in the field. Perfect for exam preparation or expanding your knowledge base in modern physics. Download now to deepen your understanding and stay ahead in the ever-evolving world of physics.",
    imageSrc: "/notes/recent_trend_in_physics.jpg",
    href: "https://drive.google.com/file/d/1L6SVkP7zZGXOKZwQWL63GSI8Tuedd7eo/view?usp=sharing",
  }]
  const physics11 = [
    {
      title: "Electric Field",
      description: "Explore contemporary insights into electric fields with our comprehensive notes. Covering topics such as electrostatics, Gauss's law, capacitance, and electric potential, these resources cater to students and professionals seeking to grasp foundational principles and advanced applications alike. Perfect for exam preparation or expanding your understanding of electromagnetism. Download now to deepen your knowledge and navigate the complexities of electric fields with confidence.",
      imageSrc: "/notes/electric_field.jpg",
      href: "https://drive.google.com/file/d/17u8C0gjLsfn43h_DPi8e479MSYObItLV/view?usp=sharing"
    },
    {
      title: "Electric Charge",
      description: "Dive into the fundamentals of electric charge with our detailed notes. Covering concepts like Coulomb's law, charge conservation, electric field interaction, and applications in modern technology, these resources are essential for students and professionals alike. Ideal for exam preparation or expanding your understanding of electromagnetism. Download now to enhance your knowledge and grasp the intricacies of electric charge in various contexts.",
      imageSrc: "/notes/electric_charge.jpg",
      href: "https://drive.google.com/file/d/1jbBcIJXAd3KdjtHUv94-F9CHCaohee-t/view?usp=sharing"
    },
    {
      title: "Refraction through Prism",
      description: "Gain a comprehensive understanding of refraction through prisms with our detailed notes. Explore Snell's law, dispersion, total internal reflection, and applications in optics. Designed for students and professionals seeking to master the principles and applications of prism refraction. Perfect for exam preparation or expanding your knowledge in optics and photonics. Download now to deepen your understanding and excel in the study of light manipulation through prisms.",
      imageSrc: "/notes/prism.jpg",
      href: "https://drive.google.com/file/d/1eJYRL00EjUxbL1sN2_A2G_uiOaWHUiuR/view?usp=sharing"
    },
  ]
  const nepali11 = [{
    title: "Yogmaya",
    description: "Yogmaya Exercise Notes",
    imageSrc: "/notes/yogmaya.jpg",
    href: "https://drive.google.com/file/d/1i-9cZYmJVsmAuVkWqOyFSshw3EDPImax/view?usp=sharing"

  },
  ]
  return (
    <div
      className='
    w-full
    '
    >
      <Container>
        <div
          className='
        w-full
        flex
        flex-col
        space-y-10
        '
        >
            <div className='text-xl font-bold text-center'>Grade 11 Physics PDF-Notes</div>
            <NoteHero subjects={physics11} />
            <div className='text-xl font-bold text-center'>Grade 12 Chemistry PDF-Notes</div>
            <NoteHero subjects={chemistry12} />
            <div className='text-xl font-bold text-center'>Grade 12 Physics PDF-Notes</div>
            <NoteHero subjects={physics12} />
            <div className='text-xl font-bold text-center'>Grade 11 Nepali PDF-Notes</div>
            <NoteHero subjects={nepali11} />
        </div>
      </Container>
    </div>
  )
}

export default Page
