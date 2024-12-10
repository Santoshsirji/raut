import React from 'react'
import YoutubeCard from './YoutubeCard'

const YoutubeHero = () => {
    const subjects = [{
        title: "NEB-CLASS 12 STATISTICS || BASIC MATHEMATICS || EXCERCISE-13.1 || ALL SOLUTIONS #statistics #neb",
        description: "Unveil the power of statistics in NEB Class 12! Explore Basic Mathematics in Exercise 13.1 with comprehensive solutions provided. From probability to data analysis, this video is your ultimate guide. Ideal for students seeking clarity or educators enhancing their resources. Delve into statistics' intricacies and empower your academic journey. Tune in now to elevate your understanding and excel in NEB Class 12. Don't miss out! #statistics #NEB #mathematics",
        imageSrc: "/statistics.jpg",
        href: 'https://youtu.be/gD_oGPPGCwE?si=oj4fq_-eJeF7ZIy2'
    },
    {
        title: "NEB CLASS 12- MATHEMATICS SAMPLE QUESTION PAPER || BASIC MATHEMATICS",
        description: "Prepare for NEB Class 12 Mathematics success with our comprehensive sample question paper. Covering Basic Mathematics, it's perfect for refining skills and boosting confidence before exams. Dive into topics from algebra to calculus, mastering essential concepts. Whether you're a student aiming for top grades or a teacher seeking resources, this video has you covered. Elevate your preparation and excel in NEB Class 12 Mathematics. Watch now! #NEB #Class12 #Mathematics #ExamPrep",
        imageSrc: "/mathematics_sample.jpg",
        href: 'https://youtu.be/YiJhLyPWqL4?si=0MDvrNHI4Pvvf0v9'
    },
    {
        title: "Class 11 Properties Of Triangle|| All solutions || Neb class 11 exercise 7.1",
        description: "Explore the world of triangles with NEB Class 11! Dive into Exercise 7.1 to uncover solutions to Properties of Triangles. Whether you're a student aiming to ace exams or an educator seeking teaching materials, this video is your ultimate guide. Explore geometry depths, from angle bisectors to medians. With detailed explanations, mastering triangle properties is easier. Don't miss out on this invaluable resource. Watch now! #NEB #Class11 #Mathematics #Geometry",
        imageSrc: "/properties_of_triangle.jpg",
        href: 'https://youtu.be/mQ7KQ42NS64?si=SbnI9akcwuNKW_sd'
    },
    {
        title: "Class 11 Solution Of Triangle|| Exercise 8.1 || All Solutions || Basic Mathematics",
        description: "Delve into triangles in NEB Class 11! Explore Exercise 8.1 for solutions to Solution of Triangles. Ideal for students excelling or educators enriching teaching resources. From trigonometric ratios to laws of sines and cosines, master geometry fundamentals. This video offers step-by-step solutions for complex concepts' understanding. Elevate your understanding of triangles and excel in NEB Class 11 Mathematics. Watch now for essential insights! #NEB #Class11 #Mathematics #Geometry",
        imageSrc: "/solution_of_triangle.jpg",
        href: 'https://youtu.be/JEXNvOkv1yo?si=wDJcxz7EQG0Ndpdr'
    },
    {
        title: `Class 11 Antiderivatives | Definite Integrals Neb || All Solutions | Exercise 19.5

`,
        description: "Explore antiderivatives and definite integrals of NEB Class 11! Checkout the Exercise 19.5 solution to get calculus concepts. Ideal for students seeking clarity or educators enhancing teaching materials. From finding areas under curves to evaluating definite integrals, this video provides comprehensive solutions. Elevate your understanding of calculus and excel in Grade-11 Maths. Don't miss out on essential insights! Watch now for a deeper insight. #NEB #Class11 #Mathematics #Calculus",
        imageSrc: "/definite_integrals.jpg",
        href: 'https://youtu.be/29AoWUFMScc?si=z4BNwtCh23YwyNf0'
    },
    ]

    return (
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
                <YoutubeCard key={index} subject={subject} />
            ))}
        </div>
    )
}

export default YoutubeHero
