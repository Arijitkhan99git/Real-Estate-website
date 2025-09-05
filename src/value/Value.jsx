import React from 'react'
import {value} from '../assets/index'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown,

} from "react-icons/md";

import data from './accordion'

function Value() {
  return (
    <>
    <section id='value' className='flex justify-center items-center pt-18 md:pt-20'>
        <div className='w-full max-w-7xl flex flex-col lg:flex-row justify-between gap-[3rem]  px-[2rem]'>
            
            {/* left side */}

            <div className='flex flex-1 justify-center lg:justify-start'>
             
                      <div className='overflow-hidden  '>
                            <img src={value} alt="valueImage" className='w-[22rem] h-[25rem] md:w-[25rem] md:h-[32rem] rounded-tl-[15rem] rounded-tr-[15rem] 
                            border-8 border-gray-300'/>
                        </div>
                
              
            </div>

            {/* right side */}
            <div className='flex-1 flex-col '>

                {/* heading */}
                <div className='space-y-2'>
                    <h4 className='text-amber-500 text-2xl poppins-bold'>Our Value</h4>
                    <h2 className='text-primary text-3xl poppins-bold'>Value We Give to You</h2>
                    <p className='text-base text-gray-600'>We always ready to help by providijng the best services for you. <br /> We beleive a good blace to live can make your life better</p>
                </div>

                {/* Dropdowns */}

                <Accordion 
                    allowMultipleExpanded={false}
                    preExpanded={[0]}
                    className='pt-8  '
                >
                    {
                        data.map((item, i)=>{
                            return(
                                <AccordionItem key={i} uuid={i} className='overflow-hidden mb-5 border border-gray-200 rounded-sm '>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flex w-full justify-between p-4 items-center cursor-pointer'>
                                            
                                                <div className='text-xl p-2 bg-blue-100 rounded-md text-blue-600'>{item.icon}</div>
                                                <span>{item.heading}</span>
                                                <div>
                                                    <MdOutlineArrowDropDown size={35}   className='bg-blue-100 rounded-md p-1 text-blue-600  hover:bg-blue-200 transition-colors'/>
                                                </div>
                                           
                                            
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <p className='text-base text-gray-600'>{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })      
                    }

                </Accordion>


                
               
            </div>

        </div>
    </section>
    </>
  )
}

export default Value