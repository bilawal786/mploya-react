import React from 'react';

const DashboardProfile = () => {

    return (
        <>
            <div className="top-response d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                    <img className="calendar-top-img text-center" src="https://i.imgur.com/IRsUTtE.jpg" />
                    <div className="px-2 d-flex flex-column">
                        <strong>Airbnb</strong>
                        <small className="color-green">UI UX Designer</small>
                        <p className="text-muted">
                            <small><i class="fa fa-map-marker fa-sm" aria-hidden="true"></i>&nbsp;Los Angels, CA</small>
                        </p>

                    </div>

                </div>
                <button className="btn btn-success btn-sm px-3 my-2 rounded-pill">Update Profile</button>


            </div>

            <strong className="m-3">About</strong>
            <div className="aboutme-round-sm p-3 mb-4">
                <p align="justify" className="text-muted">Airbnb is an online marketplace that connects people who want to rent out their homes
                    with people who are looking for accommodations in that locale.
                </p>
            </div>



            <div className="d-flex flex-row justify-content-center align-items-center">
                <button className="btn btn-success rounded-circle"><i className="fa fa-play"></i></button>
                <strong className="mx-2">Watch <span className="text-success">Airbnb</span> <br /> Introduction Video</strong>
            </div>


            <strong className="m-3">What we do</strong>
            <div className="aboutme-round-sm p-3 mb-3">
                <div className="d-flex flex-row align-items-center">
                    <img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />

                    <div className="px-3 d-flex flex-column">
                        <small><strong>Graphic Designer</strong></small>
                        <small className="text-muted">Design and maintain</small>
                        <small className="text-muted">Mobile</small>
                    </div>

                </div>


            </div>
            <div className="aboutme-round-sm p-3">
                <div className="d-flex flex-row align-items-center">
                    <img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />

                    <div className="px-3 d-flex flex-column">
                        <small><strong>Graphic Designer</strong></small>
                        <small className="text-muted">Design and maintain</small>
                        <small className="text-muted">Mobile</small>
                    </div>

                </div>


            </div>

        </>
    );
}
export default DashboardProfile;