import React from 'react';

const RecomendForYou = () => {

    return (
        <>
            <div className="top-response d-flex flex-row justify-content-between align-items-center">
                <strong className="my-1">Recommended For You</strong>
                <div className="my-1">
                    <button type="button" class="btn btn-outline-success btn-sm rounded-pill px-3 mx-3">Newest</button>
                    <button className="border-0 bg-transparent"><i class="fa fa-ellipsis-v"></i></button>  
                </div>
            </div>

            <div className="aboutme-round-sm mt-4 p-3">
                <div className="d-flex flex-row align-items-center">
                    <img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />

                    <div className="px-3 d-flex flex-column">
                        <small><strong>Becky Nitrogen</strong></small>
                        <small className="text-muted">Backend Developer</small>
                        <small>
                            <p className="text-muted m-0"><i class="fa fa-map-marker fa-sm star-color-green" aria-hidden="true"></i> 11 km away</p>
                        </small>
                    </div>

                </div>
                <div className="top-response d-flex flex-row justify-content-between align-items-center">
                    <div className="mt-2">
                        <small className="rounded text-muted px-1 bg-blueish">Photoshop</small>
                        <small className="rounded text-muted px-1 bg-yellowish mx-3">Html</small>
                        <small className="rounded text-muted px-1 bg-redish">UI/UX</small>  
                    </div> 
                    <a className="section-link mt-2" href="default.asp" target="_blank">View Profile</a>

                </div>
                


            </div>





        </>
    );
}
export default RecomendForYou;