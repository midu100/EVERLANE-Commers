import React from 'react'
import { Link } from 'react-router'
import Mission from '../assets/img/MissionPic.png'

const MissionSec = () => {
  return (
    <>
       <section style={{background: `url(${Mission})`,backgroundRepeat:'no-repeat',backgroundSize:'cover' , backgroundPosition:'center'}} className='py-[72px]'>
         <div className="container">
            <div className="row flex justify-center">
                <div className='text-center'>
                    <h1 className='text-[32px] font-semibold font-mono mb-3 text-[#fff]'>We’re on a Mission To Clean Up the Industry</h1>
                    <p className='text-[18px] font-normal font-mono mb-5 text-[#fff]'>Read about our progress in our latest Impact Report.</p>
                    <Link to={'/'} className="bg-white text-black text-[14px] font-medium tracking-wide px-10 py-3 rounded-[4px] inline-block hover:bg-red-500 hover:text-[#fff] duration-[.4s]">
                        LEARN MORE
                    </Link>
                </div>
            </div>
         </div>
       </section>
    </>
  )
}

export default MissionSec