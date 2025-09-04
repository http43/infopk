import React from 'react'
import NavBar from './Components/NavBar'
import Home from './Components/Home'

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