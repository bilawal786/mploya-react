import React from 'react';
const CompanyDetail = () => {

    return (
        <>
            <div className='container my-container'>
                <div className='text-center'>
                    <img src="https://i.imgur.com/IRsUTtE.jpg" alt="..." class="rounded-circle company-image"></img>
                    <h4 className="my-3">Airbnb</h4>
                    <p className="text-muted"><i class="fa fa-map-marker star-color-green" aria-hidden="true"></i> San Francisco CA</p>
                </div>
                <div className="button-contact-wrapper">
                    <button className="btn btn-success rounded-pill px-4 mx-2">Request an interview</button>
                    <button type="button" class="btn btn-default btn-circle shadow-bg"><i class="fa fa-envelope"></i></button>
                </div>
                <br /><br />
                <h5 style={{ margin: 15 }}>About</h5>
                <div className="round-container-wrapper">
                    <p className="text-muted">Airbnb is an online marketplace that connects people who want to rent out their homes
                    with people who are looking for accommodations in that locale.
                        <span class="collapse" id="viewdetails3"> Donec id elit non mi porta gravida at eget metus.
                        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
                        justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                        </span> <a data-toggle="collapse" data-target="#viewdetails3">More...</a>
                    </p>
                </div>
                <h5 style={{ margin: 15 }}>Open Positions</h5>
                <div className="round-container-wrapper">
                    <h6>Principle and Lead UX Engineer</h6>
                    <p className="text-muted">Airbnb is an online marketplace that connects people who want to rent out their homes
                    with people who are looking for accommodations in that locale.
                        <span class="collapse" id="viewdetails3"> Donec id elit non mi porta gravida at eget metus.
                        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
                        justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                        </span> <a data-toggle="collapse" data-target="#viewdetails3">More...</a>
                    </p>
                </div>
                <div className="round-container-wrapper">
                    <h6>Principle and Lead UX Engineer</h6>
                    <p className="text-muted">Airbnb is an online marketplace that connects people who want to rent out their homes
                    with people who are looking for accommodations in that locale.
                        <span class="collapse" id="viewdetails3"> Donec id elit non mi porta gravida at eget metus.
                        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
                        justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                        </span> <a data-toggle="collapse" data-target="#viewdetails3">More...</a>
                    </p>
                </div>
                <h5 style={{ margin: 15 }}>Address</h5>
                <div className="round-container-wrapper">
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
                        <a className="section-link text-center" href="default.asp" target="_blank">airbnb.com</a>

                    </div>

                </div>

            </div>





        </>
    );
}
export default CompanyDetail;