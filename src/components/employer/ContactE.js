import React from 'react'; 


const ContactE = () => {

      return (
            <>
                  <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 bg-light">
                              <h4 className="text-center p-4"><b>Contact</b></h4>
                        </div>
                  </div>
                  <div className="container">
                        <div className="row justify-content-center">
                              <div className="col-lg-6 col-md-8 mt-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#dbdddc' }}>
                                    Map
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
            </>
      );
}

export default ContactE;