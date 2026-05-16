import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import { fadeIn, zoomIn } from '@/constants/animations'
import { useTypewriter } from '@/hooks/useTypewriter';
import { useTheme } from '@/context/ThemeContext'

const Header = () => {
       const { isDarkMode } = useTheme();
    // Typewriter
    const text = useTypewriter(["Web Developer", "Frontend Developer", "Backend Developer"]);

    return (
        // <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        //     <motion.div variants={zoomIn} initial="initial" whileInView="whileInView">
        //         <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
        //     </motion.div>

        //     <motion.h3 variants={fadeIn} initial="initial" whileInView="whileInView"
        //         className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Me
        //         <Image src={assets.hand_icon} alt='' className='w-6' /></motion.h3>

        //     <motion.h1
        //         initial={{ y: -30, opacity: 0 }}
        //         whileInView={{ y: 0, opacity: 1 }}
        //         transition={{ duration: 0.8, delay: 0.5 }}
        //         className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>FE BE web developer based in VietNam </motion.h1>

        //     <motion.p
        //         initial={{ opacity: 0 }}
        //         whileInView={{ opacity: 1 }}
        //         transition={{ duration: 0.6, delay: 0.7 }}
        //         className='max-w-2xl mx-auto font-Ovo'>I am a frontend developer from VietNam, with 2 years of experience  </motion.p>

        //     <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        //         <motion.a
        //             initial={{ y: 30, opacity: 0 }}
        //             whileInView={{ y: 0, opacity: 1 }}
        //             transition={{ duration: 0.6, delay: 1 }}
        //             href='#contact' className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /></motion.a>

        //         <motion.a
        //             initial={{ y: 30, opacity: 0 }}
        //             whileInView={{ y: 0, opacity: 1 }}
        //             transition={{ duration: 0.6, delay: 1.2 }}
        //             href='/sample-resume.pdf' download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>my resume <Image src={assets.download_icon} alt='' className='w-4' /></motion.a>
        //     </div>
        // </div >

        <div id="home" className='w-full'>
            <div className='section-container min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between py-20 gap-10'>
                <motion.div
                    variants={zoomIn}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className='order-1 md:order-2'   >
                    <div className='w-48 h-48 md:w-72 md:h-72 lg:w-100 lg:h-100 rounded-full overflow-hidden border-4 border-primary-blue/60 animate-bounce-slow'>
                        <Image src={assets.profile_img} alt="Profile" className='w-full h-full object-cover' />
                    </div>
                </motion.div>

                <div className='order-2 md:order-1 flex flex-col gap-4 max-w-2xl text-center md:text-left'>
                    <motion.h3
                        variants={fadeIn}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className='flex items-center justify-center md:justify-start gap-2 text-xl md:text-3xl font-Ovo text-white-700 dark:text-white-300'  >
                        <span>Hello, I'm</span>
                    </motion.h3>


                    <motion.h1
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className='text-4xl sm:text-6xl lg:text-7xl text-primary-blue font-bold font-Ovo leading-tight' >
                        Nguyen Van A
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                        className='text-2xl md:text-3xl font-semibold dark:text-white-400 font-Ovo ' >

                        A Passionate <span className="text-primary-blue">{text}</span>
                        <span className="inline-block bg-primary-blue w-[4px] h-[20px] animate-blink ml-1"></span>

                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                        className='text-lg md:text-xl text-gray-600 dark:text-gray-400 font-Ovo leading-relaxed'
                    >
                        "I specialize in building scalable, end-to-end web applications with a focus on seamless user experiences and robust backend systems."
                        {/* (Tôi chuyên xây dựng các ứng dụng web toàn diện, tập trung vào trải nghiệm người dùng mượt mà và hệ thống backend mạnh mẽ.) */}
                    </motion.p>

                    <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                        <motion.a
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            viewport={{ once: true }}
                            href='#contact' className='btn-primary'>contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /></motion.a>

                        <motion.a
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            viewport={{ once: true }}
                            href='/sample-resume.pdf' download className='btn-secondary'>my resume <Image src={assets.download_icon} alt='' className='w-4' /></motion.a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

