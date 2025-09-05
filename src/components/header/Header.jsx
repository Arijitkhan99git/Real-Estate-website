import React from 'react'
import {Menu, TurkishLira} from 'lucide-react'
import { X } from 'lucide-react';
import { logo } from '../../assets/index'
import { useState, useEffect } from 'react';
import { div } from 'framer-motion/client';



function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

   const closeMenu = () => {       
        setIsMenuOpen(false)
    }

       const handelMenu =()=>{             
       setIsMenuOpen(!isMenuOpen)
        
    }

  const [headerColor, setHeaderColor] = useState(false);

  
  useEffect(()=>{
    const handelScroll = ()=>{
      if (window.scrollY >=9) {
        setHeaderColor(true)
      }
      else{
        setHeaderColor(false)
      }
    }

    window.addEventListener('scroll', handelScroll);

    return ()=>(
      window.removeEventListener('scroll', handelScroll)
    )
  },[])

  return (
   
    <section className={`fixed top-0 left-0 w-full z-50   text-secondary flex  justify-center ${headerColor? 'bg-gradient-to-b from-gray-700 to-gray-500': ''}`}>
      {/* large Screen */}
        <div className='hidden md:flex justify-between items-center flex-wrap w-full max-w-7xl
            gap-[2rem] py-3 px-[2rem]'>
            <img src={logo} width={100} alt="logo"/>

            <div className="flex justify-center items-center flex-wrap gap-[2rem]">
            <a  href="#residencies">Residencies</a>
            <a href="#value">Our Value</a>
            <a href="#contact-us">Contact Us</a>
            <a href="#get-started">Get Started</a>
            <button className="poppins-medium py-1 px-2 text-white bg-gradient-to-r from-blue-500 to-blue-700 
                rounded-sm">
                <a href="#footer">Contact</a>
            </button>
            </div>
        </div>

         {/* Mobile Screen */}
        <div className='flex md:hidden  justify-between  items-center w-full max-w-7xl
            gap-[2rem] py-3 px-[2rem]  '>
          <div>
             <img src={logo} width={100} alt="logo"/>
          </div>
          
          {/* user Menu */}
          <div className='flex items-center gap-6  '>                                 

              <button onClick={handelMenu}>
                      {!isMenuOpen && <Menu className="  cursor-pointer" size={30}></Menu>}
                      {isMenuOpen && <X size={30} />}
              </button>                      
          </div>
          
        </div>

        {/* Dropdown menu */}

        <div className={` ${isMenuOpen ? 'absolute': 'hidden' } md:hidden top-[5rem] right-[2rem] z-10 bg-gray-100 text-gray-700 
          p-10 rounded-lg shadow-2xl`}>
          <div className="flex flex-col gap-4  poppins-regular text-lg">
            <a onClick={closeMenu} href="#residencies">Residencies</a>
            <a onClick={closeMenu} href="#value">Our Value</a>
            <a onClick={closeMenu} href="#contact-us">Contact Us</a>
            <a onClick={closeMenu} href="#get-started">Get Started</a>
            <button onClick={closeMenu} className="poppins-medium py-1 px-2 text-white bg-gradient-to-r from-blue-500 to-blue-700 
                rounded-sm">
                <a href="#footer">Contact</a>
            </button>
            </div>
        </div>
    </section>
   
  )
}

export default Header