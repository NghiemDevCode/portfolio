import { assets, infoList, toolsData, skillData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { useTheme } from '@/context/ThemeContext'

const About = () => {
    const { isDarkMode } = useTheme();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            id='about' className='w-full py-10 scroll-mt-20'>
            <div className='section-container'>
                <motion.h4
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='section-subtitle'>Introduction</motion.h4>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className='section-title'>About me</motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='flex w-full flex-col lg:flex-row items-center justify-center gap-20 my-20'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='w-64 sm:w-80 rounded-3xl max-w-none'>
                        <Image src={assets.user_image} alt='user' priority  className='w-full rounded-3xl' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                        className='flex-1'>
                        <p className='text-lg md:text-xl mb-10 font-Ovo'>
                            I'm a Fullstack Developer with a strong backend foundation, specializing in building efficient APIs. This deep understanding of the backend allows me to bridge Frontend and Backend seamlessly, delivering integrated solutions from database to interface.
                            {/* Tôi là một Fullstack Developer với nền tảng Backend vững chắc, chuyên về xây dựng các API hiệu quả. Chính sự am hiểu sâu về backend giúp tôi kết nối liền mạch giữa Frontend và Backend, mang lại giải pháp tích hợp từ cơ sở dữ liệu đến giao diện. */}
                        </p>
                        {/* <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        viewport={{ once: true }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white/20 dark:hover:bg-dark-hover/50 dark:hover:shadow-white' key={index}>
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'></Image>
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul> */}

                        <motion.ul
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            viewport={{ once: true }}
                            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl'>
                            {skillData.map(({ title, icon, skills }, index) => (
                                <motion.li
                                    whileHover={{ scale: 1.05 }}
                                    className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white/20 dark:hover:bg-dark-hover/50 dark:hover:shadow-white' key={index}>
                                    <div className='flex items-center gap-3 mb-4'>
                                        <Image src={icon} alt={title} className='w-7 dark:invert' />
                                        <h3 className='font-bold text-gray-700 dark:text-white'>{title}</h3>
                                    </div>
                                    <ul className='grid grid-cols- gap-y-3 text-sm text-gray-600 dark:text-gray-300 font-Ovo'>
                                        {skills.map((skill, i) => {
                                            const Icon = skill.icon;
                                            return (
                                                <li key={i} className='flex items-center gap-2'>
                                                    <Icon className='w-4 h-4' />
                                                    <span>{skill.name}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.3, delay: 0.5 }}
                        viewport={{ once: true }}
                        className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</motion.h4>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 ' key={index}>
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                            </motion.li>
                        ))}
                    </motion.ul> */}
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default About