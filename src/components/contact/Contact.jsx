import React from 'react'
import {contact} from '../../assets/index'
import data from './typeOfContact'

function Contact() {
  return (
    <>
    <section id='contact-us' className='flex justify-center items-center py-5 pt-18 md:pt-20'>
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
                    {
                        data.map((item,i)=>(
                            <div key={i} className='p-3 border border-gray-200 flex flex-col gap-4 rounded-lg w-full mx-auto
                            transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg'>
                                {/* top */}
                                <div className='flex gap-5 items-center'>
                                    <div className='bg-blue-100  p-3 rounded-md text-blue-700'>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h2 className='text-lg poppins-semibold text-primary'>{item.type}</h2>
                                        <p className='text-base text-gray-600'>{item.num}</p>
                                    </div>
                                </div>
                                {/* bottom */}
                                <div>
                                    <button className='bg-blue-100/50 w-full py-2 px-2 poppins-semibold text-blue-500 rounded-lg'>{item.buttonText}</button>
                                </div>
                            </div>
                        ))
                    }                  
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