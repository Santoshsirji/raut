"use client";
import React from 'react'
import { IoAddSharp } from "react-icons/io5";
import useCreateModal from '@/app/hooks/useCreateModal';
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast"
const Create = ({currentUser}) => {
    const createModal = useCreateModal();
    const router = useRouter();
    const handleClick = ()=> {
        if(!currentUser){
            router.push('/login');
            toast.error("Login first to create a blog!");
            return;
        }
        createModal.onOpen();

    }
    return (
        <div
            onClick={handleClick}
            className='
            w-full
            text-xl
            text-zinc-900 dark:text-white
            p-4
            flex
            items-center
            space-between
            cursor-pointer
            bg-zinc-50 dark:bg-gray-600
            hover:bg-zinc-100
            rounded-lg
            '
        >
            <div className='w-full'>Create a Blog</div>
            <div className=''><IoAddSharp size={45}/></div>
        </div>
    )
}

export default Create
