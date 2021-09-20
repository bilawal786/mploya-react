import React from 'react';
import Contact from '../Contact';
import Footer from '../Footer';
import Navebar from '../Navebar';
import Subscribe from '../Subscribe';
import img from "../../map.jpg";

const ContactE = () => {

      return (
            <>
                  <Navebar />

                  <div className="container" style={{ marginTop: "100px" }}>
                        <div className="row justify-content-center">
                              <div className="col-lg-6 col-md-8 mt-2 d-flex align-items-center justify-content-center">
                                    <img src={img} alt="map" width="790px" height="315px" />
                              </div>
                              <div className="col-lg-3 col-md-6">

                                    <div className="col-md-12 mb-4 mt-2 text-center" style={{ border: "1px solid #dbdddc" }}>
                                          <i class="fa fa-envelope mt-4" style={{ fontSize: '50px' }}></i>
                                          <p className="mb-5">helpme@jobworld.com</p>
                                    </div>
                                    <div className="col-md-12 mt-2 text-center" style={{ border: "1px solid #dbdddc" }}>
                                          <i class="fa fa-phone mt-4" style={{ fontSize: '50px' }}></i>
                                          <p className="mb-5">1-888-292-9499</p>
                                    </div>

                              </div>

                        </div>
                  </div>
                  <div className="container">
                        <div className="row justify-content-center ">

                              <div className="col-sm-8 mt-5 text-center mb-5">
                                    <form action="">
                                          <div class="row">
                                                <div class="col">
                                                      <input type="text" class="form-control" placeholder="Name" aria-label="Name" />
                                                </div>
                                                <div class="col">
                                                      <input type="text" class="form-control" placeholder="Enter Your Email" aria-label="Enter Your Email" />
                                                </div>
                                          </div>
                                          <div class="row">
                                                <div class="col mt-5">
                                                      <textarea name="" placeholder="Message" className="form-control" id="" cols="30" rows="10"></textarea> </div>
                                          </div>
                                          <button className="btn mt-4" style={{ backgroundColor: '#067d1f', color: 'white', float: 'left' }} type="submit">Send Message</button>
                                    </form>
                              </div>

                        </div>
                  </div>

                  <Subscribe />
                  <Contact />
                  <Footer />
            </>
      );
}

export default ContactE;