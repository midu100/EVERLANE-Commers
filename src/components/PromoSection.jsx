import React from 'react'
import { Link } from 'react-router'

const PromoSection = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between flex-wrap gap-8">

            {/* Card 1 */}
            <div className="relative w-[431px] h-[520px] overflow-hidden rounded-[10px] group cursor-pointer shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
                alt="New Arrivals"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
                <h2 className="text-white text-[30px] font-semibold mb-4 tracking-wide">
                  New Arrivals
                </h2>
                <Link
                  to={'/'}
                  className="bg-white text-black text-[14px] font-medium tracking-wide px-10 py-3 rounded-[4px] hover:bg-red-500 hover:text-[#fff] duration-[.4s]"
                >
                  SHOP THE LATEST
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative w-[431px] h-[520px] overflow-hidden rounded-[10px] group cursor-pointer shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1544441893-675973e31985"
                alt="Best-Sellers"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
                <h2 className="text-white text-[30px] font-semibold mb-4 tracking-wide">
                  Best-Sellers
                </h2>
                <Link
                  to={'/'}
                  className="bg-white text-black text-[14px] font-medium tracking-wide px-10 py-3 rounded-[4px] hover:bg-red-500 hover:text-[#fff] duration-[.4s]"
                >
                  SHOP YOUR FAVORITES
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative w-[431px] h-[520px] overflow-hidden rounded-[10px] group cursor-pointer shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1603252109303-2751441dd157"
                alt="The Holiday Outfit"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
                <h2 className="text-white text-[30px] font-semibold mb-4 tracking-wide">
                  The Holiday Outfit
                </h2>
                <Link
                  to={'/'}
                  className="bg-white text-black text-[14px] font-medium tracking-wide px-10 py-3 rounded-[4px] hover:bg-red-500 hover:text-[#fff] duration-[.4s]"
                >
                  SHOP OCCASION
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default PromoSection
