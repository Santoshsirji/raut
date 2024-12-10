"use client";
import React from 'react';

const Input = ({
    id,
    label,
    type = "text",
    disabled,
    required,
    register,
    errors,
    min
}) => {
    return (
        <div className="w-full relative flex flex-col space-y-2">
            <input
                id={id}
                disabled={disabled}
                {...register(id, { required, minLength: min })} // Set minLength validation rule
                placeholder=" "
                type={type}
                className={`
                    peer
                    w-full
                    p-4
                    pt-6
                    font-light
                    border-2
                    rounded-md
                    outline-none
                    transition
                    bg-transparent
                    dark:bg-neutral-800/5
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
                    ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
                `}
            />
            <label
                className={`
                    px-4
                    absolute
                    text-md
                    duration-150
                    transition
                    -translate-y-5
                    top-5
                    z-10
                    origin-[0]
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-7
                    ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
                `}
            >
                {label}
            </label>
            {/* Display error message if password length is less than the minimum */}
            {errors[id]?.type === "minLength" && (
                <span className="text-xs text-rose-500">
                    Password must be at least {min} characters long.
                </span>
            )}
        </div>
    );
};

export default Input;
