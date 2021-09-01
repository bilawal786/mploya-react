import React from 'react';

const FeaturedCompany = () => {

    return (
        <>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <strong className="m-0 text-white">Featured Comapny</strong>
                <button className="border-0 bg-transparent text-white"><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </button>

            </div>
            <div className="row mt-3 align-items-center top-response">
                <div className="col-6 my-3 w-100-mob">
                    <div className="d-flex flex-row align-items-center">
                        <img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />

                        <div className="px-3 d-flex flex-column">
                            <small className="text-white"><strong>Graphic</strong></small>
                            <small className="text-muted">Mobile</small>
                        </div>

                    </div>
                </div>
                <div className="col-6 my-3 w-100-mob">
                    <div className="d-flex flex-row align-items-center">
                        <img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />

                        <div className="px-3 d-flex flex-column">
                            <small className="text-white"><strong>Graphic</strong></small>
                            <small className="text-muted">Mobile</small>
                        </div>

                    </div>
                </div>
                <div className="col-6 my-3 w-100-mob">
                    <div className="d-flex flex-row align-items-center">
                        <img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />

                        <div className="px-3 d-flex flex-column">
                            <small className="text-white"><strong>Graphic</strong></small>
                            <small className="text-muted">Mobile</small>
                        </div>

                    </div>
                </div>
                <div className="col-6 my-3 w-100-mob">
                    <div className="d-flex flex-row align-items-center">
                        <img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />

                        <div className="px-3 d-flex flex-column">
                            <small className="text-white"><strong>Graphic</strong></small>
                            <small className="text-muted">Mobile</small>
                        </div>

                    </div>
                </div>

            </div>
            <div className="text-center mt-3">
                <button type="button" class="btn btn-outline-success btn-sm rounded-pill px-4">View More</button>
            </div>




        </>
    );
}
export default FeaturedCompany;