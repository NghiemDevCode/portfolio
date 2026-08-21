import { assets } from '@/assets/assets'
import { useTheme } from '@/context/ThemeContext'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"

const Footer = () => {
    const { isDarkMode } = useTheme()
    const [modalContent, setModalContent] = useState<{ title: string, content: string } | null>(null);

    const legalInfo = {
        privacy: {
            title: "Privacy Policy",
            content: "Your privacy is highly respected. Any personal information submitted through the contact form (such as your name and email) is used solely for the purpose of professional communication. I do not share, sell, or distribute your data to any third parties."
        },
        disclaimer: {
            title: "Disclaimer",
            content: "The projects showcased in this portfolio are developed for educational and demonstration purposes. All business names, data, and scenarios used are for simulation only and do not represent real-world entities or confidential company information."
        }
    }
    return (
        // <div className='mt-20'>
        //     <div className='text-center'>
        //         <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2' />

        //         <div className='w-max flex items-center gap-2 mx-auto'>
        //             <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
        //             greatstackdev@gmail.com
        //         </div>
        //     </div>

        //     <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        //         <p>© 2025 William Mark. All rights reserved.</p>
        //         <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
        //             <li><a target='_blank' href="https://instagram.com/greatstackdev">GitHub</a></li>
        //             <li><a target='_blank' href="https://instagram.com/greatstackdev">LinkedIn</a></li>
        //             <li><a target='_blank' href="https://instagram.com/greatstackdev">Twitter</a></li>
        //         </ul>
        //     </div>
        // </div>

        // <div className='mt-20'>
        //     <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <div className='mt-20 w-full '>
            <div className='section-container'>
                <div className='border-t border-gray-400 py-10 sm:flex items-center justify-between'>
                    <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-6'>
                        <p className='font-Ovo'>© {new Date().getFullYear()} Nguyen Van A. All rights reserved.</p>
                        <div className='flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400'>
                            <button
                                onClick={() => setModalContent(legalInfo.privacy)}
                                className='hover:text-primary-blue dark:hover:text-white transition-colors underline underline-offset-4 cursor-pointer font-Ovo'
                            >
                                Privacy Policy
                            </button>
                            {/* <button
                                onClick={() => setModalContent(legalInfo.disclaimer)}
                                className='hover:text-primary-blue dark:hover:text-white transition-colors underline underline-offset-4 cursor-pointer font-Ovo'
                            >
                                Disclaimer
                            </button> */}
                        </div>
                    </div>

                    <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                        <li className='flex items-center justify-center'>
                            <a target='_blank' href="https://github.com/NghiemDevCode" className='flex items-center gap-3 group'>
                                <div className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer group-hover:-translate-y-1 duration-500'>
                                    <Image src={assets.github_icon} alt='GitHub' className='w-5 sm:w-7  dark:invert'  />
                                </div>
                                <span className='font-Ovo'>GitHub</span>
                            </a>
                        </li>

                        <li className='flex items-center justify-center'>
                            <a target='_blank' href="#" className='flex items-center gap-3 group'>
                                <div className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer group-hover:-translate-y-1 duration-500'>
                                    <Image src={assets.linkedin} alt='LinkedIn' className='w-5 sm:w-7 ' />
                                </div>
                                <span className='font-Ovo'>LinkedIn</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* --- MODAL POPUP --- */}
            <AnimatePresence>
                {modalContent && (
                    <div className='fixed inset-0 z-[100] flex items-center justify-center px-4'>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setModalContent(null)}
                            className='absolute inset-0 bg-black/60 backdrop-blur-sm'
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className='relative w-full max-w-lg bg-white dark:bg-dark-hover p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-white/10'
                        >
                            <button
                                onClick={() => setModalContent(null)}
                                className='absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors'
                            >
                                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="close" className='w-4' />
                            </button>

                            <h3 className='text-2xl font-bold font-Ovo mb-4 dark:text-white'>
                                {modalContent.title}
                            </h3>
                            <p className='text-gray-600 dark:text-gray-300 leading-relaxed font-Ovo'>
                                {modalContent.content}
                            </p>

                            <button
                                onClick={() => setModalContent(null)}
                                className='mt-8 block mx-auto px-10 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:opacity-90 transition-opacity font-Ovo text-sm'
                            >
                                Got it
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Footer