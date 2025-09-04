import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'


const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <a href="#top">
            <div className='logo w-36 mx-auto mb-2 hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] '>
                    <h1>Kingshuk.</h1>
                </div>
        </a>
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image alt='' src={assets.mail_icon} className='w-6' />
            rkingshuk731@gmail.com
        </div>
      </div>


    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>Copyright &#169; rkingshuk731@gmail.com | All rights reserved | 2025</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/rking731">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/kingshuk-roy-a28347330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a></li>
            <li><a target='_blank' href="https://www.twitter.com/">Twitter</a></li>
        </ul>
    </div>

    </div>
  )
}

export default Footer
