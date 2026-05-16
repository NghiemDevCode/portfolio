'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { assets } from '@/assets/assets'
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useScroll } from '@/hooks/useScroll';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';

const Navbar = () => {

    const { isDarkMode, setIsDarkMode } = useTheme();
    // menuleft
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    // Scroll
    const isScroll = useScroll(50);

    // ScrollSpy
    const activeId = useScrollSpy(['home', 'about', 'work', 'contact']);
    const activeSection = `#${activeId}`;


    return (
        <>
            {/* <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt="" className='w-full' priority />
            </div> */}
            <nav className={`w-full fixed top-0 left-0 py-4 z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-dark-theme dark:shadow-white/20" : ""}`}>

                <div className='section-container flex items-center justify-between w-full'>
                    <Link href="/#home">
                        {/* <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="logo" className='w-28 cursor-pointer mr-14'></Image> */}
                        <span className='text-3xl sm:text-4xl font-bold font-Ovo tracking-wide cursor-pointer text-primary-blue dark:text-white'>
                            Portfolio
                        </span>
                    </Link>

                    <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"} `}>
                        <li>
                            <a className='font-Ovo relative group' href="/#home">
                                Home
                                <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-primary-blue dark:bg-white transition-all duration-300 ${activeSection === '#home' ? 'w-full' : 'w-0 '}`}></span>
                            </a>
                        </li>
                        <li>
                            <a className='font-Ovo relative group' href="/#about">
                                About
                                <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-primary-blue dark:bg-white transition-all duration-300 ${activeSection === '#about' ? 'w-full' : 'w-0 '}`}></span>
                            </a>
                        </li>
                        <li>
                            <a className='font-Ovo relative group' href="/#work">
                                Projects
                                <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-primary-blue dark:bg-white transition-all duration-300 ${activeSection === '#work' ? 'w-full' : 'w-0 '}`}></span>
                            </a>
                        </li>
                        <li>
                            <a className='font-Ovo relative group' href="/#contact">
                                Contact me
                                <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-primary-blue dark:bg-white transition-all duration-300 ${activeSection === '#contact' ? 'w-full' : 'w-0 '}`}></span>
                            </a>
                        </li>
                        {/* <li><a className='font-Ovo' href="#services">Services</a></li> */}
                        {/* <li><a className='font-Ovo' href="#work">My Work</a></li>

                    <li><a className='font-Ovo' href="#contact">Contact me</a></li> */}
                    </ul>

                    <div className='flex items-center gap-4'>
                        <button onClick={() => setIsDarkMode(!isDarkMode)}>
                            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className='w-6' />
                        </button>

                        <a href="/#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border boder-gray-500 rounded-full ml-4 font-Ovo dark:border-white/'>Contact<Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="arrow" className='w-3' /></a>

                        <button className='block md:hidden ml-3' onClick={openMenu}>
                            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className='w-6' />
                        </button>
                    </div>

                    {/* -------- mobile menu -------- */}

                    <ul className={`flex md:hidden flex-col  gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-dark-hover dark:text-white   ${isMenuOpen ? 'right-0' : '-right-64'}`}>
                        <div className='absolute top-6 right-6' onClick={closeMenu}>
                            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className='w-5 cursor-pointer'></Image>
                        </div>

                        <li><a className='font-Ovo' onClick={closeMenu} href="/#home">Home</a></li>
                        <li><a className='font-Ovo' onClick={closeMenu} href="/#about">About me</a></li>
                        {/* <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li> */}
                        <li><a className='font-Ovo' onClick={closeMenu} href="/#work">Projects</a></li>
                        <li><a className='font-Ovo' onClick={closeMenu} href="/#contact">Contact me</a></li>
                    </ul>
                </div>
            </nav >


        </>
    )
}

export default Navbar