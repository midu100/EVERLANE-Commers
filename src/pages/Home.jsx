import React from 'react'
import Banner from '../components/Banner'
import CategorySection from '../components/CategorySection'
import PromoSection from '../components/PromoSection'
import MissionSec from '../components/MissionSec'
import FeaturedProducts from '../components/FeaturedProducts'

const Home = () => {
  return (
    <>
      <Banner />
      <CategorySection />
      <PromoSection />
      <MissionSec />
      <FeaturedProducts />
    </>
  )
}

export default Home