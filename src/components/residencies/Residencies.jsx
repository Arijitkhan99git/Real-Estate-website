import React, { useRef } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {r1} from '../../assets/index'
import {r2} from '../../assets/index'
import {r3} from '../../assets/index'



function Residencies() {
 const swiperRef = useRef(null);

  const sliderdata= [
  {
    "name": "Aliva Priva Jardin",
    "price": "47,043",
    "detail": "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
    "image": r1
  },
  {
    "name": "Asatti Garden City",
    "price": "66,353",
    "detail": "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
    "image": r2
  },
  {
    "name": "Citralan Puri Serang",
    "price": "35,853",
    "detail": "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
    "image": r3
  },
  {
    "name": "Aliva Priva Jardin",
    "price": "47,043",
    "detail": "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
    "image": r1
  },
  {
    "name": "Asatti Garden City",
    "price": "66,353",
    "detail": "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
    "image": r2
  },
  {
    "name": "Citralan Puri Serang",
    "price": "35,853",
    "detail": "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
    "image": r3
  }
]
  
  return (
    <section className='flex justify-center items-center w-full '>
    <div className='w-full max-w-7xl flex flex-col   px-[2rem]'>
      
        <div className='flex flex-col text-center items-center md:items-start gap-2 py-2 relative'>
            <h4 className='text-amber-500 poppins-bold text-2xl'>Best Choices</h4>
            <h2 className='text-primary poppins-bold text-4xl'>Popular Residencies</h2>
        </div>
        <div className='flex justify-end'>
            <SlideNextButton swiperRef={swiperRef} />
        </div>
        

        <div className="w-full flex  justify-center p-4 "> {/* Added wrapper for Swiper */}
          
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            breakpoints={{
                    
                    400: { slidesPerView: 1 },
                    600: { slidesPerView: 2 },
                    800: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 }
                }}
               
          > 
                   
           {            
            sliderdata.map((card, i)=>(
              <SwiperSlide key={i}>
                <div className='flex justify-center items-center py-4 px-4       
                                '>
                  
                  <div className=' flex flex-col gap-2 p-2 max-w-[15rem] md:max-w-[12rem] lg:max-w-[15rem]
                    transition duration-300 ease-in hover:scale-102  hover:bg-gray-100
                      rounded-lg hover:shadow-md    
                  '>
                      <img src={card.image} alt='home' />
                      <span className='text-xl poppins-semibold'>
                          <span className='text-amber-600'>$</span>
                          <span className='text-gray-600'>{card.price}</span>
                      </span>
                      <span className='text-2xl poppins-semibold text-primary'>{card.name}</span>
                      <span className='text-sm text-gray-600'>{card.detail}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))
           }
      
          </Swiper>

           
        </div>
        
    </div>
</section>
  )
}

export default Residencies

const SlideNextButton = ({ swiperRef }) => {
  return (
    <div className=" flex gap-4 ">
      <button onClick={() => swiperRef.current?.slidePrev()} className='text-2xl text-blue-800 bg-gray-100 border border-gray-200 rounded-lg px-2'>
        &lt;
      </button>
      <button onClick={() => swiperRef.current?.slideNext()} className='text-2xl text-blue-800 bg-white/60 border border-gray-200 shadow-lg rounded-lg px-2'>
        &gt;
      </button>
    </div>
  );
};

