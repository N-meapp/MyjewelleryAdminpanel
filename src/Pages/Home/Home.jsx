import React from 'react'

import Navbar from '../../Layout/Navbar/Navbar';
import MainHeader from '../../Layout/MainHeader/MainHeader';
import HomeExplore from '../../Layout/HomeExplore/HomeExplore';
import HomeFeuture from '../../Layout/HomeFeuture/HomeFeuture';
import HomeNewArrivals from '../../Layout/HomeNewArrivals/HomeNewArrivals';
import HomeCategory from '../../Layout/HomeCategory/HomeCategory';
import HomeClassicCollection from '../../Layout/HomeClassicCollection/HomeClassicCollection';
import HomeEnquire from '../../Layout/HomeEnquire/HomeEnquire';
import Footer from '../../Layout/Footer/Footer';
import TopCategories from '../../Layout/HomeExplore/TopCategories';


const Home = () => {
  return (
    <>
      <Navbar/>
      <MainHeader />
      <HomeExplore />
      <TopCategories/>
      <HomeFeuture />
      <HomeNewArrivals />
      <HomeCategory />
      <HomeClassicCollection />
      <HomeEnquire />
      <Footer />
    </>
  )
}

export default Home;