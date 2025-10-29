import React from 'react'
import { Link } from 'react-router'
import Favorite from '../assets/img/Favorite.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const FeaturedProducts = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 4,
        speed: 500,
        dots:true
    };


  return (
    <>
      <section className='py-[80px] bg-white'>
        <div className="container mx-auto">
          <div className="text-center mb-[40px]">
            <h2 className='text-[28px] font-semibold font-mono text-black mb-[10px]'>
              Everlane Favorites
            </h2>
            <p className='text-[16px] font-mono text-[#444]'>
              Beautifully Functional. Purposefully Designed. Consciously Crafted.
            </p>
          </div>

          <div>
             <Slider {...settings}>
               <div className='flex flex-col items-start w-[220px]'>
                   <img src={Favorite} alt="product" className='rounded-[8px] mb-[10px]'/>
                   <p className='text-[14px] text-black font-semibold font-mono truncate w-[150px]'>
                       The Waffle Long-Sleeve Crew
                   </p>
                   <p className='text-[13px] text-[#444] font-mono mb-[3px]'>Bone</p>
                   <span className='text-[14px] text-black font-mono'>$60</span>
                </div>

                <div className='flex flex-col items-start w-[220px]'>
                   <img src={Favorite} alt="product" className='rounded-[8px] mb-[10px]'/>
                   <p className='text-[14px] text-black font-semibold font-mono truncate w-[150px]'>
                       The Waffle Long-Sleeve Crew
                   </p>
                   <p className='text-[13px] text-[#444] font-mono mb-[3px]'>Bone</p>
                   <span className='text-[14px] text-black font-mono'>$60</span>
                </div>

                <div className='flex flex-col items-start w-[220px]'>
                   <img src={Favorite} alt="product" className='rounded-[8px] mb-[10px]'/>
                   <p className='text-[14px] text-black font-semibold font-mono truncate w-[150px]'>
                       The Waffle Long-Sleeve Crew
                   </p>
                   <p className='text-[13px] text-[#444] font-mono mb-[3px]'>Bone</p>
                   <span className='text-[14px] text-black font-mono'>$60</span>
                </div>

                <div className='flex flex-col items-start w-[220px]'>
                   <img src={Favorite} alt="product" className='rounded-[8px] mb-[10px]'/>
                   <p className='text-[14px] text-black font-semibold font-mono truncate w-[150px]'>
                       The Waffle Long-Sleeve Crew
                   </p>
                   <p className='text-[13px] text-[#444] font-mono mb-[3px]'>Bone</p>
                   <span className='text-[14px] text-black font-mono'>$60</span>
                </div>

                <div className='flex flex-col items-start w-[220px]'>
                   <img src={Favorite} alt="product" className='rounded-[8px] mb-[10px]'/>
                   <p className='text-[14px] text-black font-semibold font-mono truncate w-[150px]'>
                       The Waffle Long-Sleeve Crew
                   </p>
                   <p className='text-[13px] text-[#444] font-mono mb-[3px]'>Bone</p>
                   <span className='text-[14px] text-black font-mono'>$60</span>
                </div>
             </Slider>
          </div>

        </div>
      </section>
    </>
  )
}

export default FeaturedProducts
