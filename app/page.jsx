"use client";

import Image from "next/image";

import Decoration from "@/components/hero/Decoration";
import Hero from "@/components/hero/Hero";
import YoutubeHero from "@/components/hero/YoutubeHero";
import Container from "@/components/Container";
export default function Home() {
  
  return (
    <div
      className="
      pt-20
      overflow-x-hidden
      "
    >
      <Container>
        <div className="
        pt-2
        space-y-20
        ">
          <div className="mx-auto max-w-screen-2xl">
            <Decoration />
          </div>
          <div className="text-center text-3xl text-zinc-800 dark:text-white font-semibold space-y-8">
           
            <Hero />
          </div>
          <div className="text-center text-3xl text-zinc-800 dark:text-white font-semibold space-y-8">
            <span>Browse YouTube</span>
          </div>
          <YoutubeHero />
        </div>
      </Container>
    </div>
  );
}

