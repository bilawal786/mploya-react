import React from "react";
import "./SideDrawer.css";
import { NavLink } from "react-router-dom";
const SideDrawer = props => {

      let drawerClasses = 'side-drawer';
      if (props.show) {
            drawerClasses = 'side-drawer open';
      }

      return (
            <nav nav className={drawerClasses} >
                  <ul>
                        <div className="toolbar__logo">
                              <a href="/"><img src="/mployalogo.png" className="mb-3" style={{ marginTop: "10px", marginLeft: "-100px" }} alt="Logo" width="80" height="50" />
                              </a>
                        </div>
                        <li className="nav-item">
                              <NavLink to="/" exact className="navbar__link" activeClassName="navbar__link--active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                              <NavLink to="/jobs" exact className="navbar__link" activeClassName="navbar__link--active">Jobs</NavLink>
                        </li>
                        <li className="nav-item">
                              <NavLink to="/explore" exact className="navbar__link" activeClassName="navbar__link--active">Explore</NavLink>
                        </li>
                        <li className="nav-item">
                              <NavLink to="/about" exact className="navbar__link" activeClassName="navbar__link--active">About</NavLink>
                        </li>
                        <li className="nav-item">
                              <NavLink to="/testimonials" exact className="navbar__link" activeClassName="navbar__link--active">Testimonial</NavLink>
                        </li>
                        <li className="nav-item">
                              <NavLink exact to="/signin" type="button" className='btn btn-sm' style={{ backgroundColor: '#067d1f', color: 'white', marginRight: "0px" }} >Sign In</NavLink>
                        </li>
                        <li className="nav-item">
                              <NavLink exact to="/register" type="button" className='btn btn-sm' style={{ marginLeft: '0px', backgroundColor: '#067d1f', color: 'white' }}>Sign Up</NavLink>

                        </li>
                  </ul>
            </nav>

      );


};


export default SideDrawer;