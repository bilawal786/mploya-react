import React from 'react';
import { NavLink } from "react-router-dom";
import '../css/navebar.css';
const Navebar = () => {
      return (
            <>

                  <div className='row'>
                        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">

                              <div className="container-fluid">
                                    <img src="/mployalogo.png" className="logo" style={{ marginLeft: "140px", }} alt="Logo" width="80" height="50" />
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                          <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarText">
                                          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: "80px", }}>
                                                <li className="nav-item ">
                                                      <NavLink exact className="nav-link  navbar__link" activeClassName="navbar__link--active" style={{ color: 'black' }} aria-current="page" to="/">Home</NavLink>
                                                </li>
                                                <li className="nav-item ">
                                                      <NavLink exact className="nav-link navbar__link" activeClassName="navbar__link--active" to="/jobs" style={{ color: 'black' }}>Jobs</NavLink>
                                                </li>
                                                <li className="nav-item  ">
                                                      <NavLink exact className="nav-link  navbar__link" activeClassName="navbar__link--active" to="/explore" style={{ color: 'black' }}>Explore</NavLink>
                                                </li>
                                                <li className="nav-item  ">
                                                      <NavLink exact className="nav-link navbar__link" activeClassName="navbar__link--active" to="/about" style={{ color: 'black' }}>About</NavLink></li>
                                                <li className="nav-item ">
                                                      <NavLink exact className="nav-link navbar__link" activeClassName="navbar__link--active" to="/testimonials" style={{ color: 'black' }}>Testimonials</NavLink>
                                                </li>
                                          </ul>
                                          <NavLink exact to="/signin" type="button" className='btn sbtn' style={{ backgroundColor: '#067d1f', color: 'white', marginRight: "0px" }} >Sign In</NavLink>
                                          <NavLink exact to="/register" type="button" className='btn fbtn' style={{ marginLeft: '10px', backgroundColor: '#067d1f', color: 'white', marginRight: "150px" }}>Sign Up</NavLink>
                                    </div>
                              </div>
                        </nav>
                        {/* Header Componenet */}


                  </div>


            </>
      );
}

export default Navebar;