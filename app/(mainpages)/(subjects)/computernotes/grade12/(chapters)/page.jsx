"use client";
import React, { Suspense, lazy } from 'react';
import ChapterHeading from '@/components/subjects/ChapterHeading';
import Slate from '@/components/slate/Slate';
import ChapterLoading from '@/components/ChapterLoading';

// Lazy load chapters dynamically
const Chapter1 = lazy(() => import('./Chapter1'));
const Chapter2 = lazy(() => import('./Chapter2'));
const Chapter3 = lazy(() => import('./Chapter3'));
const Chapter4 = lazy(() => import('./Chapter4'));
const Chapter5 = lazy(() => import('./Chapter5'));
const Chapter6 = lazy(() => import('./Chapter6'));
const Chapter7 = lazy(() => import('./Chapter7'));

const Page = () => {
    return (
        <div className="flex flex-col">
            <div className="w-full border-t-[1px] border-neutral-200">
                <main className="max-w-7xl mx-auto px-1 sm:px-4 lg:px-8 space-y-8">
                    <Suspense fallback={<ChapterLoading/>}>
                        <Chapter1 />
                        <Chapter2 />
                        <Chapter3 />
                        <Chapter4 />
                        <Chapter5 />
                        <Chapter6 />
                        <Chapter7 />
                    </Suspense>
                </main>
            </div>
        </div>
    );
};

export default Page;
