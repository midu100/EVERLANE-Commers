import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <>
      <header className='bg-[#000] py-[7px]'>
         <div className="container">
            <div className="row">
                <div>
                    <p className={`text-[#fff] font-medium text-center`}>Get early access on launches and offers. <Link className='font-normal underline cursor-pointer'>Sign Up For Texts</Link></p>
                </div>
            </div>
         </div>
      </header>
    </>
  )
}

export default Header