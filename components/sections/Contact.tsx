import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"
import { fadeIn, zoomIn, } from '@/constants/animations'
import { useTheme } from '@/context/ThemeContext'

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   whileInView={{ opacity: 1 }}
    //   transition={{ duration: 1 }}
    //   id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>

    //   <motion.h4
    //     initial={{ y: 20, opacity: 0 }}
    //     whileInView={{ y: 0, opacity: 1 }}
    //     transition={{ duration: 0.5, delay: 0.3 }}
    //     className='text-center mb-2 text-lg font-Ovo'>
    //     Connect with me</motion.h4>

    //   <motion.h2
    //     initial={{ y: -20, opacity: 0 }}
    //     whileInView={{ y: 0, opacity: 1 }}
    //     transition={{ duration: 0.5, delay: 0.5 }}
    //     className='text-center text-5xl font-Ovo'>
    //     Get in touch</motion.h2>

    //   <motion.p
    //     initial={{ opacity: 0 }}
    //     whileInView={{ opacity: 1 }}
    //     transition={{ duration: 0.5, delay: 0.7 }}
    //     className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
    //     Welcome to my web development portfolio! Explore a collection of projects
    //     showcasing my expertise in front-end development.</motion.p>

    //   <motion.form
    //     initial={{ opacity: 0 }}
    //     whileInView={{ opacity: 1 }}
    //     transition={{ duration: 0.5, delay: 0.9 }}
    //     onSubmit={onSubmit} className='max-w-2xl mx-auto'>

    //     <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
    //       <motion.input
    //         initial={{ opacity: 0, x: -50 }}
    //         whileInView={{ opacity: 1, x: 0 }}
    //         transition={{ duration: 0.6, delay: 1.1 }}
    //         type="text" placeholder='Enter your name' required
    //         className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90' name='name' />

    //       <motion.input
    //         initial={{ opacity: 0, x: -50 }}
    //         whileInView={{ opacity: 1, x: 0 }}
    //         transition={{ duration: 0.6, delay: 1.2 }}
    //         type="email" placeholder='Enter your email' required className='flex-1 p-3 outline-non border-[0.5px] border-gray-400 rounded-md bg-cust-white  bg-white dark:bg-dark-hover/30 dark:border-white/90' name='email' />
    //     </div>

    //     <motion.textarea
    //       initial={{ opacity: 0, y: 100 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6, delay: 1.3 }}
    //       rows={6} placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-cust-white mb-6 dark:bg-dark-hover/30 dark:border-white/90' name='message'></motion.textarea>

    //     <motion.button
    //       whileHover={{ scale: 1.05 }}
    //       transition={{ duration: 0.3 }}
    //       type='submit'
    //       className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-dark-hover'
    //     >Submit now <Image src={assets.right_arrow_white} alt='' className='w-4' /></motion.button>

    //     <p className='mt-4'>{result}</p>
    //   </motion.form>
    // </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id='contact'
      className='w-full py-10 scroll-mt-20'
    >
      <div className='section-container'>
        <motion.h4
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='section-subtitle'>
          Connect with me</motion.h4>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className='section-title'>
          Contact Me
        </motion.h2>

        <div className='mt-12 flex flex-col lg:flex-row gap-20 items-start justify-between'>
          <div className='flex-1 flex flex-col gap-8 w-full'>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }} >
              <h3 className='text-3xl font-semibold text-gray-700 dark:text-white mb-6 font-Ovo'>Contact Information</h3>
              <p className='text-gray-600 dark:text-gray-400 max-w-md mb-10 leading-relaxed font-Ovo'>

                I'm always open to discussing new projects, creative collaborations, or opportunities to contribute to your success. Let's build something great together!
                {/* Tôi luôn sẵn lòng thảo luận về các dự án mới, sự cộng tác sáng tạo hoặc các cơ hội để đóng góp vào thành công của bạn. Hãy cùng nhau tạo nên những điều tuyệt vời! */}
              </p>

              <div className='flex flex-col gap-8'>
                <motion.div
                  whileHover={{ x: 10 }}
                  className='flex items-center gap-5'>
                  <div className='w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
                  </div>
                  <div>
                    <p className='text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold'>Email</p>
                    <p className='text-lg text-gray-700 dark:text-white'>mailtestcode0001@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className='flex items-center gap-5'>
                  <div className='w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0'>
                    <Image src={assets.mobile_icon} alt='' className='w-6' />
                  </div>
                  <div>
                    <p className='text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold'>Call Me</p>
                    <p className='text-lg text-gray-700 dark:text-white'>+84 123 456 789</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className='flex items-center gap-5'>
                  <div className='w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0'>
                    <Image src={assets.project_icon} alt='' className='w-6' />
                  </div>
                  <div>
                    <p className='text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold'>Location</p>
                    <p className='text-lg text-gray-700 dark:text-white'>Viet Nam</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className='flex-1 max-w-2xl w-full bg-transparent lg:bg-card-bg-light lg:shadow-md lg:border lg:border-gray-200 lg:dark:border-white/10 lg:dark:bg-[#060816] rounded-2xl p-0 lg:p-10' >
            <form
              onSubmit={onSubmit}
              className='flex flex-col gap-6' >
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex flex-col gap-3'>
                  <label className='text-gray-700 dark:text-white font-semibold ml-1'>
                    Name
                  </label>
                  <motion.input
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    viewport={{ once: true }}
                    type="text" placeholder='Full name' required
                    className='input-field' name='name'
                  />
                </div>

                <div className='flex flex-col gap-3'>
                  <label className='text-gray-700 dark:text-white font-semibold ml-1'>
                    Email
                  </label>
                  <motion.input
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    viewport={{ once: true }}
                    type="email" placeholder='Example@gmail.com' required
                    className='input-field'
                    name='email'
                  />
                </div>
              </div>

              <div className='flex flex-col gap-3'>
                <label className='text-gray-700 dark:text-white font-semibold ml-1'>
                  Message
                </label>
                <motion.textarea
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  viewport={{ once: true }}
                  rows={6} placeholder='Message' required
                  className='input-field resize-none' name='message'></motion.textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                type='submit'
                className='py-3 px-12 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-dark-hover'
              >
                Submit now
                <Image src={assets.right_arrow_white} alt='' className='w-4' />
              </motion.button>

              {result && <p className='mt-4 text-center text-gray-600 dark:text-gray-400 font-Ovo'>{result}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact