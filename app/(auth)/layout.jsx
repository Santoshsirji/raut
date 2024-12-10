import React from 'react';
import Image from "next/image";

const AuthLayout = async ({children}) => {

  return (
    <div
    className='flex flex-col items-center justify-center pt-20 w-full'
    >
      <div><Image alt='Logo' src={'/bmlogo.png'} width={100} height={100} className='rounded-full'/></div>
      {children}
    </div>
  )
}

export default AuthLayout;
