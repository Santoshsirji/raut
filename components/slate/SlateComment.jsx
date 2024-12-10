"use client";

import React, { useState } from 'react';
import Slate from './Slate';
import TextArea from '../input/TextArea';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useRouter } from 'next/navigation';
import { toast } from "react-hot-toast";

const SlateComment = ({currentUser, params}) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router= useRouter();
    const onSubmit = async (data) => {
        setIsSubmitting(true);
        if(!currentUser){
            toast.error("Please login to comment!");
            return
        }
        const response = { ...data, ...params }
        await axios.post('/api/comment', response)
        .then(()=>{
            toast.success("Comment Posted");
            reset();
            router.refresh()
        })
        .catch((error)=>{
            toast.error("Error posting comment");
        })
        .finally(()=>{
            setIsSubmitting(false);
        })
    }

    return (
        <div className='w-full'>
            <Slate>
                <div className='flex flex-col w-full space-y-4'>
                    <div className='text-xl font-bold '>Add a new Comment</div>
                    <TextArea id="paragraph" label="Paragraph" register={register} errors={errors} placeholder="Type your comment" required />
                    <button
                        className='w-max  bg-[#131313] text-md p-2 text-center font-semibold rounded-lg  hover:bg-zinc-800 cursor-pointer text-white'
                        onClick={handleSubmit(onSubmit)}
                        disabled={isSubmitting}
                    >
                        Post Comment
                    </button>
                </div>
            </Slate>
        </div>
    );
}

export default SlateComment;
