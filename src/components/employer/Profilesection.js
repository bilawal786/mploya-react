import React from "react";
const Profilesection = () => {

      return (
            <>
                  <h1 className="text-center p-5">Employee Profile</h1>
                  <div className='container my-container'>

                        <div className="row">
                              <div className="col-sm-9">
                                    <div className="card border-0">
                                          <div className="d-flex flex-row align-items-center">
                                                <div className="icon-img"> <i></i> </div>
                                                <div className="c-details px-4 d-flex flex-column">
                                                      <h5 className="mb-0">April Odonowarn</h5>
                                                      <div className="d-flex flex-row my-2">
                                                            <span className="font-weight-bold">Data Analyist</span>
                                                            <span className="text-muted mx-3">
                                                                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                &nbsp;Los Angels,CA
                                          </span>
                                                      </div>

                                                </div>

                                          </div>

                                    </div>
                                    <div className="job-decscription my-5">
                                          <h6 className="description-heading-green">My Experience</h6>
                                          <h6 className="description-heading">Amazon Owner</h6>
                                          <p className="text-muted my-0"><small>March 2015 to May 2017</small></p> 

                                          <h6 className="description-heading mt-4">Designer</h6>
                                          <p className="text-muted my-0"><small>LOS Angels</small></p>
                                          <p className="text-muted my-0"><small>March 2015 to May 2017</small></p> 

                                          <br/><hr/><br/>

                                          <h6 className="description-heading-green">About Me</h6>
                                          <p className="text-muted mb-5">It is the paragraph explaining the decription of job
                                          skills required and all neccessary information
                                          It is the paragraph explaining the decription of job
                                          skills required and all neccessary informationIt is
                                          the paragraph explaining the decription of job
                                          skills required and all neccessary informationIt is the paragraph explaining the decription of job
                                          skills required and all neccessary information</p> 
                                           
                                          <hr/> 
                                          
                                          <h6 className="description-heading-green mt-5">Education</h6>
                                          <h6 className="description-heading mb-1">BS in engineering</h6>
                                          <p className="text-muted"><small>University of London</small></p>

                                          
                                          <h6 className="description-heading mt-5 mb-1">Fashion Design</h6>
                                          <p className="text-muted mt-0 mb-4"><small>LOS Angels</small></p>
                                          <hr/>

                                          <h6 className="description-heading-green mt-5 mb-1">Sales</h6>
                                          <p className="text-muted mt-0"><small>Managemnt</small></p>
                                           

                                           
                                    </div>



                              </div>
                              <div className="col-sm-3 d-flex flex-column align-items-center">
                                    <span className="primary-span"><i class="fa fa-mobile" aria-hidden="true"></i>&ensp;Contact</span>
                                    <div className="card border-0 my-4">
                                          <p><b>Need help? Call 1-888-292-9499</b></p>
                                          <a className="btn btn-success">Event</a>
                                          <a className="btn btn-secondary my-2">Event</a>
                                    </div>
                              </div>

                        </div>

                  </div>

            </>
      );

}

export default Profilesection;