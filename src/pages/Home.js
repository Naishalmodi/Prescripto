import React from 'react'
import Header from '../component/Header';
import Specialitymenu from '../component/Specialitymenu';
import Topdoctor from '../component/Topdoctor';
import Banner from '../component/Banner';

const Home = () => {
  return (
    <div>
        <Header/>
        <Specialitymenu/>
        <Topdoctor/>
        <Banner/>
    </div>
  )
}

export default Home;