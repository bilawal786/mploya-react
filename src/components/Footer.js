import React from 'react';
import { NavLink } from "react-router-dom";
const Footer = () => {

      return (
            <>
                  <div className="container-fluid">
                        <div className='row mb-5 justify-content-center'>
                            
                                    <hr />
                                    <div className="row">
                                          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                                <img src="/mployalogo.png" alt="Logo" width="210" height="80" />

                                                <p className="mt-2">You want to ask something to us, just by clicking the <br /> button next to it and contact us directly.</p>
                                                <ul class="list-inline">
                                                      <i class="fa fa-facebook circle"></i>
                                                      <i class="fa fa-instagram circle"></i>
                                                      <i class="fa fa-twitter circle"></i>
                                                      <i class="fa fa-youtube-play circle"></i>
                                                </ul>

                                          </div>
                                          <div className="col-lg-2 col-md-6 mt-3 col-sm-6 col-6" >
                                                <h5> Links</h5>
                                                <ul className="no-bullets">
                                                      <li><NavLink exact to="/" style={{ color: 'black', textDecoration: 'none' }}>Home</NavLink> </li>
                                                      <li>Shop</li>
                                                      <li><NavLink exact to="/about" style={{ color: 'black', textDecoration: 'none' }}>About</NavLink> </li>
                                                      <li>Location</li>
                                                      <li>Contact</li>

                                                </ul>
                                          </div>
                                          <div className="col-lg-2 col-md-6 mt-3 col-sm-6 col-6" >
                                                <h5> About</h5>
                                                <ul className="no-bullets">
                                                      <li>Partners</li>
                                                      <li>Careers</li>
                                                      <li>Press</li>
                                                      <li>Community</li>
                                                </ul>
                                          </div>
                                          <div className="col-lg-4 col-md-12 mt-3 col-sm-12 col-xs-6" >
                                                <h5>Our Office</h5>
                                                <ul className="no-bullets">
                                                      <p>Indonesia <br />
                                                            Jl. Griya Permata Hijau no D1 Purwomartani Kalasan 543881</p>
                                                      <p>Tokyo <br />
                                                            35 Mandalay Road 13–37 Mandalay Towers Singapore 308215</p>
                                                </ul>
                                          </div>
                                    </div>
                             
                        </div>
                  </div>

                  <div className="row" style={{ backgroundColor: "#067d1f" }}>
                        <div className="col-md-12 text-center">
                              <p className="mt-3" style={{ color: 'white' }}>© 2021 wefabricant All rights reserved.</p>
                        </div>
                  </div>

            </>
      );
}
export default Footer;