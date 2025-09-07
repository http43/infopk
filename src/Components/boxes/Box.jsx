import React from 'react'
import './Box.css'
import { NavLink } from 'react-router-dom'
const Box = ({ title, link, linktitle }) => {
    return (
        <div className='box-container'>
            <div className="box-inner-container">
                <div className="box-logo">
                    <img src="/public/vite.svg" alt="" />
                    <h2 className="box-title">{title} </h2>
                </div>
                <div className="box-links">
                    {/* <img src="/public/vite.svg" alt="" /> */}

                    <NavLink className='box-NavLink' to={link}>{linktitle}</NavLink>
                    <NavLink className='box-NavLink' to={link}>{linktitle}</NavLink>
                    <NavLink className='box-NavLink' to={link}>{linktitle}</NavLink>
                    <NavLink className='box-NavLink' to={link}>{linktitle}</NavLink>
                </div>
            </div>



        </div>
    )
}

export default Box