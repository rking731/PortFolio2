"use client";
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto  h-screen flex flex-col items-center justify-center gap-4 '>
      <motion.div initial={{scale:0}} whileInView={{scale:1}} whileHover={{scale:1.2}} transition={{duration:0.8,type:'spring',stiffness:100}}
      className='mt-40 cursor-pointer'>
       <a href="https://www.instagram.com/kingshuk8231?igsh=MWlxamVtODNvaHFrdw==" target="_blank"> <Image alt='' src={assets.profile2_img} className='rounded-full w-32 ' /> </a>
      </motion.div>
       <motion.h3  initial={{y:-30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.8,delay:0.5}}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-mono'>Hi! I'm Kingshuk Roy  <Image alt='' src={assets.hand_icon} className='w-6' /></motion.h3>
       <motion.h1  initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.6,delay:0.3}}
       className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Frontend Web developer based in Kolkata.</motion.h1>
       <motion.p  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6,delay:0.7}}
        className='max-w-2xl mx-auto font-bold'>
 I am a Frontend developer from West Bengal, India with 1 years of experience in web development , web design and web-app design.
       </motion.p>
       <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a  initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.6,delay:1}}
         href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:-translate-y-1 duration-500'>Contact me <Image alt='' src={assets.right_arrow_white} className='w-4' /> </motion.a>
       <motion.a target="_blank"  initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.6,delay:1.2}}
         href="/sample-resume.pdf" download 
        className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:-translate-y-1 bg-white text-black  hover:bg-red-200  hover:shadow-[4px_4px_0_#000] duration-500 active:shadow-[4px_4px_0_#000] active:bg-red-200'>My resume <Image alt='' src={assets.download_icon} className='w-4' /> </motion.a>
       </div>
    </div>
  )
}

export default Header
