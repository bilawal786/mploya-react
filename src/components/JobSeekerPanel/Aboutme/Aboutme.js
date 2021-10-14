import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Aboutme/Aboutme.css';

const Aboutme = () => {
    const [jobSeeker, setJobSeeker] = useState('');
    const authId = localStorage.getItem('id');
    let token = localStorage.getItem('token');  

    useEffect(async () => {

        axios.get('https://mploya.com/api/single/jobseeker/' + authId, {
            headers: {
                authorization: 'Bearer ' + token,
                Accept: 'application/json',
            },
        }).then(response => {
            setJobSeeker(response.data);
            console.log(response.data);

        }).catch(error => {
            console.log(error);
        })
    }, [])

    const RenderSkills = (props) => {
        return (
            <div className="col-sm-4 col-md-4 col-lg-3 mx-auto mb-3">
                <div className="card rounded-10 bg-dark-mode p-4">
                    <strong className="text-white">Skills</strong>
                    <div className="mt-1 d-flex flex-wrap">
                        {jobSeeker.skill_name
                            ? jobSeeker.skill_name.map((skill) => {
                                return (
                                    <span className='rounded shadow-lg mt-2 px-2 bg-green text-white' style={{ marginRight: '5px' }}>{skill}</span>
                                )
                            }) 
                            : <small className='mt-2 text-white'>No Skill</small>
                        }

                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="container">

                <div className="collect">
                    <div className="cal-top-section px-4 pb-0">
                        <div className="card bg-transparent border-0">
                            <div className="top-response d-flex justify-content-between align-items-center">
                                <div className="d-flex flex-row">
                                    <img className="calendar-top-img text-center" src={"https://mploya.com/" + jobSeeker.image} />
                                    <div className="px-3 d-flex flex-column">
                                        <h4 className="mb-0 text-white text-capitalize">{jobSeeker.name}</h4>
                                        <h6 className="my-1 text-white text-capitalize">{jobSeeker.occupation ? jobSeeker.occupation : 'No Occupation'}</h6>
                                        <p className="text-white mt-0">
                                            <small><i class="fa fa-map-marker fa-sm" aria-hidden="true"></i>&nbsp;{jobSeeker.address ? jobSeeker.address : 'No Address'}</small>
                                        </p>

                                    </div>

                                </div>
                                <div className="mt-on-response">
                                    <button className="btn btn-secondary btn-sm rounded-pill">245 Following</button>
                                    <button className="btn btn-secondary btn-sm rounded-pill mx-2">872 Followers</button>
                                    <button className="btn btn-success btn-sm rounded-pill">Update Profile</button>
                                </div>



                            </div>


                        </div>
                    </div>
                    <div className="spacer">&nbsp;</div>
                </div>
                <div className="row">
                    <RenderSkills />
                    <div className="col-sm-8 col-md-8 col-lg-6 mb-3">
                        <div className="card rounded-10 bg-dark-mode p-4">
                            <strong className='text-white'>About Me</strong>
                            <p align="justify" className="my-3 text-white">It is the paragraph explaining
                                the decription of job
                                skills required and all neccessary information
                                It is the paragraph explaining the decription of job
                                skills required and all neccessary informationIt is
                                the paragraph explaining the decription of job
                                skills required and all neccessary informationIt
                            </p>
                            <strong className='text-white mb-3'>Contact</strong>

                            <div className="top-response-mob-left d-flex flex-row align-items-center">

                                <div className="d-flex flex-row align-items-center">
                                    <button className="btn btn-success rounded-circle"><i className="fa fa-phone"></i></button>

                                    <div className="px-3 d-flex flex-column">
                                        <small className="text-muted">Phone</small>
                                        <p className="text-white my-0 wrap-150">123456789</p>

                                    </div>

                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <button className="btn btn-success rounded-circle"><i className="fa fa-phone"></i></button>

                                    <div className="px-3 d-flex flex-column">
                                        <small className="text-muted">Email</small>
                                        <p className="text-white my-0 wrap-150">abc@yahoo.com</p>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 mx-auto mb-3">
                        <div className="card rounded-10 bg-dark-mode p-4">
                            <strong className="text-white">Socials</strong>
                            <div className="mt-4">
                                <button className="rounded-pill border-0 px-3 py-2 my-2 bg-dark-blueish w-100">
                                    <i className="fa fa-facebook-f text-primary"></i>
                                    <small className="mx-3 text-white"><b>/Airbnb</b></small>
                                </button>
                                <button className="rounded-pill border-0 px-3 py-2 my-2 bg-dark-berry w-100">
                                    <i className="fa fa-linkedin text-info"></i>
                                    <small className="mx-3 text-white"><b>/Airbnb</b></small>
                                </button>
                                <button className="rounded-pill border-0 px-3 py-2 my-2 bg-dark-light-red w-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram text-danger" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                    <small className="mx-3 text-white"><b>/Airbnb</b></small>
                                </button>
                                <button className="rounded-pill border-0 px-3 py-2 my-2 bg-dark-blueish w-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter text-primary" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                    <small className="mx-3 text-white"><b>/Airbnb</b></small>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                {/* <AboutmeEdit /> */}
            </div>
        </>
    );
}
export default Aboutme;