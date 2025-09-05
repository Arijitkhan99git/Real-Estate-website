import React from 'react'
import {contact} from '../assets/index'
import { Phone } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
import { Video } from 'lucide-react';
import { MessageSquare } from 'lucide-react';

function Contact() {
  return (
    <>
    <section className='flex justify-center items-center py-5'>
        <div className='w-full max-w-7xl flex flex-col lg:flex-row justify-between gap-[3rem]  px-[2rem]'>
            
            {/* left side */}
            <div className='flex flex-1 flex-col gap-8'>

                {/* heading */}
                <div className='space-y-2'>
                    <h4 className='text-amber-500 text-2xl poppins-bold'>Our Contact Us</h4>
                    <h2 className='text-primary text-3xl poppins-bold'>Easy to contact us</h2>
                    <p className='text-base text-gray-600'>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
                    {/* call */}
                    <div className='p-3 border border-gray-200 flex flex-col gap-4 rounded-lg w-full mx-auto
                       transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg'>
                        {/* top */}
                        <div className='flex gap-5 items-center'>
                            <div className='bg-blue-100  p-3 rounded-md'>
                                <Phone size={20} className='text-blue-700'/>
                            </div>
                            <div>
                                <h2 className='text-xl poppins-bold text-primary'>Call</h2>
                                <p className='text-base text-gray-600'>021 123 145 14</p>
                            </div>
                        </div>
                        {/* bottom */}
                        <div>
                            <button className='bg-blue-100/50 w-full py-2 px-2 poppins-semibold text-blue-500'>call now</button>
                        </div>
                    </div>

                    {/* chat */}
                    <div className='p-3 border border-gray-200 flex flex-col gap-4 rounded-lg w-full mx-auto'>
                        {/* top */}
                        <div className='flex gap-5 items-center'>
                            <div className='bg-blue-100  p-3 rounded-md'>
                                <MessageCircleMore size={20} className='text-blue-700'/>
                            </div>
                            <div>
                                <h2 className='text-xl poppins-bold text-primary'>Chat</h2>
                                <p className='text-base text-gray-600'>021 123 145 14</p>
                            </div>
                        </div>
                        {/* bottom */}
                        <div>
                            <button className='bg-blue-100/50 w-full py-2 px-2 poppins-semibold text-blue-500'>call now</button>
                        </div>
                    </div>

                    {/* video */}
                    <div className='p-3 border border-gray-200 flex flex-col gap-4 rounded-lg w-full mx-auto'>
                        {/* top */}
                        <div className='flex gap-5 items-center'>
                            <div className='bg-blue-100  p-3 rounded-md'>
                                <Video size={20} className='text-blue-700'/>
                            </div>
                            <div>
                                <h2 className='text-xl poppins-bold text-primary'>Video Call</h2>
                                <p className='text-base text-gray-600'>021 123 145 14</p>
                            </div>
                        </div>
                        {/* bottom */}
                        <div>
                            <button className='bg-blue-100/50 w-full py-2 px-2 poppins-semibold text-blue-500'>call now</button>
                        </div>
                    </div>

                    {/* message */}
                    <div className='p-3 border border-gray-200 flex flex-col gap-4 rounded-lg w-full mx-auto'>
                        {/* top */}
                        <div className='flex gap-5 items-center'>
                            <div className='bg-blue-100  p-3 rounded-md'>
                                <MessageSquare size={20} className='text-blue-700'/>
                            </div>
                            <div>
                                <h2 className='text-xl poppins-bold text-primary'>Message</h2>
                                <p className='text-base text-gray-600'>021 123 145 14</p>
                            </div>
                        </div>
                        {/* bottom */}
                        <div>
                            <button className='bg-blue-100/50 w-full py-2 px-2 poppins-semibold text-blue-500'>call now</button>
                        </div>
                    </div>
                    
                </div>
                         
            </div>
            

            {/* right side */}
            <div className='flex flex-1 justify-center lg:justify-end '>
             
                <div className='overflow-hidden'>
                    <img src={contact} alt="valueImage" className='w-[22rem] h-[25rem] md:w-[25rem] md:h-[32rem] rounded-tl-[15rem] rounded-tr-[15rem] '/>
                </div>
                              
            </div>

        </div>
    </section>
    </>
  )
}

export default Contact

const Testdiv = ()=>(
    <div>

   
       
     </div>    
)