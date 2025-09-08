import React from 'react'
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
{/* <script type="text/javascript" src="js/bootstrap.min.js"></script> */ }
import { NavLink, Outlet } from 'react-router-dom';
const NavBar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-secondary bg-custom">
        <div className="container-fluid w-75">
          <NavLink className="navbar-brand text-white" to="/">InfoPk </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink className="nav-link active text-white" aria-current="page" to="/">Home</NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle text-white" to="/aiou" role="button">
                  AIOU
                </NavLink>
                <ul className="dropdown-menu bg-dark">
                  <li><NavLink className="dropdown-item text-danger" to="aiou-admission">AIOU Admission </NavLink></li>
                  <li><NavLink className="dropdown-item text-info" to="aiou-assignment">AIOU Assignment </NavLink></li>
                  <li><NavLink className="dropdown-item text-info" to="aiou-result">AIOU Result </NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle text-white" to="/bise" role="button">
                  BISE
                </NavLink>
                <ul className="dropdown-menu bg-dark">
                  <li><NavLink className="dropdown-item text-primary" to="/bise-admission">BISE Admission</NavLink></li>
                  <li><NavLink className="dropdown-item text-primary" to="/bise-registration">BISE Registration</NavLink>
                  </li>


                  <li className="nav-item dropdown submenus">
                    <NavLink className="nav-link dropdown-toggle text-white " to="/bise" role="button">
                      BISE Next
                    </NavLink>
                    <ul className="dropdown-menu bg-dark subli">
                      <li><NavLink className="dropdown-item text-white" to="/bise-admission">BISE Admission</NavLink></li>
                      <li><NavLink className="dropdown-item text-white" to="/bise-registration">BISE Registration</NavLink></li>
                      <li><NavLink className="dropdown-item text-white" to="/bise-result">BISE Result</NavLink></li>
                    </ul>
                  </li>


                  <li><NavLink className="dropdown-item text-white" to="/bise-result">BISE Result</NavLink></li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-white text-danger.active" to="/iub">IUB</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/jobs">Latest Jobs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/online">Online Earning</NavLink>
              </li>


              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle text-white" to="/bise" role="button">
                  BISE
                </NavLink>
                <ul className="dropdown-menu bg-dark">
                  <li><NavLink className="dropdown-item text-white" to="/bise-admission">BISE Admission</NavLink></li>
                  <li><NavLink className="dropdown-item text-white" to="/bise-registration">BISE Registration</NavLink></li>
                  <li><NavLink className="dropdown-item text-white" to="/bise-result">BISE Result</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <button className="nav-link text-blue text-2xl bg-cusom text-white" data-bs-toggle="tooltip"><i className='text-red:hover'>Login</i> </button>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <Outlet />

    </>
  )
}

export default NavBar