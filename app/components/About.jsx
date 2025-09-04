"use client";
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
const About = () => {
    return (
        <motion.div id="about" className='w-full px-[12%] py-10 scroll-mt-20' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1.5}}>
            <motion.h4 initial={{opacity:0 , y:-20}} whileInView={{opacity:1 , y:0}} transition={{duration: 0.5, delay:0.3}}  className='text-center mb-2 text-lg
      font-bold mt-14'>Introduction</motion.h4>
            <motion.h2 initial={{opacity:0 , y:-20}} whileInView={{opacity:1 , y:0}} transition={{duration: 0.5, delay:0.5}}  className='text-center text-5xl font-mono'>About me</motion.h2>

            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.8}}  className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <motion.div initial={{opacity:0 , scale:0.9}} whileInView={{opacity:1 , scale:1}} transition={{duration: 0.6}}  className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image alt='user' src={assets.profile4_img} className='w-full rounded-3xl' />
                </motion.div>
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.6, delay:0.8}}  className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo'>I’m Kingshuk Roy, a passionate Web Developer and Designer from Paschim Medinipur, West Bengal. Currently, I’m in my second year at Jadavpur University, where I’m sharpening my technical and creative skills. I love building modern, user-friendly websites and enjoy solving mathematical problems in my free time. As a self-motivated learner, I’m always ready to explore new ideas and grow as a developer.
</p>
                        <motion.ul initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.8, delay:1}}  className='grid  grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                            {infoList.map(({icon,iconDark,title,description},index)=>(
                                <motion.li whileHover={{scale:1.05}} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer bg-white hover:bg-red-200 hover:-translate-y-1 duration-500 
                                hover:shadow-[4px_4px_0_#000]' key={index}>
                                    <Image alt={title} src={icon} className='w-7 mt-3'/>
                                    <h3 className='my-4 font-semibold text-black'>{title}</h3>
                                    <p className='text-black/80 text-sm'>{description}</p>
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.h4 whileHover={{scale:1.1}}  className='my-6  font-Ovo'>Tools I use</motion.h4>
                        <motion.ul initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.6, delay:1}}  className='flex items-center gap-3 sm:gap-5'>
                            {toolsData.map((tool,index)=>(
                                <motion.li initial={{opacity:0 , y:-20}} whileInView={{opacity:1 , y:0}} transition={{duration: 0.5, delay:0.3}}  className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer
                                hover:-translate-y-1 duration-500  hover:bg-[#ff004F]'
                                 key={index}>
                                    <Image alt='Tool' src={tool} className='w-5 sm:w-7'/>
                                </motion.li>
                            ))}
                        </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About
