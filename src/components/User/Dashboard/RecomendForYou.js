import React from 'react';

const RecomendForYou = (props) => {

    return (
        <>
            <div className="top-response d-flex flex-row justify-content-between align-items-center">
                <strong className="my-1">Recommended For You</strong>
                <div className="my-1">
                    <button type="button" class="btn btn-outline-success btn-sm rounded-pill px-3 mx-3">Newest</button>
                    {/* <button className="border-0 bg-transparent"><i class="fa fa-ellipsis-v"></i></button> */}
                </div>
            </div>


            {props.data.slice(0, 4).map((row) => (

                <div className="aboutme-round-sm mt-4 p-3">
                    <div div className="d-flex flex-row align-items-center" >
                        <img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />

                        <div className="px-3 d-flex flex-column">
                            <small><strong>{row.name}</strong></small>
                            <small className="text-muted">{row.occupation}</small>
                            <small>
                                <p className="text-muted m-0"><i class="fa fa-map-marker fa-sm star-color-green" aria-hidden="true"></i>&nbsp;{row.address}</p>
                            </small>
                        </div>

                    </div>
                    <div className="top-response d-flex flex-row justify-content-between align-items-center">


                        <div className="mt-2" >
                            {row.skill_name.map((row1, i) => (
                                <small className="rounded text-muted px-1 bg-yellowish mx-2">{row1}</small>
                            ))}
                        </div>
                        <a className="section-link mt-2" href="#" >View Profile</a>

                    </div>
                </div>
            ))
            }


        </>
    );
}
export default RecomendForYou;

