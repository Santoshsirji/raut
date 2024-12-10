"use client";

import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { IoMdClose } from "react-icons/io";

const Modal = ({
    isOpen,
    onClose,
    disabled,
    body,
}) => {
    const [showModal, setShowModal] = useState(isOpen);
    const pathname = usePathname();
    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }

        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [disabled, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div
                className="
                flex
                h-full
                fixed
                inset-0
                z-50
                outline-none
                focus:outline-none
                bg-neutral-800/70
                "
            >
                <div
                    className='
                    relative
                    w-[200px]
                    md:w-[250px]
                    h-full
                    '
                >
                    {/* Content  */}
                    <div
                        className={`
                    translate
                    duration-300
                    h-full
                    ${showModal ? 'translate-x-0' : '-translate-x-full'}
                    `}
                    >
                        <div
                            className="
                            translate
                            h-full
                            border-0
                            rounded-tr-lg
                            shadow-lg
                            relative
                            flex
                            flex-col
                            w-full
                            bg-neutral-900
                            outline-none
                            focus:outline-none
                            "
                        >
                            {/* Header  */}
                            <div
                                className="text-white flex items-center justify-between text-lg space-x-3 py-1"
                            >
                                <span className="font-bold text-xl transition-opacity duration-150 px-3">{pathname === '/' || pathname === '/about' || pathname === '/description' || pathname === '/privacypolicy' || pathname === '/disclaimer' || pathname === '/notes' || pathname === '/modelquestions' ? 'Browse Pages' : 'Browse Chapters'}</span>
                                <IoMdClose onClick={handleClose} size={30} className="cursor-pointer text-lg hover:scale-105 transition-transform duration-150" />
                            </div>
                            {/* Body */}
                            <div
                                className='
                            relatives
                            flex-auto
                            overflow-y-scroll
                            overflow-x-hidden
                            '
                            >
                                {body}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal