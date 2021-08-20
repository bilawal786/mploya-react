import React from 'react';
const Calendar = () => {

    return (
        <>
            <div className="container my-container">
                <div className='text-center'>
                    <img src="https://i.imgur.com/IRsUTtE.jpg" alt="..." class="rounded-circle company-image"></img>
                    <h4 className="mt-3">Becky Nitrogen</h4>
                    <p className="text-muted m-0">Senior UX Designer, Ivanco.com</p>
                    <p className="text-muted m-0"><i class="fa fa-map-marker star-color-green" aria-hidden="true"></i> San Francisco CA</p>
                </div>
                <div className="row my-5">
                    <div className="col-sm-12 col-md-6">Date</div>
                    <div className="col-sm-12 col-md-6">Calendar</div>
                </div>
                <h5 className="text-center">Future Events</h5>
                <div className="round-container-wrapper">
                    <div className="card border-0">
                        <div className="d-flex flex-row align-items-center">
                            <div className="d-flex flex-column align-items-center">
                                <p className="mb-0">Oct</p>
                                <h3><b>5</b></h3> 
                            </div>
                            <div className="mx-3 w-100">
                                <h6 className="description-heading">Interview at Spotify</h6>
                                <p className="description-text">Product Manager Position</p>
                                <hr />
                                <p className="text-muted text-center"><i class="fa fa-map-marker star-color-green" aria-hidden="true"></i> Mploya Meeting Room</p>

                            </div>

                        </div>


                    </div>

                </div>

                <div className="round-container-wrapper mb-4">
                    <div className="card border-0">
                        <div className="d-flex flex-row align-items-center">
                            <div className="d-flex flex-column align-items-center">
                                <p className="mb-0">Aug</p>
                                <h3><b>21</b></h3>
                            </div>
                            <div className="mx-3 w-100"> 
                                <h6 className="description-heading">Interview at Airbnb</h6>
                                <p className="description-text">Manager Position</p>
                                <hr />
                                <p className="text-muted text-center"><i class="fa fa-map-marker star-color-green" aria-hidden="true"></i> Lahore</p>

                            </div>

                        </div>


                    </div>

                </div>




            </div>

        </>
    );
}
export default Calendar;