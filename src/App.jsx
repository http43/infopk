import React from 'react'
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
   <BrowserRouter>
     <NavBar />
   </BrowserRouter>
     
   
   
      <Home />
    </>
  )
}

export default App