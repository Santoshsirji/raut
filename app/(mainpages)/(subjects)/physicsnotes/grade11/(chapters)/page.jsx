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
const Chapter8 = lazy(() => import('./Chapter8'));
const Chapter9 = lazy(() => import('./Chapter9'));
const Chapter10 = lazy(() => import('./Chapter10'));
const Chapter11 = lazy(() => import('./Chapter11'));
const Chapter12 = lazy(() => import('./Chapter12'));
const Chapter13 = lazy(() => import('./Chapter13'));
const Chapter14 = lazy(() => import('./Chapter14'));
const Chapter15 = lazy(() => import('./Chapter15'));
const Chapter16 = lazy(() => import('./Chapter16'));
const Chapter17 = lazy(() => import('./Chapter17'));
const Chapter18 = lazy(() => import('./Chapter18'));
const Chapter19 = lazy(() => import('./Chapter19'));
const Chapter20 = lazy(() => import('./Chapter20'));
const Chapter21 = lazy(() => import('./Chapter21'));
const Chapter22 = lazy(() => import('./Chapter22'));
const Chapter23 = lazy(() => import('./Chapter23'));
const Chapter24 = lazy(() => import('./Chapter24'));
const Chapter25 = lazy(() => import('./Chapter25'));
const Chapter26 = lazy(() => import('./Chapter26'));
const Chapter27 = lazy(() => import('./Chapter27'));
const Chapter28 = lazy(() => import('./Chapter28'));

const Page = () => {
    return (
        <div className="flex flex-col">
            <div className="w-full  border-t-[1px] border-neutral-200">
                <main className="max-w-7xl mx-auto px-1 sm:px-4 lg:px-8 space-y-8">
                    <Suspense fallback={<ChapterLoading/>}>
                        <Chapter1 />
                        <Chapter2 />
                        <Chapter3 />
                        <Chapter4 />
                        <Chapter5 />
                        <Chapter6 />
                        <Chapter7 />
                        <Chapter8 />
                        <Chapter9 />
                        <Chapter10 />
                        <Chapter11 />
                        <Chapter12 />
                        <Chapter13 />
                        <Chapter14 />
                        <Chapter15 />
                        <Chapter16 />
                        <Chapter17 />
                        <Chapter18 />
                        <Chapter19 />
                        <Chapter20 />
                        <Chapter21 />
                        <Chapter22 />
                        <Chapter23 />
                        <Chapter24 />
                        <Chapter25 />
                        <Chapter26 />
                        <Chapter27 />
                        <Chapter28 />
                        {/* Add more chapters if needed */}
                    </Suspense>
                </main>
            </div>
        </div>
    );
};

export default Page;
