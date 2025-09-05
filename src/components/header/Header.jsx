import React from 'react'
import {Menu} from 'lucide-react'
import { X } from 'lucide-react';
import { logo } from '../../assets/index'
import { useState, useEffect } from 'react';



function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

   const closeMenu = () => {       
        setIsMenuOpen(false)
    }

       const handelMenu =()=>{             
       setIsMenuOpen(!isMenuOpen)
        
    }
  return (
    <section className='relative z-2 text-secondary flex justify-center '>
      {/* large Screen */}
        <div className='hidden md:flex justify-between items-center flex-wrap w-full max-w-7xl
            gap-[2rem] py-[1rem] px-[2rem]'>
            <img src={logo} width={100} alt="logo"/>

            <div className="flex justify-center items-center flex-wrap gap-[2rem]">
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className="poppins-medium py-1 px-2 text-white bg-gradient-to-r from-blue-500 to-blue-700 
                rounded-sm">
                <a href="">Contact</a>
            </button>
            </div>
        </div>

         {/* Mobile Screen */}
        <div className='flex md:hidden  justify-between  items-center w-full max-w-7xl
            gap-[2rem] py-[1rem] px-[2rem]  '>
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
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className="poppins-medium py-1 px-2 text-white bg-gradient-to-r from-blue-500 to-blue-700 
                rounded-sm">
                <a href="">Contact</a>
            </button>
            </div>
        </div>
    </section>
  )
}

export default Header