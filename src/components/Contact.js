import React from 'react';
import { NavLink } from "react-router-dom";

const Contact = () => {

      return (
            <>

                  <div className="container pb-4">
                        <div className='row my-5 justify-content-center'>
                              <div className="row mx-5 justify-content-around">
                                    <div className="top-response d-flex flex-row justify-content-around align-items-center">
                                          <div>
                                                <h1>We wouold love to talk <br />with <span style={{ color: '#067d1f' }}>you!</span></h1>
                                                <p>You want to ask something to us, just by clicking the <br /> button next to it and contact us directly.</p>

                                          </div>


                                          <button className="btn btn-success"><i class="fa fa-phone" aria-hidden="true"></i>&nbsp;Contact Us</button>

                                    </div> 
                              </div>
                        </div>
                  </div>

            </>
      );
}

export default Contact;