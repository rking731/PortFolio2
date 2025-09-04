"use client";
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {

 const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ba216ca6-5201-4b5f-a3fe-b197b9660cd8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1}} id='contact' className='w-[80%] mx-auto rounded-lg shadow-md px-[12%] py-10 scroll-mt-20 bg-red-200'>
       <motion.h4 initial={{opacity:0 , y:-20}} whileInView={{opacity:1 , y:0}} transition={{duration: 0.5, delay:0.3}} className='text-black text-center mb-2 text-lg
      font-bold mt-14'>Connect with me</motion.h4>
            <motion.h2 initial={{opacity:0 , y:-20}} whileInView={{opacity:1 , y:0}} transition={{duration: 0.5, delay:0.5}} className='
            text-black text-center text-5xl font-mono'>Get in touch</motion.h2>
            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.5,delay:0.7}} className='text-black text-center max-w-2xl mx-auto mt-5 mb-12 font-mono'>
                I'd love to hear from you! If you have any questions, comments, or feedback, please use the from below.
            </motion.p>
            <motion.form initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.5,delay:0.9}} onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8'>
                    <motion.input initial={{x:50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:1.1, duration:0.6}} type="text" name='name' placeholder='Enter your name' required className='text-black flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
                    <motion.input initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.6,delay:0.7}} type="email" name='email' placeholder='Enter your email / Mobile No.' required className='text-black flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
                </div>
                <motion.textarea initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.6,delay:1.3}} rows='6' name='message' placeholder='Enter your message' className='text-black w-full p-4 mb-6 outline-none border-[0.5px] border-gray-400 rounded-md bg-white md-6'></motion.textarea>

                <motion.button  whileHover={{scale:1.05}} transition={{duration:0.3}} type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 hover:-translate-y-1 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>
                Submit now <Image alt='' src={assets.right_arrow_white} className='w-4' /> </motion.button>
                <p className='mt-4'>{result}</p>
            </motion.form>
    </motion.div>
  )
}

export default Contact
