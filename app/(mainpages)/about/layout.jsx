
import Container from "@/components/Container";

export const metadata = {
    title: 'Santosh Raut About',
    description: 'Discover Santosh Raut, a platform dedicated to empowering learners with fundamental math skills. Our mission is to make mathematics accessible and enjoyable for everyone, regardless of their background or level of expertise. Whether you\'re a student, educator, or lifelong learner, Santosh Raut provides comprehensive resources to enhance your understanding and proficiency in mathematics. Explore our engaging tutorials, practice exercises, and educational articles covering topics such as arithmetic, algebra, geometry, trigonometry, calculus, and more. With clear explanations and practical examples, Santosh Raut equips learners with the essential tools to succeed in math and beyond. Join our community of math enthusiasts and embark on a journey of learning and discovery with Santosh Raut.',
    keywords: [
        'Santosh Raut', 'Mathematics Education', 'Math Skills', 'Math Tutorials', 'Math Practice Exercises',
        'Mathematical Concepts', 'Arithmetic', 'Algebra', 'Geometry', 'Trigonometry', 'Calculus', 'Math Learning Platform',
        'Mathematics Resources', 'Mathematics for Students', 'Mathematics for Educators', 'Mathematics for Lifelong Learners',
        'Mathematics Community', 'Math Enthusiasts', 'Mathematics Empowerment'
    ],
    author: 'Santosh Raut',
    ogTitle: 'About Santosh Raut - Empowering Learners with Fundamental Math Skills',
    ogDescription: 'Discover Santosh Raut, a platform dedicated to empowering learners with fundamental math skills. Our mission is to make mathematics accessible and enjoyable for everyone, regardless of their background or level of expertise. Whether you\'re a student, educator, or lifelong learner, Santosh Raut provides comprehensive resources to enhance your understanding and proficiency in mathematics. Explore our engaging tutorials, practice exercises, and educational articles covering topics such as arithmetic, algebra, geometry, trigonometry, calculus, and more. With clear explanations and practical examples, Santosh Raut equips learners with the essential tools to succeed in math and beyond. Join our community of math enthusiasts and embark on a journey of learning and discovery with Santosh Raut.'
};


export default function Page({ children }) {
    return (
        <div className="flex flex-col items-center justify-center pt-24">
            <Container>
               {children}
            </Container>
        </div>
    )
}