"use client"

import { signIn } from "next-auth/react";
import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import {
    useForm
} from "react-hook-form";
import { toast } from "react-hot-toast";


import Input from "@/components/input/Input";
import SlateTitle from "@/components/slate/SlateTitle";
import { useRouter } from 'next/navigation';
import Button from "@/components/navbar/Button";

const SignInModal = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = (data) => {
        setIsLoading(true);

        signIn('credentials', {
            ...data,
            redirect: false
        })
            .then((callback) => {
                setIsLoading(false);

                if (callback?.ok) {
                    toast.success("Successfully logged in");
                    router.push('/');
                    router.refresh();
                }

                if (callback?.error) {
                    toast.error(callback.error);
                }
            })
    }

    const handleSwitch = () => {
        router.push('/signup')
    };

    return (
        <div className="flex flex-col gap-4 pt-40 w-11/12 md:w-[600px] pb-48">
            <SlateTitle text={"Sign In to Santosh Raut"} />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                type='password'
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <button onClick={handleSubmit(onSubmit)} disabled={isLoading} className='w-full p-4 disabled:cursor-not-allowed disabled:opacity-70 bg-zinc-950 hover:bg-zinc-900 text-white cursor-pointer text-center font-bold text-xl rounded-xl'>Sign In</button>
            <div
                className="
                w-full
                flex
                flex-col
                "
            >
                <Button
                    className={"text-lg"}
                    outline
                    icon={FcGoogle}
                    label={"Continue with Google"}
                    onClick={() => signIn('google')}
                />
            </div>
            <div className="text-center flex items-center space-x-1">
                <p>Don&apos;t have an account?</p>
                <button onClick={handleSwitch} className="text-gray-500 hover:underline">Sign Up</button>
            </div>
        </div>
    );
};

export default SignInModal;
