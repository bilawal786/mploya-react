import React from "react";
import Navebar from "../Navebar";
import Footer from "../Footer";
import "./aboute.css";
import Contact from "../../components/Contact";

// import MUIDataTable from "mui-datatables";
const About = () => {
      // const columns = ["Order ID", "Date Applied", "Company", "Type", "Position", "Contact", "Status"];
      // const data = [
      //       ["Joe James", "Test Corp", "Yonkers", "NY", "Test", "Test", "Test", "Test", "Test"],


      // ];
      // const options = {
      //       filterType: 'checkbox',
      // };
      return (
            <>
                  <div className="container-fluid">
                        <Navebar />
                        <div class="bg-white py-5 mt-5">
                              <div class="container py-5">
                                    <div class="row  align-items-center mb-5">
                                          <div class="col-lg-6 shadow order-2 order-lg-1 p-5"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                                                <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
                                                <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn 
                                           px-5 rounded-pill shadow" style={{ backgroundColor: "#067d1f", color: "white" }}>Learn More</a>
                                          </div>
                                          <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg" alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                                    </div>
                                    <div class="row align-items-center">
                                          <div class="col-lg-5  px-5 mx-auto"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg" alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                                          <div class="col-lg-6 shadow p-5"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
                                                <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
                                                <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn 
                                           px-5 rounded-pill shadow" style={{ backgroundColor: "#067d1f", color: "white" }}>Learn More</a>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div class="py-5">
                              <div class="container py-5">
                                    <div class="row mb-4">
                                          <div class="col-lg-5">
                                                <h2 class="display-4 font-weight-light">Our team</h2>
                                                <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                          </div>
                                    </div>

                                    <div class="row text-center">

                                          <div class="col-xl-3 col-sm-6 mb-5">
                                                <div class="bg-white rounded shadow py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834132/avatar-4_ozhrib.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow" />
                                                      <h5 class="mb-0">Manuella Nevoresky</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                                                      <ul class="social mb-0 list-inline mt-3">

                                                            <i class="fa fa-facebook circle" style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-instagram circle" style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-twitter circle" style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-youtube-play circle" style={{ fontSize: "16px" }}></i>
                                                      </ul>

                                                </div>
                                          </div>

                                          <div class="col-xl-3 col-sm-6 mb-5">
                                                <div class="bg-white rounded shadow py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow" />
                                                      <h5 class="mb-0">Samuel Hardy</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                                                      <ul class="social mb-0 list-inline mt-3">
                                                            <i class="fa fa-facebook circle" style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-instagram circle" style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-twitter circle" style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-youtube-play circle" style={{ fontSize: "16px" }}></i>
                                                      </ul>
                                                </div>
                                          </div>

                                          <div class="col-xl-3 col-sm-6 mb-5">
                                                <div class="bg-white rounded shadow py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow" />
                                                      <h5 class="mb-0">Tom Sunderland</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                                                      <ul class="social mb-0 list-inline mt-3">
                                                            <i class="fa fa-facebook circle" style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-instagram circle" style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-twitter circle" style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-youtube-play circle" style={{ fontSize: "16px" }}></i>
                                                      </ul>
                                                </div>
                                          </div>



                                          <div class="col-xl-3 col-sm-6 mb-5">
                                                <div class="bg-white rounded shadow py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-1_s02nlg.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow" />
                                                      <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                                                      <ul class="social mb-0 list-inline mt-3">
                                                            <i class="fa fa-facebook circle" style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-instagram circle" style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-twitter circle" style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-youtube-play circle" style={{ fontSize: "16px" }}></i>
                                                      </ul>
                                                </div>
                                          </div>


                                    </div>
                              </div>
                        </div>


                        <Contact />
                        <Footer />
                  </div>
                  {/* <MUIDataTable className="mt-5"
                              title={"Employee List"}
                              data={data}
                              columns={columns}
                              options={options}
                        /> */}



            </>
      );
}

export default About;