"use client";
import React from "react";
import Slate from "@/components/slate/Slate";

const AboutUsPage = () => {
    return (
        <Slate>
            <div 
                className="
                container 
                tracking-tight 
                mx-auto px-4 
                py-8">
                <h1 
                className="
                text-3xl 
                font-bold mb-4
                ">About Us</h1>
                <h2 
                className="
                text-xl 
                font-semibold 
                underline">Our Story</h2>
                <p 
                className="
                text-lg 
                mb-4">What started as a humble project to provide mathematics notes has evolved into something much bigger. We now offer a wide range of subjects, including physics, chemistry, and computer science, with plans to expand even further in the future. Our dedicated team of educators and content creators work tirelessly to deliver comprehensive notes and engaging video lessons.</p>
                <p 
                className="
                text-lg 
                mb-4">On our channel, you&apos;ll find a treasure trove of educational resources catering to National Examination Board (NEB) students. Whether you&apos;re studying for exams or simply want to deepen your understanding of key concepts, our content is designed to empower you on your academic journey.</p>
                <p 
                className="
                text-lg 
                mb-4">We believe in the power of education to transform lives, and we&apos;re committed to helping students excel in their studies. Our materials are meticulously crafted to simplify complex topics and foster a love for learning. With us, you&apos;ll gain a solid foundation in each subject, enabling you to tackle challenges with confidence.</p>
                <p 
                className="
                text-lg 
                mb-4">Join our growing community of learners who are passionate about education. Together, we can unlock the doors to success and make a positive impact on society.</p>
                <p 
                className="
                text-lg 
                mb-4">Thank you for choosing our channel as your educational companion. Together, let&apos;s embark on an exciting journey of knowledge, exploration, and growth!</p>
            </div>
        </Slate>
    );
};

export default AboutUsPage;
