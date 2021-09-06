import React from 'react';
import { NavLink } from "react-router-dom";
const DashboardNearby = (props) => {






    return (
        <>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <strong className="m-0">Near by Employee</strong>
                {/* <button className="border-0 bg-transparent"><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </button> */}

            </div>
            <div className="row mt-3 align-items-center top-response">

                {props.data.slice(0, 8).map((row) => (
                    <NBECard key={row.id} image={row.image} phone={row.phone} name={row.name} >
                    </NBECard>
                ))}

            </div>
            <div className="text-center mt-3">
                <NavLink exact to="/nearby" class="btn btn-outline-success btn-sm rounded-pill px-4">View More</NavLink>
            </div>




        </>
    );
}
export default DashboardNearby;

function NBECard(props) {

    return (
        <>
            <div className="col-6 my-3 w-100-mob" >
                <div className="d-flex flex-row align-items-center">
                    <img class="icon-img" src={props.image ? "https://mploya.com/" + props.image : "https://i.imgur.com/IRsUTtE.jpg"} alt="pic" />
                    <div className="px-3 d-flex flex-column">
                        <small><strong>{props.name}</strong></small>
                        <small className="text-muted">{props.phone}</small>
                    </div>

                </div>
            </div>
        </>
    )
};