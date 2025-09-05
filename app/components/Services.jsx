"use client";
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1}} 
    id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
       <motion.h4 initial={{opacity:0 , y:-20}} whileInView={{opacity:1 , y:0}} transition={{duration: 0.5, delay:0.3}} className='text-center mb-2 text-lg
      font-bold mt-14'>What I offer</motion.h4>
            <motion.h2 initial={{opacity:0 , y:-20}} whileInView={{opacity:1 , y:0}} transition={{duration: 0.5, delay:0.5}} className='text-center text-5xl font-mono'>My Services</motion.h2>
            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.5,delay:0.7}} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-mono'>Craft a visually appealing and engaging "Services" section for my portfolio website. The section should highlight the services I offer in a way that is modern, minimal, and client-focused. Each service should include a short title, an attractive icon, and a concise description that shows the value I provide. The tone should be professional but friendly, encouraging potential clients to trust and work with me.
</motion.p>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.6,delay:0.9}}
       className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10'>
         {serviceData.map(({icon,title,description,link},index)=>(
            <motion.div whileHover={{scale:1.05}} key={index}
            className='border bg-white border-gray-400 rounded-lg px-8 py-12 hover:bg-red-200 hover:-translate-y-1 duration-500 active:shadow-[4px_4px_0_#000] active:bg-red-200
                                hover:shadow-[4px_4px_0_#000] cursor-pointer'>
                <Image alt='' src={icon} className='w-10' />
                <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5'>
                    {description}
                </p>
                <a href={link} target="_blank" className='flex items-center gap-2 text-sm text-red-600 mt-5'>
                    Read more <Image alt='' src={assets.right_arrow} className='w-4' />
                </a>
            </motion.div>
         ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
