"use client";
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const {theme,setTheme} = useTheme();


  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };
  const toggleDarkMode =()=>{
    document.documentElement.classList.toggle("dark");
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
     {/* <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>  */}
      <nav className={`w-full mb-4 fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-red-50 text-black bg-opacity-50 dark:bg-black/50 backdrop-blur-lg" : ""}`}>

        {/* Logo */}
        <a href="#top">
          <div className='logo w-35 mr-14 hover:-translate-y-1 duration-800 hover:shadow-[4px_4px_0_#000] dark:hover:shadow-[4px_4px_0_#fff] '>
            <h1>Kingshuk.</h1>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-[#fff] shadow-sm bg-opacity-50"}`}>
          <li><a className='font-bold hover:-translate-y-1 duration-500 text-black' href="#top">Home</a></li>
          <li><a className='font-bold hover:-translate-y-1 duration-500  text-black' href="#about">About me</a></li>
          <li><a className='font-bold hover:-translate-y-1 duration-500  text-black' href="#services">Services</a></li>
          <li><a className='font-bold hover:-translate-y-1 duration-500  text-black' href="#work">My Works</a></li>
          <li><a className='font-bold hover:-translate-y-1 duration-500  text-black' href="#contact">Contact me</a></li>
          <li><a className='font-bold hover:-translate-y-1 duration-500  text-black' href="#Terminal">Terminal</a></li>
        </ul>

        {/* Right Section */}
        <div className='flex items-center gap-4'>
          {/* Dark Mode Toggle */}
          <button onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}>
            <Image alt='toggle dark mode' src={theme=== "dark"? assets.sun_icon : assets.moon_icon} className='w-6  icon cursor-pointer hover:-translate-y-1 duration-500' />
          </button>

          <a className='hidden lg:flex items-center gap-3 px-10
            py-2.5 border border-gray-500 rounded-full ml-4 font-bold bg-white text-black  hover:bg-red-200  hover:shadow-[4px_4px_0_#000] hover:text-black hover:-translate-y-1 duration-500 active:shadow-[4px_4px_0_#000] active:bg-red-200' href="#contact">Contact <Image alt='' src={assets.arrow_icon} className='w-3' /></a>

          <button className='block md:hidden ml-3 icon1' onClick={openMenu}>
            <Image alt='' src={theme=== "dark"? assets.menu_white :assets.menu_black} className='w-6 cursor-pointer' />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50
        h-screen bg-[#ff004f] text-white transition duration-500'>
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image alt='' src={assets.close_black} className='w-5 cursor-pointer' />
          </div>

          <li><a className='font-bold' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-bold' onClick={closeMenu} href="#about">About me</a></li>
          <li><a className='font-bold' onClick={closeMenu} href="#services">Services</a></li>
          <li><a className='font-bold' onClick={closeMenu} href="#work">My Works</a></li>
          <li><a className='font-bold' onClick={closeMenu} href="#contact">Contact me</a></li>
          <li><a className='font-bold' onClick={closeMenu} href="#Terminal">Terminal</a></li>
        </ul>
      </nav>

    </>
  );
};

export default Navbar;
