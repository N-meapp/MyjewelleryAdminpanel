import React from 'react'

import Navbar from '../../Layout/Navbar/Navbar';
import MainHeader from '../../Layout/MainHeader/MainHeader';
import HomeExplore from '../../Layout/HomeExplore/HomeExplore';


const Home = () => {
  return (
    <div>
      <Navbar />
      <MainHeader />
      <HomeExplore />
    </div>
  )
}

export default Home;