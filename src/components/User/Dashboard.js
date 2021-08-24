import React, { useEffect, useState } from "react";
import "../../css/custom.css";
import "../../js/custom";


const Dashboard = () => {


      return (
            <>

                  <body id="body-pd">
                        <header className="header shadow-sm bg-white" id="header">
                              <div className="header_toggle"> <i className='bx bx-menu' style={{ fontSize: "28px" }} id="header-toggle"></i> </div>
                              {/* <h4 style={{ marginLeft: "-760px" }} className="dash">Dashboard</h4> */}



                              <div className="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" alt="" /> </div>



                        </header>
                        <div className="l-navbar shadow p-2 bg-white rounded" id="nav-bar">
                              <nav className="nav">
                                    <div> <a href="#" className="nav_logo"> <img src="/mployalogo.png" classNameName="logo2" style={{ marginLeft: "35px", }} alt="Logo" width="80" height="50" /> </a>
                                          <div className="nav_list"> <a href="#" className="nav_link active">
                                                <i className='bx bx-grid-alt nav_icon'></i>
                                                <span className="nav_name">Dashboard</span> </a>
                                                <a href="#" className="nav_link"> <i className='fa fa-search nav_icon'></i>
                                                      <span className="nav_name">Near by</span> </a>
                                                <a href="#" className="nav_link">
                                                      <i className='fa fa-square-o nav_icon'></i> <span className="nav_name">Application</span> </a>
                                                <a href="#" className="nav_link">

                                                      <i className='fa fa-comments-o nav_icon'></i>
                                                      <span className="nav_name">Messages</span> </a>
                                                <a href="#" className="nav_link"> <i className='fa fa-pie-chart nav_icon'></i> <span className="nav_name">Statistics</span>
                                                </a> <a href="#" className="nav_link"> <i className='fa fa-calendar nav_icon'></i> <span className="nav_name">Calender</span> </a>
                                          </div>
                                    </div> <a href="#" className="nav_link"> <i className='bx bx-log-out nav_icon'></i> <span className="nav_name">SignOut</span> </a>
                              </nav>
                        </div>




                  </body>
            </>
      );
}

export default Dashboard;