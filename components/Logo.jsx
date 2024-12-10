"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = () => {
    const pathname = usePathname();

    return (
        <>
        {pathname === "/" ? 
        <>
                    <Link href={"#home"} className="items-center saturate-150 brightness-[1.1] hidden md:flex">
                        <Image
                            alt="Logo"
                            className=" cursor-pointer w-10 h-10"
                            height={100}
                            width={50}
                            src={"/bmlogo.png"}
                        />
                        <h1 className="cursor-pointer text-xs font-semibold hidden md:flex" >Santosh Raut</h1>
                    </Link>
        </>
         : 
        <>
                    <Link href={"/"} className="items-center saturate-150 brightness-[1.1] hidden md:flex">
                        <Image
                            alt="Logo"
                            className=" cursor-pointer w-10 h-10"
                            height={100}
                            width={50}
                            src={"/bmlogo.png"}
                        />
                        <h1 className="cursor-pointer text-xs font-semibold hidden md:flex" >Santosh Raut</h1>
                    </Link>
        </>}

        </>
    )
}

export default Logo;