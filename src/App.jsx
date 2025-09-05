import React from 'react'
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AIOU from './Components/AIOU';
import BISE from './Components/BISE';
import IUB from './Components/IUB';
import LatestJobs from './Components/LatestJobs';
import OnlineEarning from './Components/OnlineEarning';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../src/App.css'
import Other from './Components/Other';
const App = () => {
  return (
    <>
   <BrowserRouter>
     <NavBar />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/aiou' element={<AIOU/>} />
      <Route path='/bise' element={<BISE/>} />
      <Route path='/iub' element={<IUB/>} />
      <Route path='/jobs' element={<LatestJobs/>} />
      <Route path='/online' element={<OnlineEarning/>} />
      <Route path='/other' element={<Other/>} />
     </Routes>
   </BrowserRouter>

    </>
  )
}

export default App