import React from 'react';
import { NavLink } from "react-router-dom";

const LatestJobs = () => {

    return (
        <>
            <div className='container my-container'>
                <div className='section-title'>
                    <h4>Latest Job
                        <span style={{ color: "#067d1f" }}> Posts</span>
                    </h4>
                    <div className="row">
                        <div className="col-sm-8">
                            <p>Explore the different types of jobs available to apply and discover which is right for you to apply</p>
                        </div>
                        <div className="col-sm-4">
                            <NavLink exact to="/jobs" className='btn btn-success'>See More <i class="fa fa-arrow-right" aria-hidden="true"></i></NavLink>
                        </div>
                    </div>



                </div>
                <br></br>
                <div className='row'>
                    <div className="col-md-4 my-3">
                        <div className="card p-3 shadow-lg card-post">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex flex-row align-items-center">
                                    <img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />
                                    <div className="c-details px-2">
                                        <h6 className="mb-0">Mailchimp</h6> <span>2 min ago</span>
                                    </div>

                                </div>
                                <button class="btn btn-light btn-circle btn-circle-sm m-1"><i class="fa fa-bell"></i></button>
                            </div>
                            <h5 className="card-title my-3"><b>Data Entry Staff</b></h5>
                            <div className="c-details">
                                <span><i class="fas fa-clock"></i>&nbsp;Full-Time</span>
                                <span className='mx-3'><i class="fa fa-map" aria-hidden="true"></i> Full-Time</span>


                            </div>
                            <div className="c-details my-2">
                                <span className='badge-type'>Design</span>
                                <span className='badge-type mx-3'>UI/UX</span>

                                <a className="section-link" href="#" style={{ float: 'right' }}><b>Apply</b></a>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div className="card p-3 shadow-lg card-post">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex flex-row align-items-center">
                                    <img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />
                                    <div className="c-details px-2">
                                        <h6 className="mb-0">Mailchimp</h6> <span>2 min ago</span>
                                    </div>

                                </div>
                                <button class="btn btn-light btn-circle btn-circle-sm m-1"><i class="fa fa-bell"></i></button>
                            </div>
                            <h5 className="card-title my-3"><b>Data Entry Staff</b></h5>
                            <div className="c-details">
                                <span><i class="fas fa-clock"></i>&nbsp;Full-Time</span>
                                <span className='mx-3'><i class="fa fa-map" aria-hidden="true"></i> Full-Time</span>


                            </div>
                            <div className="c-details my-2">
                                <span className='badge-type'>Design</span>
                                <span className='badge-type mx-3'>UI/UX</span>

                                <a className="section-link" href="#" style={{ float: 'right' }}><b>Apply</b></a>
                            </div>

                        </div>
                    </div><div className="col-md-4 my-3">
                        <div className="card p-3 shadow-lg card-post">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex flex-row align-items-center">
                                    <img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />
                                    <div className="c-details px-2">
                                        <h6 className="mb-0">Mailchimp</h6> <span>2 min ago</span>
                                    </div>

                                </div>
                                <button class="btn btn-light btn-circle btn-circle-sm m-1"><i class="fa fa-bell"></i></button>
                            </div>
                            <h5 className="card-title my-3"><b>Data Entry Staff</b></h5>
                            <div className="c-details">
                                <span><i class="fas fa-clock"></i>&nbsp;Full-Time</span>
                                <span className='mx-3'><i class="fa fa-map" aria-hidden="true"></i> Full-Time</span>


                            </div>
                            <div className="c-details my-2">
                                <span className='badge-type'>Design</span>
                                <span className='badge-type mx-3'>UI/UX</span>

                                <a className="section-link" href="#" style={{ float: 'right' }}><b>Apply</b></a>
                            </div>

                        </div>
                    </div>
                </div>


            </div>


        </>
    );
}
export default LatestJobs;