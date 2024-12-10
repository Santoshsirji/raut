"use client";

import React, { useRef, useMemo, useState } from 'react';
import Modal from './Model';
import useCreateModal from '@/app/hooks/useCreateModal';
import Input from '@/components/input/Input';
import { useForm } from 'react-hook-form';
import TextArea from '@/components/input/TextArea';
import SlateTitle from '../SlateTitle';
import dynamic from 'next/dynamic';
import axios from "axios";
import {toast} from "react-hot-toast";
import { useRouter } from 'next/navigation';
const CreateModal =  () => {


    const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
    const createModal = useCreateModal();
    const router = useRouter();

    const handleClose = () => {
        createModal.onClose();
    }

    const [content, setContent] = useState(' ');
    const editor = useRef(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const config = useMemo(
        () => ({
            readonly: false,
            placeholder: 'Start typing...',
            height: 400,
        }),
        []
    );


    const [step, setStep] = useState(1);
    const onBack = () => {
        setStep((value) => value - 1);
    };

    const onNext = () => {
        setStep((value) => value + 1);
    }
    const actionLabel = useMemo(() => {
        if (step === 2) {
            return 'Create';
        }

        return 'Next';
    }, [step]);

    const secondaryAction = useMemo(() => {
        if (step === 1) {
            return undefined;
        }
        return 'Previous'
    }, [step]);

    let bodyContent = (
        <div
            className="
        flex
        flex-col
        w-full
        space-y-4
        "
        >
            <SlateTitle text={"Title for the blog post."} subtitle={"Enter the title for the blogpost you're creating."} />
            <Input
                id="title"
                label="Title"
                register={register}
                errors={errors}
                required
                disabled={isSubmitting}
            />
            <SlateTitle text={"Featured paragraph for the blog post."} subtitle={"Enter the paragraph that you want to display in the front page."} />
            <TextArea
                id="mainpara"
                label="Front Paragraph"
                register={register}
                errors={errors}
                required
                disabled={isSubmitting}
                placeholder={"Enter the front paragraph"}
            />
        </div>
    );
    if (step === 2) {
        bodyContent = (
            <div
                className='
            flex
            flex-col
            w-full
            '
            >
                <SlateTitle text={"Detailed content for the blog post."} subtitle={"Enter the content for your blog post."} />
                <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={1}
                    onBlur={(newContent) => setContent(newContent)}
                    onChange={(newContent) => { }}
                />
            </div>
        )
    }

    const onSubmit = async (data) => {
        if (step !== 2) {
            return onNext();
        }
        setIsSubmitting(true);
        const request = await {...data, content: content};
        await axios.post('/api/createblog', request)
            .then((response) => {
                toast.success("Blog created successfully");
                reset();
                setStep(1);
                router.refresh();
                createModal.onClose()
            })
            .catch(() => {
                toast.error("Something Went Wrong");
            })
            .finally(()=>{
                setIsSubmitting(false);
            })
    }
    return (
        <Modal
            isOpen={createModal.isOpen}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryAction}
            secondaryAction={step === 1 ? undefined : onBack}
            title={"Create a blog"}
            body={bodyContent}
            onSubmit={handleSubmit(onSubmit)}
            onClose={handleClose}
            disabled={isSubmitting}
        />
    )
}

export default CreateModal
