import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import Axios from "axios";


const DashboardProfile = () => {
    let history = useHistory();
    const [jobseeker, setjobseeker] = useState('');
    const authId = localStorage.getItem('id');
    let token = localStorage.getItem('token');

    useEffect(async () => {

        try {
            const res = await Axios({
                method: 'GET',
                url: 'https://mploya.com/api/single/jobseeker/' + authId,
                headers: {
                    authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                },
            });

            setjobseeker(res.data);
            console.log(res.data);

        } catch (error) {

            console.log(error);
        }

    }, [])

    return (
        <>
            <div className="top-response d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                    <img className="calendar-top-img text-center" src={jobseeker.image ? "https://mploya.com/" + jobseeker.image : "https://i.imgur.com/IRsUTtE.jpg"} alt="pic" />
                    <div className="px-2 d-flex flex-column">
                        <strong className="text-white">{jobseeker.name}</strong>
                        <small className="color-green">{jobseeker.occupation}</small>
                        <p className="text-muted">
                            <small><i class="fa fa-map-marker fa-sm" aria-hidden="true"></i>&nbsp;{jobseeker.address}</small>
                        </p>

                    </div>

                </div>
                <NavLink exact to="/jobseeker/profile" className="btn btn-success btn-sm px-3 my-2 rounded-pill">Update Profile</NavLink>


            </div>
            <div className="d-flex flex-row">
                {
                    jobseeker.skill_name ? jobseeker.skill_name.map((row1, index) => (
                        <strong key={index} className="text-white mt-4 mx-2">{row1}</strong>
                    )) : <strong className="text-white mt-4 mx-2">skills</strong>

                }

            </div>

        </>
    );
}
export default DashboardProfile;