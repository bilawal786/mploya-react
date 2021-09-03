import React from 'react';

const DashboardProfile = () => {

    return (
        <>
            <div className="top-response d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                    <img className="calendar-top-img text-center" src="https://i.imgur.com/IRsUTtE.jpg" />
                    <div className="px-2 d-flex flex-column">
                        <strong className="text-white">Airbnb</strong>
                        <small className="color-green">UI UX Designer</small>
                        <p className="text-muted">
                            <small><i class="fa fa-map-marker fa-sm" aria-hidden="true"></i>&nbsp;Los Angels, CA</small>
                        </p>

                    </div>

                </div>
                <button className="btn btn-success btn-sm px-3 my-2 rounded-pill">Update Profile</button>


            </div>
            <strong className="text-white mt-4">Skills</strong>
        </>
    );
}
export default DashboardProfile;