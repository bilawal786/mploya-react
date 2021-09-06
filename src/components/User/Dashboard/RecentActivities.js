import React from 'react';

const RecentActivities = () => {

    return (
        <>
            <div className="top-response d-flex flex-row justify-content-between align-items-center">
                <strong className="my-1">Recent Activities</strong>
                <div className="my-1">
                    <button type="button" class="btn btn-outline-success btn-sm rounded-pill px-3 mx-3">Newest</button>
                    {/* <button className="border-0 bg-transparent"><i class="fa fa-ellipsis-v"></i></button> */}
                </div>
            </div>
            <br />
            <div className="d-flex flex-row align-items-center">

                <img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />

                <div className="mx-3 d-flex flex-column">
                    <small><strong>Graphic Graphic Gr Graphic</strong></small>
                    <small className="text-muted">Mobile</small>
                </div>

            </div>

            <div className="text-center mt-3">
                <button type="button" class="btn btn-outline-success btn-sm rounded-pill px-4">View More</button>
            </div>


        </>
    );
}
export default RecentActivities;