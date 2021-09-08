import React from 'react';
import ApplicationTable from './AppicationTable';

const Application = () => {

    return (
        <>
            <div className="container-fluid">
                <ApplicationTable />
                <div className="cal-top-section px-4 pb-0">
                    <div className="card bg-transparent border-0">
                        <div className="top-response d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-row">
                                <img className="calendar-top-img text-center" src="https://i.imgur.com/IRsUTtE.jpg" />
                                <div className="c-details px-3 d-flex flex-column">
                                    <h4 className="mb-0 text-white">Airbnb</h4>
                                    <h6 className="my-1 text-white">Homing</h6>
                                    <small className="text-white">
                                        <i class="fa fa-map-marker fa-sm" aria-hidden="true"></i>
                                        &nbsp;Los Angels,CA</small>

                                </div>

                            </div>
                            <div className="top-response side-btn-group-res">
                                <button className="btn btn-secondary btn-sm rounded-pill px-3">200 Following</button>
                                <button className="btn btn-secondary btn-sm rounded-pill px-3 mx-2">250 Followers</button>
                                <button className="btn btn-success btn-sm rounded-pill px-3">Update Profile</button>
                            </div>




                        </div>


                    </div>
                </div>
                <div className="spacer">&nbsp;</div>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-4 mx-auto">
                        <div className="card bg-dark-mode shadow-lg nearby-card-bg">
                            <div className="blue-area"></div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img className="calendar-top-img neg-margin-img text-center" src="https://i.imgur.com/IRsUTtE.jpg" />
                                    <h4 className="mt-2 mb-0 text-white">UI Designer</h4>
                                    <small className="primary-span">Bubbles Studio</small>

                                </div>

                                <small>
                                    <p align="justify" className="text-white my-3">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                                </small>

                                <small>
                                    <p className="text-white my-1"><i className="fa fa-star star-color-green"></i>&nbsp;
                                        Lorem ipsum.</p>
                                    <p className="text-white my-1"><i className="fa fa-star star-color-green"></i>&nbsp;
                                        Lorem ipsum.</p>
                                    <p className="text-white my-1"><i className="fa fa-star star-color-green"></i>&nbsp;
                                        Lorem ipsum.</p>
                                    <p className="text-white my-1"><i className="fa fa-star star-color-green"></i>&nbsp;
                                        Lorem ipsum.</p>
                                </small><br />
                                <small>
                                    <p className="my-1 text-white"><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;
                                        Machester England
                                    </p>
                                    <p className="my-1 text-white"><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;
                                        Machester England
                                    </p>
                                </small><br />
                                <div className="text-center">
                                    <button className="btn btn-success btn-sm rounded-pill px-3 mx-2">Apply Job</button>
                                    <button className="btn btn-secondary btn-sm rounded-pill px-3"><i class="fa fa-envelope"></i></button>


                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 mx-auto">
                        <h6 className="text-white" style={{ margin: 10 }}>About Position</h6>
                        <div className="border-0 about-position">

                            <h5 className="mt-2 mb-0">UI Designer</h5>
                            <small><i class="fa fa-map-marker star-color-green" aria-hidden="true"></i> San Francisco CA</small>
                            <p><small>2 days</small></p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 mx-auto">
                        <h6 className="text-white" style={{ margin: 10 }}>Time and Date</h6>
                        <div className="card rounded-10 p-3">
                            <span className='text-muted'>Thursday, October 7th, 2020</span>
                            <span className='text-muted mb-3'>4:00 pm To 5:00 pm</span>
                            <hr />
                            <div className="d-flex justify-content-between align-items-center">
                                <a className="section-link small-txt" href="" target="_blank">Contact Candidate</a>
                                <a className="section-link small-txt" href="" target="_blank">Cancel Meeting</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Application;