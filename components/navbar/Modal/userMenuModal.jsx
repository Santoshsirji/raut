"use client";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';


import Modal from './Modal';
import useMenuModal from '@/app/hooks/useMenuModal';
import { physics11, physics12, computer12, chemistry11, chemistry12 } from "@/components/subjects/chapter/chaptermenu";

const UserMenuModal = ({user}) => {
    const menuModal = useMenuModal();
    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname();

    const loopArrLookup = useMemo(() => ({
        '/computernotes/grade12': computer12,
        '/physicsnotes/grade12': physics12,
        '/chemistrynotes/grade12': chemistry12,
        '/physicsnotes/grade11': physics11,
        '/chemistrynotes/grade11': chemistry11
    }), []);

    const LoopArr = loopArrLookup[pathname] || [];

    const block1 = useMemo(() => ([
        { name: "Physics", href: "/physicsnotes/grade11" },
        { name: "Chemistry", href: "/chemistrynotes/grade11" },
    ]), []);

    const block2 = useMemo(() => ([
        { name: "Physics", href: "/physicsnotes/grade12" },
        { name: "Chemistry", href: "/chemistrynotes/grade12" },
        { name: "Computer Science", href: "/computernotes/grade12" },
    ]), []);

    const block3 = useMemo(() => ([
        { name: "Handwritten Notes", href: "/note" },
        { name: "Model Question Papers", href: "/modelquestions" },
        { name: "Blogs", href: "/blogs" }
    ]), []);

    const block4 = useMemo(() => ([
        { name: "About us", href: "/about" },
        { name: "Privacy Policy", href: "/privacypolicy" },
    ]), []);

    const [isSubject, setIsSubject] = useState(false);

    useEffect(() => {
        setIsSubject(!['/', '/blogs', '/about', '/description', '/privacypolicy', '/disclaimer', '/note', '/modelquestions', '/admin'].includes(pathname));
    }, [pathname]);

    const bodyContent = (
        <div className={`space-y-6 h-full text-white rounded-tr-xl pt-2 bg-[#131313] w-[200px] md:w-[250px] transition duration-100 flex ${isSubject ? 'flex-row' : 'flex-col'} space-between `}>
            <div className={`px-3 transition duration-100 ${isSubject ? '-translate-x-full  z-10 hidden' : 'translate-x-0 z-20'}`}>
                <div className="flex flex-col space-y-5 py-0">
                    <Link href={'/'} className="hover:text-black w-full hover:bg-white cursor-pointer py-1 lg:font-bold sm:font-semibold px-3 text-lg rounded-full">Home</Link>
                    <hr />
                    <div className="w-full h-max">
                        <h2 className="lg:font-bold font-semibold text-lg">Grade 11</h2>
                        <div className="flex flex-col w-full">
                            {block1.map((subject, index) => (
                                <Link key={index} href={subject.href} className="hover:text-black hover:bg-white cursor-pointer py-1 lg:font-semibold sm:font-normal text-light px-3 rounded-full">
                                    {subject.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <hr />
                    <div className="w-full h-max">
                        <h2 className="lg:font-bold font-semibold text-lg px-1">Grade 12</h2>
                        <div className="flex flex-col w-full">
                            {block2.map((subject, index) => (
                                <Link key={index} href={subject.href} className="hover:text-black hover:bg-white cursor-pointer py-1 lg:font-semibold sm:font-normal text-light px-3 rounded-full">
                                    {subject.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <hr />
                    <div className="w-full h-max">
                        <div className="flex flex-col w-full">
                            {block3.map((subject, index) => (
                                <Link key={index} href={subject.href} className="hover:text-black hover:bg-white cursor-pointer py-1 lg:font-semibold sm:font-normal text-light px-3 rounded-full">
                                    {subject.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <hr />
                <div className="bottom-4 flex flex-col">
                    {block4.map((links, index) => (
                        <Link href={links.href} key={index} className="hover:text-black hover:bg-white cursor-pointer py-1  px-3 rounded-full text-xs font-light">
                            {links.name}
                        </Link>
                    ))}{
                        user?.email === 'santoshraut9862281653@gmail.com' && (
                    <Link href={'/admin'} className="hover:text-black hover:bg-white cursor-pointer py-1  px-3 rounded-full text-xs font-light">
                       Admin
                    </Link>
                        )
                    }
                </div>
            </div>
            <div className={`transition duration-150 flex flex-col px-3 text-white bg-[#131313] w-full space-y-2 overflow-y-auto pb-4 ${isSubject ? 'translate-x-0 z-20 top-0 opacity-100' : '-translate-x-full z-10 opacity-0'}`}>
                <Link href={"/"} className="w-full cursor-pointer text-lg hover:text-black hover:bg-white px-3 py-1 rounded-full lg:font-semibold sm:font-normal text-light">Home</Link>
                {LoopArr.map((chapter, index) => (
                    <Link key={index} className="w-full transition duration-300 translate-x-0 cursor-pointer" href={(pathname + chapter.href)}>
                        <div className="w-full hover:text-black hover:bg-white px-3 py-1 rounded-full lg:font-semibold sm:font-normal text-light text-xs ">
                            {chapter.name}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );

    return (
        <Modal
            disabled={isLoading}
            isOpen={menuModal.isOpen}
            onClose={menuModal.onClose}
            body={bodyContent}
        />
    );
};

export default UserMenuModal;
