import React from 'react';
import { NavLink } from "react-router-dom";

const Contact = () => {

      return (
            <>
                  <div className="container">
                        <div className='row mb-5 justify-content-center' style={{ marginTop: '150px' }}>
                              <div className="col-sm-8">
                                    <div className="row">
                                          <div className="col-sm-8">
                                                <h1>We wouold love to talk <br />with <span style={{ color: '#067d1f' }}>you!</span></h1>
                                                <p>You want to ask something to us, just by clicking the <br /> button next to it and contact us directly.</p>
                                          </div>
                                          <div className="col-sm-4" >
                                                <NavLink exact to="/contact" className="btn contactbtn" style={{ backgroundColor: '#067d1f', color: 'white' }}>Contact Us</NavLink>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default Contact;