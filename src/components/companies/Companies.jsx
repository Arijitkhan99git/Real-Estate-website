import React from 'react'
import {prologis,
    tower,
    equinix,
    realty} from '../../assets/index'

function Companies() {
  return (
    <section className='flex justify-center items-center pt-10'>
       <div className='w-full max-w-7xl flex flex-wrap justify-center sm:justify-between items-center 
        gap-[1rem] px-[2rem]'>          
               <img src={prologis} alt="prologis"  className='w-[9rem]'/>
            <img src={tower} alt="tower" className='w-[9rem]'/>
            <img src={equinix} alt="equinix" className='w-[9rem]' />
            <img src={realty} alt="realty" className='w-[9rem]'/>        
        </div>
    </section>
  )
}

export default Companies