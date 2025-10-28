import React from 'react'
import BannerBg from '../assets/img/Banner.png'
import { Link } from 'react-router'

const Banner = () => {
  return (
    <>
      <section style={{background: `url(${BannerBg})`,backgroundRepeat:'no-repeat',backgroundSize: "cover"}} className='py-[275px]'>
        <div className="container">
            <div className="row">

                <div className='w-[632px]'>
                    <h1 className='text-[46px] text-[#fff] font-semibold font-mono pb-[14px]'>Your Cozy Era</h1>
                    <p className='text-[24px] text-[#fff] font-mono mb-[30px] w-[320px]'>Get peak comfy-chic with new winter essentials.</p>

                    <Link to={'/'} className='px-[80px] py-[12px] bg-[#fff] text-[#000] text-[18px] font-mono  font-light inline-block rounded-[5px]'>SHOP NOW</Link>
                </div>

            </div>
        </div>
      </section>
    </>
  )
}

export default Banner