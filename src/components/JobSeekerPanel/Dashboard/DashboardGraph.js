import React from 'react';
const DashboardGraph = () => {

    return (
        <>

            <div className="d-flex">
                <div className="w-50 text-white">
                    <div className="d-flex flex-row align-items-center my-2">
                        <h4 className="text-white my-0"><strong>342</strong></h4>
                        <small className="color-green mx-2">+0.5%</small>
                    </div>
                    <small className="text-muted">Interview Schedules</small>
                </div>
                <div className="w-50 text-white">
                    <div className="d-flex flex-row align-items-center my-2">
                        <h4 className="text-white my-0"><strong>984</strong></h4>
                        <small className="color-green mx-2">+2.3%</small>
                    </div>
                    <small className="text-muted">Application Sent</small>
                </div>

            </div>
            <hr className="text-secondary"/> 
            <div className="d-flex">
                <div className="w-50 text-white">
                    <div className="d-flex flex-row align-items-center my-2">
                        <h4 className="text-white my-0"><strong>15k</strong></h4>
                        <small className="text-danger mx-2">-1.5%</small>
                    </div>
                    <small className="text-muted">Profile Viewed</small>
                </div>
                <div className="w-50 text-white">
                    <div className="d-flex flex-row align-items-center my-2">
                        <h4 className="text-white my-0"><strong>435</strong></h4>
                        <small className="color-green mx-2">+1%</small>
                    </div>
                    <small className="text-muted">Unread messages</small>
                </div>

            </div>


        </>
    );
}
export default DashboardGraph;