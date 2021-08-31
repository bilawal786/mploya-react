import React from 'react';
import '../Aboutme/Aboutme.css';

const Aboutme = () => {

    return (
        <>
            <div className="cal-top-section px-4 pb-0">
                <div className="card bg-transparent border-0">
                    <div className="top-response d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row">
                            <img className="calendar-top-img text-center" src="https://i.imgur.com/IRsUTtE.jpg" />
                            <div className="px-3 d-flex flex-column">
                                <h4 className="mb-0 text-white">Airbnb</h4>
                                <h6 className="my-1 text-white">Homing</h6> 
                                <p className="text-white">
                                    <small><i class="fa fa-map-marker fa-sm" aria-hidden="true"></i>&nbsp;Los Angels, CA</small>
                                </p>

                            </div>

                        </div>
                        <div>
                            <button className="btn btn-secondary btn-sm rounded-pill px-4">Post Job</button>
                            <button className="btn btn-success btn-sm rounded-pill mx-2">Update Profile</button>
                        </div>



                    </div>


                </div>
            </div>
            <div className="spacer">&nbsp;</div>
            <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <strong>About Me</strong>
                    <p align="justify" className="my-3 text-muted">It is the paragraph explaining the decription of job
                        skills required and all neccessary information
                        It is the paragraph explaining the decription of job
                        skills required and all neccessary informationIt is
                        the paragraph explaining the decription of job
                        skills required and all neccessary informationIt is the paragraph explaining the decription of job
                        skills required and all neccessary information</p>

                    <strong>What we do</strong>
                    <div className="aboutme-round-sm p-3 my-3">
                        <div className="d-flex flex-row align-items-center">
                            <img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />

                            <div className="c-details px-3 d-flex flex-column">
                                <h5 className="mb-0">Graphic Designer</h5>
                                <small className="text-muted">Design and maintain</small>
                                <small className="text-muted">Mobile</small>
                            </div>

                        </div>


                    </div>
                    <div className="aboutme-round-sm p-3 my-3">
                        <div className="d-flex flex-row align-items-center">
                            <img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />

                            <div className="c-details px-3 d-flex flex-column">
                                <h5 className="mb-0">Graphic Designer</h5>
                                <small className="text-muted">Design and maintain</small>
                                <small className="text-muted">Mobile</small>
                            </div>

                        </div>


                    </div>


                </div>

                <div className="col-sm-2 col-md-2 col-lg-3"></div>
                <div className="col-sm-4 col-md-4 col-lg-3">
                    <strong>Socials</strong>
                    <div className="my-3">
                        <button className="rounded-pill border-0 px-3 py-2 mb-2 bg-blueish w-100"><i className="fa fa-facebook-f"></i>&ensp;/Airbnb</button>
                        <button className="rounded-pill border-0 px-3 py-2 mb-2 bg-berry w-100"><i className="fa fa-linkedin"></i>&ensp;/Airbnb</button>
                        <button className="rounded-pill border-0 px-3 py-2 mb-2 bg-light-red w-100"><i className="fa fa-youtube"></i>&ensp;/Airbnb</button>
                        <button className="rounded-pill border-0 px-3 py-2 mb-2 bg-redish w-100"><i className="fa fa-youtube"></i>&ensp;/Airbnb</button>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Aboutme;