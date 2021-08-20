import React from 'react';
const Request = () => {

    return (
        <>
            <div className="container my-container">
                <div className='text-center'>
                    <img src="https://i.imgur.com/IRsUTtE.jpg" alt="..." class="rounded-circle company-image"></img>
                    <h4 className="mt-3">Becky Nitrogen</h4>
                    <p className="text-muted m-0">Senior UX Designer, Ivanco.com</p>
                    <p className="text-muted m-0"><i class="fa fa-map-marker star-color-green" aria-hidden="true"></i> San Francisco CA</p>
                </div>
                  
                <h5 style={{ margin: 15 }}>Request an Interview</h5>
                <div className="round-container-wrapper">
                    <h6>Title</h6>
                    <p className="text-muted">Meeting Title</p>
                    <hr/>
                    <h6>Message</h6>
                    <p className="text-muted">Leave your candidate a message.</p>
                </div>

                <h5 style={{ margin: 15 }}>Add Links</h5>
                <div className="round-container-wrapper">
                    <h6>Title</h6>
                    <p className="text-muted">Title</p>
                    <hr/>
                    <h6>Link URL</h6>
                    <a className="text-muted" href="https://www.google.com/">@https://www.google.com/</a>
                    
                </div> 
                <div className="round-container-wrapper">
                    <div className='text-center'>
                        <img src="https://i.imgur.com/IRsUTtE.jpg" alt="..." class="rounded-circle company-image"></img>
                        <h4 className="mt-3">Airbnb</h4>
                        <p className="text-muted">Social Housing</p>
                    </div>
                    <hr/>
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
                        <a className="section-link" href="default.asp" target="_blank">View Company Detail</a>

                    </div>

                </div>
                <div className="text-center my-3">
                    <button className="btn btn-success rounded-pill px-4">Send Request</button>
                </div>
                
                 
            </div>


        </>
    );
}
export default Request;