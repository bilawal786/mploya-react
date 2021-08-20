import React from 'react';
const RequestSchedule = () => {

    return (
        <>
            <div className="container my-container">
                <div className='text-center'>
                    <img src="https://i.imgur.com/IRsUTtE.jpg" alt="..." class="rounded-circle company-image"></img>
                    <h4 className="mt-3">Becky Nitrogen</h4>
                    <p className="text-muted m-0">Senior UX Designer, Ivanco.com</p>
                    <p className="text-muted m-0"><i class="fa fa-map-marker star-color-green" aria-hidden="true"></i> San Francisco CA</p>
                </div>
                <div className="round-container-wrapper">
                    <div className="text-center">
                        <h4 className="mt-3 color-green">Product Manager</h4>
                        <h5 className="text-muted m-0">Spotify</h5>
                        <p className="text-muted m-0"><i class="fa fa-map-marker star-color-green" aria-hidden="true"></i> San Francisco CA</p>
                        <button className="btn btn-success rounded-pill my-3 px-4">Watch Job Details</button>

                    </div>

                </div>

                <h5 style={{ margin: 15 }}>Time and Date</h5>
                <div className="round-container-wrapper">
                    <p className="text-muted m-0">Thursday, October 7th, 2020</p>
                    <p className="text-muted m-0">4:00 pm To 5:30 pm</p>
                    <hr />
                    <a className="section-link" href="default.asp" target="_blank">Contact the Event Owner</a>
                </div>

                <h5 style={{ margin: 15 }}>Messages</h5>
                <div className="row">
                    <div className="col-sm-9">
                        <div className="round-container-wrapper mt-0 mb-3">
                            <p className="text-muted m-0">Hello,</p>
                            <p className="text-muted m-0">Thanks for invitation etc...</p>
                            <hr />
                            <a className="section-link" href="default.asp" target="_blank">Go to Chat</a>
                        </div>


                    </div>
                    <div className="col-sm-3">
                        <button className="btn btn-success rounded-pill" style={{ width: '100%' }}><i class="fa fa-play"></i>&nbsp;Start Video Interview</button>

                    </div>

                </div>


                <div className="round-container-wrapper mb-2">
                    <div className='text-center'>
                        <img src="https://i.imgur.com/IRsUTtE.jpg" alt="..." class="rounded-circle company-image"></img>
                        <h4 className="mt-3">Airbnb</h4>
                        <p className="text-muted">Social Housing</p>
                    </div>
                    <hr />
                    <div className="card border-0">
                        <div className="d-flex flex-row align-items-center">
                            <img src="https://i.imgur.com/IRsUTtE.jpg" alt="..." class="map-image"></img>
                            <div className="c-details px-3 d-flex flex-column">
                                <span className="text-muted">888 bnn street</span>
                                <span className="text-muted">Sanfrancisco,California</span>
                                <span className="text-muted">90056 USA</span>

                            </div>

                        </div>
                        <hr />

                    </div>
                    <div className="text-center">
                        <a className="section-link text-center" href="default.asp" target="_blank">View Company Detail</a>

                    </div>

                </div>


            </div>


        </>
    );
}
export default RequestSchedule;