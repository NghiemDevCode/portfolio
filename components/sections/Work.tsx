import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { fadeIn, zoomIn, } from '@/constants/animations'
import { useTheme } from '@/context/ThemeContext'
import Link from 'next/link'

const Work = () => {
    const { isDarkMode } = useTheme();
    return (
        // <motion.div
        //     initial={{ opacity: 0 }}
        //     whileInView={{ opacity: 1 }}
        //     transition={{ duration: 1 }}
        //     viewport={{ once: true }}
        //     id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

        //     <motion.h4
        //         initial={{ opacity: 0, y: -20 }}
        //         whileInView={{ opacity: 1, y: 0 }}
        //         transition={{ duration: 1, delay: 0.3 }}
        //         viewport={{ once: true }}
        //         className='text-center mb-2 text-lg font-Ovo'>My portfolio</motion.h4>

        //     <motion.h2
        //         initial={{ opacity: 0, y: -20 }}
        //         whileInView={{ opacity: 1, y: 0 }}
        //         transition={{ duration: 0.5, delay: 0.5 }}
        //         viewport={{ once: true }}
        //         className='text-center text-5xl font-Ovo'>My latest work</motion.h2>

        //     <motion.p
        //         initial={{ opacity: 0 }}
        //         whileInView={{ opacity: 1 }}
        //         transition={{ duration: 0.5, delay: 0.7 }}
        //         viewport={{ once: true }}
        //         className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cupiditate excepturi maxime ut quibusdam consectetur, tempora nihil praesentium eveniet doloribus?</motion.p>

        //     <motion.div
        //         initial={{ opacity: 0 }}
        //         whileInView={{ opacity: 1 }}
        //         transition={{ duration: 0.6, delay: 0.9 }}
        //         viewport={{ once: true }}
        //         className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
        //         {workData.map((project, index) => (
        //             <motion.div
        //                 whileHover={{ scale: 1.05 }}
        //                 transition={{ duration: 0.3 }}
        //                 key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{ backgroundImage: `url(${project.bgImage})` }}>
        //                 <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
        //                     <div>
        //                         <h2 className='font-semibold'>{project.title}</h2>
        //                         <p className='text-sm text-gray-700'>{project.description}</p>
        //                     </div>
        //                     <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
        //                         <Image src={assets.send_icon} alt='send icon' className='w-5' />
        //                     </div>
        //                 </div>
        //             </motion.div>
        //         ))}
        //     </motion.div>

        //     <motion.a
        //         initial={{ opacity: 0 }}
        //         whileInView={{ opacity: 1 }}
        //         transition={{ duration: 0.5, delay: 1.1 }}
        //         viewport={{ once: true }}
        //         href='' className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-light-hover duration-500 dark:text-white dark:border-white dark:hover:bg-dark-hover'> Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4'></Image></motion.a>
        // </motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            id='work' className='w-full py-10 scroll-mt-20'>
            <div className='section-container'>
                <motion.h4
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='section-subtitle'>My projects</motion.h4>

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className='section-title'>My latest work</motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Explore my latest full-stack projects, where I combine advanced backend logic with seamless user experiences to solve real-world business and industrial challenges.</motion.p>
                {/* (Dịch: Khám phá những dự án Fullstack mới nhất của tôi, nơi tôi kết hợp logic Backend nâng cao với trải nghiệm người dùng mượt mà để giải quyết các bài toán thực tế trong kinh doanh và công nghiệp.) */}
                <motion.div
                    variants={fadeIn}
                    initial="initial"
                    whileInView="whileInView"
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto my-10 gap-12' >
                    {workData.map((project, index) => (
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            key={index}
                            // Thêm flex flex-col h-full để thẻ luôn cao bằng nhau trong cùng 1 hàng
                            className='bg-card-bg-light dark:bg-dark-hover/60 rounded-[2rem] border border-gray-200 dark:border-white/15 p-5 pb-10 cursor-pointer group shadow-sm hover:shadow-md duration-300 flex flex-col h-full' >

                            <div className='rounded-2xl overflow-hidden aspect-square relative'>
                                <Image
                                    src={project.bgImage}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"

                                    className='object-cover group-hover:scale-110 duration-500'
                                />
                            </div>


                            <div className='mt-6 px-2 flex flex-col flex-grow'>
                                {/* Giới hạn 2 dòng và min-height cho tiêu đề */}
                                <h3 className='text-xl font-bold dark:text-white mb-2 line-clamp-2 min-h-[4rem] whitespace-pre-line'>
                                    {project.title}
                                </h3>

                                <p className='text-sm text-gray-500 dark:text-gray-400 mb-5 line-clamp-3 min-h-[2.5rem]'>
                                    {project.description}
                                </p>

                                {/* <div className='flex flex-wrap gap-2 mb-6 text-sm min-h-[4rem] items-start'>
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className='tech-tag'>
                                            #{tag}
                                        </span>
                                    ))}
                                </div> */}

                                {/* <Link href={`/projects/${project.slug}`}>
                                    <div className='flex justify-center mt-auto'>
                                        <div className='btn-primary text-sm py-2.5 px-8 cursor-pointer'>
                                            <span>View Project</span>
                                            <Image src={assets.right_arrow_white} alt='arrow icon' className='w-4' />
                                        </div>
                                    </div>
                                </Link> */}

                                <a href={project.link || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='flex justify-center mt-auto' >
                                    <div className='btn-primary text-sm py-2.5 px-8 cursor-pointer'>
                                        <span>View Project</span>
                                        <Image src={assets.right_arrow_white} alt='arrow icon' className='w-4' />
                                    </div>
                                </a>

                            </div>

                        </motion.div>
                    ))}

                </motion.div>

                {/* <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                viewport={{ once: true }}
                href='' className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-light-hover duration-500 dark:text-white dark:border-white dark:hover:bg-dark-hover'> Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4'></Image></motion.a> */}
            </div>
        </motion.div>
    )
}

export default Work