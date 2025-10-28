import React from 'react'
import { Link } from 'react-router'
import Logo from '../assets/img/Logo.png'
import { FaSearch } from "react-icons/fa";
import { TbUser } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";




const Navbar = () => {

    const navItem =[
        {
            Name : 'Women',
            path : '/'
        },
        {
            Name : 'Men',
            path : '/'
        },
        {
            Name : 'About',
            path : '/'
        },
        {
            Name : 'Everworld Stories',
            path : '/'
        },
       
    ]

    const categ = [
        {
            Name : "Holiday Gifting",
            path :'/'
        },
        {
            Name : "New Arrivals",
            path :'/'
        },
        {
            Name : "Best-Sellers",
            path :'/'
        },
        {
            Name : "Clothing",
            path :'/'
        },
        {
            Name : "Pants & Jeans",
            path :'/'
        },
        {
            Name : "Outerwear",
            path :'/'
        },
        {
            Name : "Shoes & Bags",
            path :'/'
        },
        {
            Name : "Sale",
            path :'/'
        },
        {
            Name : "Tops & Sweaters",
            path :'/'
        },
    ]


  return (
    <>
      <nav className='py-[20px]'>
        <div className="container">
            <div className="row flex justify-between items-center">

                <ul className='flex gap-[24px] items-center '>
                    {
                        navItem.map((item,i)=>(
                            <li key={i} className='text-[18px] font-normal font-mono text-[#262626]'><Link to={item.path}>{item.Name}</Link></li>
                        ))
                    }
                </ul>

                <div className="Logo w-[128px]">
                    <Link to={'/'}><img src={Logo} alt='logo' /></Link>
                </div>

                <div className='w-[120px] flex justify-between'>
                    <button className='text-[20px] cursor-pointer'><FaSearch /></button>
                    <button className='text-[20px] cursor-pointer'><TbUser /></button>
                    <button className='text-[20px] cursor-pointer'><MdOutlineShoppingCart /></button>
                </div>

            </div>
        </div>
      </nav>

      <section className='py-[20px]'>
        <div className="container">
            <div className="row flex justify-center">
                <ul className='flex gap-[24px] items-center'>
                    {
                        categ.map((item,i)=>(
                            <li key={i} className='text-[18px] font-normal text-[#262626]'><Link to={item.path}>{item.Name}</Link></li>
                        ))
                    }
                </ul>
            </div>
        </div>
      </section>
    </>
  )
}

export default Navbar