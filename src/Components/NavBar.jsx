import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
{/* <script type="text/javascript" src="js/bootstrap.min.js"></script> */}
import { NavLink, Outlet } from 'react-router-dom';
const NavBar = () => {

    return (
        <>
       <nav className="navbar navbar-expand-lg bg-gray">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">InfoPk </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        {/* <li className="nav-item"> <NavLink className="nav-link" to="/aiou">AIOU </NavLink></li> */}
         <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="aiou" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            AIOU 
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="aiou-admission">AIOU Admission </NavLink></li>
            <li><NavLink className="dropdown-item" to="aiou-assignment">AIOU Assignment </NavLink></li>
            <li><NavLink className="dropdown-item" to="aiou-result">AIOU Result </NavLink></li>
          </ul>
        </li>
         <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="/bise" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            BISE  
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="bise-admission">BISE Admission </NavLink></li>
            <li><NavLink className="dropdown-item" to="bise-registration">BISE Registration  </NavLink></li>
            <li><NavLink className="dropdown-item" to="bise-result">BISE Result </NavLink></li>
          </ul>
        </li>
        {/* <li className="nav-item">          <NavLink className="nav-link" to="/bise">BISE </NavLink>        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/iub">IUB </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/jobs">Latest Jobs </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/online">Online Earning </NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>   
<Outlet/>

        </>
    )
}

export default NavBar