import React from 'react'
import { heroImage } from '../../assets/index' 
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className='relative z-1  p-[2rem] text-white flex justify-center items-center pt-22 md:pt-25'>
        <div className='w-full max-w-7xl p-[1rem] flex flex-col lg:flex-row justify-around gap-[3rem] '>
             {/* right side */}
             <div className='flex flex-col justify-center items-center lg:justify-end lg:items-start gap-[3rem]  mx-auto lg:mx-0'>
           
                    <div className=' relative z-1  ' >
                        {/* rounded div */}
                        <div  className='h-[4rem] w-[4rem] bg-gradient-to-r from-orange-400 to-orange-300
                            rounded-full absolute right-[28%] -z-1'/>  

                        <motion.h1 
                            initial={{y:"2rem", opacity:0}}
                            animate={{y:0, opacity:1}}
                            transition={{
                                duration:2,
                                type:"spring"
                            }}
                            className='poppins-semibold text-5xl sm:text-6xl leading-[4rem]'>
                            Discover <br />
                            Most Suitable
                            <br /> Property  
                        </motion.h1>        
                                
                    </div>


                 <div className="flex flex-col items-start text-gray-400 text-sm md:text-base">
                    <span>Find a variety of properties that suit you very easilty</span>
                    <span>Forget all difficulties in finding a residence for you</span>
                </div>

                <div className='max-w-md flex md:gap-[2rem] items-center overflow-x-auto bg-white w-full border-4 
                 border-gray-200 justify-between p-2 rounded-sm'>
                    <HiLocationMarker  className='text-blue-600' size={25} />

                    <input type="text" className='border-0 outline-0 text-gray-700 '/>
                    <button className=" poppins-medium text-white bg-gradient-to-r from-blue-500 to-blue-700 px-2 py-1 rounded-sm">Search</button>
                </div>

                <div className='flex gap-2 md:gap-[2rem] items-center flex-wrap w-full justify-between text-2xl md:text-3xl'>

                    <div className='flex flex-col gap-1   flex-wrap'>
                        <span className='flex  items-center gap-1'>
                            <CountUp start={8800} end={9000} duration={4} />
                            <span className=' text-amber-500 '>+</span>
                        </span>
                        <span className="text-gray-400 text-sm md:text-base">Premium Product</span>
                    </div>

                    <div className='flex flex-col gap-1   flex-wrap'>
                        <span className='flex  items-center gap-1'>
                            <CountUp start={1950} end={2000} duration={4} />
                            <span className=' text-amber-500 '>+</span>
                        </span>
                        <span className="text-gray-400 text-sm md:text-base">Happy Customer</span>
                    </div>

                     <div className='flex flex-col gap-1   flex-wrap'>
                        <span className='flex  items-center gap-1'>
                            <CountUp end={28} duration={4} />
                            <span className=' text-amber-500 '>+</span>
                        </span>
                        <span className="text-gray-400 text-sm md:text-base">Awards Winning</span>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className='flex gap-[2rem] justify-center items-center'>
                <motion.div 
                    initial={{x:"7rem", opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{
                        duration:2,
                        type:'spring'
                    }}
                    className='  overflow-hidden '>
                    <img src={heroImage} alt="HeroImage" className='w-[22rem] md:w-[28rem] rounded-tl-[15rem] rounded-tr-[15rem] 
                    border-8 border-white/12'/>
                </motion.div>
            </div>
            
        </div>
       
    </section>
  )
}

export default Hero