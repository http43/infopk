import React from 'react'
import './Home.css'
import HomeBoxes from './HomeBoxes'
const Home = () => {
    return (
        <div className='hero-container'>
            <div className="hero">

                <div className="hero-text">
                    <h1 className='span'>The Easiest Way to <br /> Get Your New Future</h1> <br />
                    <input type="text" name="search" id="" placeholder='Search Anything' />
                    <button className='btn-primary' id='search'>Search </button>
                </div>
            </div>
            <HomeBoxes />



        </div>
    )
}

export default Home