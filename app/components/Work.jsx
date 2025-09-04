"use client";
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = () => {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1}}  id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
       <motion.h4 initial={{opacity:0 , y:-20}} whileInView={{opacity:1 , y:0}} transition={{duration: 0.5, delay:0.3}} className='text-center mb-2 text-lg
      font-bold mt-14'>My Portfolio</motion.h4>
            <motion.h2 initial={{opacity:0 , y:-20}} whileInView={{opacity:1 , y:0}} transition={{duration: 0.5, delay:0.5}} className='text-center text-5xl font-mono'>My latest work</motion.h2>
            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.5,delay:0.7}} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-mono'>Welcome to my Web development portfolio! Explore a collection of projects
                showcasing my expertise in front-end development. </motion.p>


                <motion.div  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.6,delay:0.9}} className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5'>
                    {workData.map((project,index)=>(
                        <motion.div  whileHover={{scale:1.05}} transition={{duration: 0.3}}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' key={index} style={{backgroundImage: `url(${project.bgImage})`}}>
                          <motion.div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 
                          group-hover:bottom-7'>
                            <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className='text-sm text-gray-700 '>{project.description}</p>
                           </div>
                           <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                           <a target="_blank" href={project.link}> <Image alt='send icon' src={assets.send_icon} className='w-5' /> </a>
                           </div>
                          </motion.div>
                           
                        </motion.div>
                    ))}
                </motion.div>
                <motion.a initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.5,delay:1.1}} href="" className='w-max flex items-center justify-center gap-2 
                border-[0.5px] font-bold border-gray-700 rounded-full py-3 px-10 mx-auto my-20 bg-white text-black  hover:bg-red-200 hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>Show more <Image alt='Right-arrow' src={assets.right_arrow_bold} className='w-4'/> </motion.a>
    </motion.div>
  )
}

export default Work
