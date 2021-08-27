import React from 'react';
import '../Calendar/Calendar.css';

const Calendar = () => {

    return (
        <>
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
                        <button className="btn btn-success btn-sm rounded-pill"><i class="fa fa-play"></i>&nbsp;Start Video Interview</button>



                    </div>


                </div>
            </div>
            <div className="spacer">&nbsp;</div>
            <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-4 mx-auto">
                    <div className="card shadow nearby-card-bg">
                        <div className="blue-area"></div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="nearby-icon-img-bg neg-margin-img text-center" src="https://i.imgur.com/IRsUTtE.jpg" />
                                <h4 className="mt-2 mb-0">UI Designer</h4>
                                <small className="primary-span">Bubbles Studio</small>

                            </div>

                            <small>
                                <p align="justify" className="text-muted">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                            </small>

                            <small>
                                <p className="text-muted my-0"><i className="fa fa-star star-color-green"></i>&nbsp;
                                    Lorem ipsum.</p>
                                <p className="text-muted my-0"><i className="fa fa-star star-color-green"></i>&nbsp;
                                    Lorem ipsum.</p>
                                <p className="text-muted my-0"><i className="fa fa-star star-color-green"></i>&nbsp;
                                    Lorem ipsum.</p>
                                <p className="text-muted my-0"><i className="fa fa-star star-color-green"></i>&nbsp;
                                    Lorem ipsum.</p>
                                <p className="mt-2 mb-0"><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;
                                    Machester England
                                </p>
                                <p><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;
                                    Machester England
                                </p>
                            </small>
                            <div className="text-center">

                                <p className="mb-0"><strong className="text-success">Becky Nitrogen</strong></p>
                                <p className="text-muted m-0">Senior UX Designer</p>
                                <small>
                                    <p className="text-muted m-0"><i class="fa fa-map-marker star-color-green" aria-hidden="true"></i> San Francisco CA</p>
                                </small>

                                <button className="btn btn-success btn-sm rounded-pill my-3">See Candidate Profile</button>



                            </div>


                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 mx-auto">
                    <h6 style={{ margin: 10 }}>About Position</h6>
                    <div className="border-0 about-position">

                        <h5 className="mt-2 mb-0">UI Designer</h5>
                        <small><i class="fa fa-map-marker star-color-green" aria-hidden="true"></i> San Francisco CA</small>
                        <p><small>2 days</small></p>





                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 mx-auto">
                    <h6 style={{ margin: 10 }}>Date and Time</h6>
                    <div className="round-container-wrapper my-0">
                        <p className="text-muted m-0">Thursday, October 7th, 2020</p>
                        <p className="text-muted m-0">4:00 pm To 5:30 pm</p>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                            <a className="section-link my-0" href="default.asp" target="_blank">Contact Candidate</a>
                            <a className="section-link my-0" href="default.asp" target="_blank">Cancel Meeting</a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Calendar;