"use client";
import { signOut } from 'next-auth/react';
import { useMemo } from 'react';
import Container from '../Container';
import Logo from '../Logo';
import Button from './Button';
import { usePathname, useRouter } from 'next/navigation';
import NavbarMenu from './NavbarMenu';
import Avatar from '../Avatar';
import useMenuModal from '@/app/hooks/useMenuModal';
import { MdMenu } from 'react-icons/md';
import { ModeToggle } from './ModeToggle';

const Navbar = ({ currentUser }) => {
    const pathname = usePathname();
    const router = useRouter();
    const menuModal = useMenuModal();

    const handleSignOut = () => {
        signOut();
    };

    const isCurrentUser = useMemo(() => !!currentUser, [currentUser]);

    return (
        <div id='home'  className="fixed  w-[100vw] bg-white dark:bg-gray-800 z-40 shadow-md select-none top-0 dark:text-white text-[#131313]">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0 select-none">
                        <div className="flex items-center space-x-2">
                            <MdMenu className="cursor-pointer" size={30} onClick={menuModal.onOpen} />
                            <Logo />
                        </div>
                        <div className="flex items-center lg:space-x-10 md:space-x-7 sm:space-x-4 space-x-3 overflow-x-hidden">
                            <NavbarMenu pathname={pathname} />
                            <ModeToggle/>
                            {isCurrentUser ? (
                                <Avatar currentUser={currentUser} onClick={handleSignOut} />
                            ) : (
                                <div
                                className='flex items-center space-x-2'
                                >
                                <Button className={'text-white'} label="Login" onClick={() => router.push('/login')} small outline/>
                                {/* <Button className={'text-white'} label="Signup" onClick={() => router.push('/signup')} small outline /> */}
                                </div>
                            )}
                        </div>
                    </div>
                    <div />
                </Container>
            </div>
        </div>
    );
};

export default Navbar;
