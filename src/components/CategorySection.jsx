import React from 'react'
import { Link } from 'react-router'

const CategorySection = () => {
  return (
    <>
      <section className="py-16 bg-[#fafafa]">
        <div className="container mx-auto">
          {/* Heading */}
          <h2 className="text-center text-[26px] font-semibold text-gray-800 mb-12 font-sans tracking-wide">
            Shop by Category
          </h2>

          {/* Category Wrapper */}
          <div className="flex justify-center flex-wrap gap-8">

            {/* 1 - Shirts */}
            <div className="w-[212px] flex flex-col items-center group cursor-pointer transition-all duration-300">
              <div className="w-full h-[280px] overflow-hidden rounded-[6px] shadow-sm bg-white">
                <img
                  src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
                  alt="Shirts"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="text-[13px] uppercase text-gray-700 tracking-widest mt-3 font-medium group-hover:text-gray-900 transition-colors">
                Shirts
              </p>
            </div>

            {/* 2 - Denim */}
            <div className="w-[212px] flex flex-col items-center group cursor-pointer transition-all duration-300">
              <div className="w-full h-[280px] overflow-hidden rounded-[6px] shadow-sm bg-white">
                <img
                  src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
                  alt="Denim"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="text-[13px] uppercase text-gray-700 tracking-widest mt-3 font-medium group-hover:text-gray-900 transition-colors">
                Denim
              </p>
            </div>

            {/* 3 - Tees */}
            <div className="w-[212px] flex flex-col items-center group cursor-pointer transition-all duration-300">
              <div className="w-full h-[280px] overflow-hidden rounded-[6px] shadow-sm bg-white">
                <img
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
                  alt="Tees"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="text-[13px] uppercase text-gray-700 tracking-widest mt-3 font-medium group-hover:text-gray-900 transition-colors">
                Tees
              </p>
            </div>

            {/* 4 - Pants */}
            <div className="w-[212px] flex flex-col items-center group cursor-pointer transition-all duration-300">
              <div className="w-full h-[280px] overflow-hidden rounded-[6px] shadow-sm bg-white">
                <img
                  src="https://images.unsplash.com/photo-1514996937319-344454492b37"
                  alt="Pants"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="text-[13px] uppercase text-gray-700 tracking-widest mt-3 font-medium group-hover:text-gray-900 transition-colors">
                Pants
              </p>
            </div>

            {/* 5 - Sweaters */}
            <div className="w-[212px] flex flex-col items-center group cursor-pointer transition-all duration-300">
              <div className="w-full h-[280px] overflow-hidden rounded-[6px] shadow-sm bg-white">
                <img
                  src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
                  alt="Sweaters"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="text-[13px] uppercase text-gray-700 tracking-widest mt-3 font-medium group-hover:text-gray-900 transition-colors">
                Sweaters
              </p>
            </div>

            {/* 6 - Outerwear */}
            <div className="w-[212px] flex flex-col items-center group cursor-pointer transition-all duration-300">
              <div className="w-full h-[280px] overflow-hidden rounded-[6px] shadow-sm bg-white">
                <img
                  src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
                  alt="Outerwear"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="text-[13px] uppercase text-gray-700 tracking-widest mt-3 font-medium group-hover:text-gray-900 transition-colors">
                Outerwear
              </p>
            </div>
            

          </div>
        </div>
      </section>
    </>
  )
}

export default CategorySection
