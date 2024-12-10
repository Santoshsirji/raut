"use client";

import React from 'react'

const TextArea = ({
    id,
    disabled,
    label,
    required,
    register,
    errors,
    placeholder
}) => {
    return (
        <div
            className="w-full relative"
        >
            <textarea
                id={id}
                disabled={disabled}
                {...register(id, { required })}
                placeholder={placeholder}
                className={`
                peer
                w-full
                p-4
                pt-6
                h-40
                font-light
                bg-white
                dark:bg-neutral-800/5
                border-2
                rounded-md
                outline-none
                transition
                disabled:opacity-70
                disabled:cursor-not-allowed
                ${errors[id] ? 'border-rose=500' : 'border-neutral-300'}
                ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
                `}
            />

        </div>
    )
}

export default TextArea;