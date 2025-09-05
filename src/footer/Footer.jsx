import React from 'react'
import {logo2} from '../assets/index'

function Footer() {
  return (
    <>
        <section id='footer' className='flex justify-center items-center py-5'>
            <div className='w-full max-w-7xl flex flex-wrap items-center justify-between px-[2rem] pb-5'>
                <div className='flex flex-col gap-4'>
                     <img src={logo2} width={120} alt="logo"/>
                     <p className='text-gray-500 text-sm leading-relaxed'>Our vision is to make all people <br />
                        the best place to live for them.</p>
                </div>

                <div className='flex flex-col gap-3'>
                     <h2 className='text-3xl poppins-bold text-primary'>Information</h2>
                     <p className='text-gray-500  leading-relaxed '>145 New York, FL 5467, USA</p>
                     <div className='flex gap-4 poppins-medium'>
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                     </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer