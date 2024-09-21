import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Doctor from './pages/Doctor';
import About from './pages/About';
import Myappointment from './pages/Myappointment';
import Myprofile from './pages/Myprofile';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      <Navbar/>
      

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/doctors' element={<Doctor/>}></Route>
        <Route path='/doctors/:speciality' element={<Doctor/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/my-appointments' element={<Myappointment/>}></Route>
        <Route path='/my-profile' element={<Myprofile/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/appointment/:docID' element={<Appointment/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;