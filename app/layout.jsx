import { Poppins } from "next/font/google";
// import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React from "react";

import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import NextNProgressClient from "@/components/Layout";
import ToasterProvider from "./providers/ToastProvider";
import { ThemeProvider } from "@/components/theme-provider";
import getCurrentUser from "./(actions)/getCurrentUser";
import CreateModal from "@/components/slate/models/CreateModal";
import UserMenuModal from "@/components/navbar/Modal/userMenuModal";
import GoogleAnalytics from "@/components/GoogleAnalytics";



export const metadata = {
  title: "Santosh Raut-Your Home to Discover Subject Specific NEB Notes",
  description: "Santosh Raut is an educational platform developed to cater NEB students with subject specific notes. We currently provide notes of Physics, Chemistry, and Computer Science for free.",
  keywords: [
    "Santosh Raut", "Subject Specific Notes", "NEB physics notes", "NEB Chemistry Notes", "NEB Computer Notes",
    "NEB grade 11 Physics notes", "NEB grade 12 Physics notes", "NEB grade 12 Chemistry Notes", "NEB grade 11 Chemistry Notes", "NEB grade 12 Computer notes", "NEB physical group notes", "Class 11 Physics Notes", "Class 12 Physics Notes", "Class 11 Computer Notes", "Class 12 Computer Notes", "Class 11 Chemistry Notes", "Class 12 Chemsitry Notes", "Khula Kitab", "Basic Mathematics Grade 11", "Basic Mathematics Grade 12", "Sajha Notes", "Maths Notes", "NEB Maths Notes"],
  icons: {
    icon: "/bmlogo.png",
  },
};

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default async function RootLayout({ children }) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <head>
      </head>

      <body className={poppins.className}>
        {/* <Script
          id="google-analytics"
          src="https://www.googletagmanager.com/gtag/js?id=G-H9KXC9PTMJ"
          onLoad={() => {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag("js", new Date());
            gtag("config", "G-H9KXC9PTMJ");
          }}
        /> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextNProgressClient />
          <ToasterProvider />
          <UserMenuModal user={currentUser}/>
          <Navbar currentUser={currentUser} />
          <CreateModal/>
          <div 
          className="dark:bg-gray-900 bg-white dark:text-white text-zinc-900 pb-10 transition-transform flex flex-col w-full"
          >
            {children}
          </div>
          <Footer />
          </ThemeProvider>
          <GoogleAnalytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
