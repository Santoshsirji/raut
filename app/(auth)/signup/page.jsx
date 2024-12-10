"use client";

import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import Input from '@/components/input/Input';
import SlateTitle from '@/components/slate/SlateTitle';
import { useRouter } from 'next/navigation';
import Button from '@/components/navbar/Button';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

const RegisterModal = () => {
    const router= useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { name: '', email: '', password: '' }
    });

    const onSubmit = (data) => {
        setIsLoading(true);
        axios.post('/api/register', data)
            .then(() => {
                toast.success("Account created! Now login");
                router.push('/login')
            })
            .catch((error) => {
                toast.error("Something went wrong");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const handleSwitch = () => {
       router.push('/login')
    };

    return (
        <div className="flex flex-col gap-4 pt-40 w-11/12 md:w-[600px] pb-24">
            <SlateTitle text={"Sign Up to Santosh Raut"} />
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
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
                min={15}
            />
            <div onClick={handleSubmit(onSubmit)} className='w-full p-4  bg-zinc-950 hover:bg-zinc-900 text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 text-center font-bold text-xl rounded-xl'>Sign Up</div>
            <div
            className='
            flex
            flex-col
            w-full
            '
            >
                <Button
                    className={"text-lg"}
                    outline
                    label={'Continue With Google'}
                    icon={FcGoogle}
                    onClick={() => signIn('google')}
                />
            </div>
            <div className="text-center flex items-center space-x-1">
                <p>Already have an account?</p>
                <button onClick={handleSwitch} className="text-gray-500 hover:underline">Sign In</button>
            </div>
        </div>
    );
};

export default RegisterModal;
