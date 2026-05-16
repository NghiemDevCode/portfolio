import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { fadeIn, zoomIn, } from '@/constants/animations'
import { useTheme } from '@/context/ThemeContext'

const Services = () => {
     const { isDarkMode } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id='services' className='w-full  py-10 scroll-mt-20'>
      <div className='section-container'>
        <motion.h4
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className='section-subtitle'>What I offer</motion.h4>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className='section-title'>My Expertise</motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cupiditate excepturi maxime ut quibusdam consectetur, tempora nihil praesentium eveniet doloribus?</motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className='grid grid-cols-auto gap-6 my-10 '>
          {serviceData.map(({ icon, title, description, link }, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index} className='border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-light-hover dark:border-white/20 dark:hover:bg-dark-hover/50'>
              <Image src={icon} alt='' className='w-10' />
              <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
              <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
              <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read more <Image src={assets.right_arrow} className='w-4' alt=''></Image></a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Services