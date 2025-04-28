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


const Home = () => {
  return (
    <div>
      <Navbar />
      <MainHeader />
      <HomeExplore />
      <HomeFeuture />
      <HomeNewArrivals />
      <HomeCategory />
      <HomeClassicCollection />
      <HomeEnquire />
      <Footer />
    </div>
  )
}

export default Home;