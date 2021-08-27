import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import { NavLink } from "react-router-dom";

const Toolbar = props => (

      <header className="toolbar">
            <nav className="toolbar__navigation">
                  <div className="toolbar__toggle-button">
                        <DrawerToggleButton click={props.drawerClickHandler} />
                  </div>
                  <div className="toolbar__logo">
                        <a href="/"><img src="/mployalogo.png" className="l" style={{ marginTop: "30px" }} alt="Logo" width="80" height="50" />
                        </a>
                  </div>
                  <div className="spacer" />
                  <div className="toolbar_navigation-items mt-4" style={{ marginRight: "330px" }}>
                        <ul>
                              <li className="nav-item">
                                    <NavLink to="/" exact className="nav-link  navbar__link" activeClassName="navbar__link--active">Home</NavLink>
                              </li>
                              <li className="nav-item">
                                    <NavLink to="/jobs" exact className="nav-link  navbar__link" activeClassName="navbar__link--active">Jobs</NavLink>
                              </li>
                              <li className="nav-item">
                                    <NavLink to="/explore" exact className="nav-link  navbar__link" activeClassName="navbar__link--active">Explore</NavLink>
                              </li>
                              <li className="nav-item">
                                    <NavLink to="/about" exact className="nav-link  navbar__link" activeClassName="navbar__link--active">About</NavLink>
                              </li>
                              <li className="nav-item">
                                    <NavLink to="/testimonials" exact className="nav-link  navbar__link" activeClassName="navbar__link--active">Testimonial</NavLink>
                              </li>
                        </ul>

 
                  </div>
                  
                  <NavLink exact to="/signin" type="button" className='btn sbtn mt-4' style={{ backgroundColor: '#067d1f', color: 'white', marginRight: "0px" }} >Sign In</NavLink>
                  <NavLink exact to="/register" type="button" className='btn fbtn mt-4' style={{ marginLeft: '10px', backgroundColor: '#067d1f', color: 'white', marginRight: "150px" }}>Sign Up</NavLink>

                   

            </nav> 
      </header>

);

export default Toolbar;