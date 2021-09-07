import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from "axios";
const AvailableForYou = () => {


    const [jobs, setJobs] = useState([])
    let token = localStorage.getItem('token');

    useEffect(async () => {

        try {
            const res = await Axios({
                method: 'GET',
                url: 'https://mploya.com/api/all/jobs',
                headers: {
                    authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                },
            });
            if (res.status === 200) {
                setJobs(res.data);
            }


        } catch (error) {

            console.log(error);
        }

    }, [])
    return (
        <>
            <div className="top-response d-flex flex-row justify-content-between align-items-center">
                <strong className="my-1 text-white">Available Jobs For You</strong>
                <div className="my-1">
                    <button type="button" class="btn btn-outline-success btn-sm rounded-pill px-3 mx-3">Newest</button>
                    {/* <button className="border-0 bg-transparent text-white"><i class="fa fa-ellipsis-v"></i></button> */}
                </div>
            </div>
            <div className="row mt-2">
                {
                    jobs.slice(0, 4).map((row) => (
                        <AFYCard
                            imgSource={row.employer_image ? "https://mploya.com/" + row.employer_image : 'https://i.imgur.com/IRsUTtE.jpg'}
                            title={row.job_title}
                            subtitle={row.company_name}
                            location={row.employer_address}
                            range={row.currencySymbol + " " + Math.round(row.min_salary) + "-" + Math.round(row.max_salary)}
                        />
                    ))
                }
            </div>

            <div className="text-center mt-3">
                <NavLink exact to="/jobseeker/nearby" type="button" class="btn btn-outline-success btn-sm rounded-pill px-4">View More</NavLink>
            </div>
        </>
    );
}
export default AvailableForYou;

function AFYCard(props) {
    return (
        <>
            <div className="col-sm-6 rounded my-3">
                <div className="card shadow-lg nearby-card-dark">
                    <div className="card-body">
                        <div className="text-center">
                            <img className="icon-img text-center mb-2" src={props.imgSource} alt="pic" /><br />
                            <strong className="text-white">{props.title}</strong><br />
                            <small className="primary-span">{props.subtitle}</small>
                        </div>
                        <strong>
                            <small className="small-txt text-muted"><i class="fa fa-map-marker fa-sm" aria-hidden="true"></i>&nbsp;{props.location}</small>
                            <small className="small-txt text-muted">{props.range}</small>
                        </strong>
                    </div>
                </div>
            </div>
        </>

    );

}

