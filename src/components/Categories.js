import React from 'react';
import { NavLink } from "react-router-dom";


const Categories = () => {

    return (
        <>
            <div className='container my-container'>
                <div className='section-title'>
                    <h4>Explore By
                        <span style={{ color: "#067d1f" }}> Categories</span>
                    </h4>
                    <div className="row">
                        <div className="col-sm-8">
                            <p>Explore the different types of categories job available to rentand discover which is right for your speciality.</p>
                        </div>
                        <div className="col-sm-4">
                            <NavLink className="btn btn-success" to="/jobs">See More <i class="fa fa-arrow-right" aria-hidden="true"></i></NavLink>
                        </div>
                    </div>

                </div>
                <br></br>
                <div className='row'>
                    <div className="col-sm-6 col-md-4 col-lg-3 my-3 mx-auto">
                        <div className="card shadow-lg card-styled">
                            <div className="card-body">
                                <div class="badge badge-green"> <span><i className="fa fa-desktop"></i></span> </div>
                                <h5 className="card-title my-3"><b>Design & <br /> Development</b></h5>
                                <p className="card-text text-muted">15K <span>Post Jobs</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-3 my-3 mx-auto">
                        <div className="card shadow-lg card-styled">
                            <div className="card-body">
                                <div class="badge badge-red"> <span><i className="fa fa-desktop"></i></span> </div>
                                <h5 className="card-title my-3"><b>Working & <br /> Translation</b></h5>
                                <p className="card-text text-muted">15K <span>Post Jobs</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-3 my-3 mx-auto">
                        <div className="card shadow-lg card-styled">
                            <div className="card-body">
                                <div class="badge badge-yellow"> <span><i className="fa fa-desktop"></i></span> </div>
                                <h5 className="card-title my-3"><b>Marketing & <br /> Communication</b></h5>
                                <p className="card-text text-muted">15K <span>Post Jobs</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-3 my-3 mx-auto">
                        <div className="card shadow-lg card-styled">
                            <div className="card-body">
                                <div class="badge badge-red"> <span><i className="fa fa-desktop"></i></span> </div>
                                <h5 className="card-title my-3"><b>Project & <br /> Management</b></h5>
                                <p className="card-text text-muted">15K <span>Post Jobs</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-3 my-3 mx-auto">
                        <div className="card shadow-lg card-styled">
                            <div className="card-body">
                                <div class="badge badge-red"> <span><i className="fa fa-desktop"></i></span> </div>
                                <h5 className="card-title my-3"><b>Buisness & <br /> Development</b></h5>
                                <p className="card-text text-muted">15K <span>Post Jobs</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-3 my-3 mx-auto">
                        <div className="card shadow-lg card-styled">
                            <div className="card-body">
                                <div class="badge badge-green"> <span><i className="fa fa-desktop"></i></span> </div>
                                <h5 className="card-title my-3"><b>Design & <br /> Development</b></h5>
                                <p className="card-text text-muted">15K <span>Post Jobs</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-3 my-3 mx-auto">
                        <div className="card shadow-lg card-styled">
                            <div className="card-body">
                                <div class="badge badge-red"> <span><i className="fa fa-desktop"></i></span> </div>
                                <h5 className="card-title my-3"><b>Design & <br /> Development</b></h5>
                                <p className="card-text text-muted">15K <span>Post Jobs</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-3 my-3 mx-auto">
                        <div className="card shadow-lg card-styled">
                            <div className="card-body">
                                <div class="badge badge-yellow"> <span><i className="fa fa-desktop"></i></span> </div>
                                <h5 className="card-title my-3"><b>Customer & <br /> Support</b></h5>
                                <p className="card-text text-muted">15K <span>Post Jobs</span></p>
                            </div>
                        </div>
                    </div>


                </div>



            </div>


        </>
    );
}
export default Categories;