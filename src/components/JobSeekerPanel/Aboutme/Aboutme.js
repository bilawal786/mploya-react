import React, { useState, useEffect } from 'react';
import ReactStars from "react-rating-stars-component";
import axios from 'axios';
import '../Aboutme/Aboutme.css';
import ApiSpinner from '../../ApiSpinner';

const Aboutme = () => {
    const [jobSeeker, setJobSeeker] = useState('');
    const authId = localStorage.getItem('id');
    let token = localStorage.getItem('token');
    const [loading, setLoading] = useState(true);
    const [contentShow, setContentShow] = useState(false);

    useEffect(async () => {
        axios.get('https://mploya.com/api/single/jobseeker/' + authId, {
            headers: {
                authorization: 'Bearer ' + token,
                Accept: 'application/json',
            },
        }).then(response => {
            setJobSeeker(response.data);
            console.log(response.data);
            setLoading(false);
            setContentShow(true);

        }).catch(error => {
            setLoading(false);
            console.log(error);
        })
    }, [])

    const RenderTopSection = (props) => {
        return (
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
                                <button className="btn btn-success btn-sm rounded-pill">Update Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer">&nbsp;</div>
            </div>
        )
    }
    const RenderSkills = (props) => {
        return (
            <div className="card rounded-10 bg-dark-mode p-4">
                <strong className="text-white">Skills</strong>
                <div className="mt-1 d-flex flex-wrap">
                    {jobSeeker.skill_name.length > 0
                        ? jobSeeker.skill_name.map((skill) => {
                            return (
                                <span className='rounded shadow-lg mt-2 px-2 bg-green text-white' style={{ marginRight: '5px' }}>{skill}</span>
                            )
                        })
                        : <span className='mt-2 text-white'>No Skill</span>
                    }

                </div>
            </div>
        );
    }
    const RenderLanguages = (props) => {
        return (
            <div className="card rounded-10 bg-dark-mode p-4 mt-4">
                <strong className="text-white">Languages</strong>
                <div className="mt-1 d-flex flex-wrap">
                    {jobSeeker.language.length > 0
                        ? jobSeeker.language.map((item) => {
                            return (
                                <span className='rounded shadow-lg mt-2 px-2 bg-green text-white' style={{ marginRight: '5px' }}>{item}</span>
                            )
                        })
                        : <span className='mt-2 text-white'>No Language</span>
                    }

                </div>
            </div>
        );
    }
    const RenderSocialLinks = (props) => {
        return (
            <div className="card rounded-10 bg-dark-mode p-4">
                <strong className="text-white">Socials</strong>
                <div className="mt-4">
                    <button className="rounded-pill border-0 px-3 py-2 my-2 bg-dark-blueish w-100 text-white text-truncate">
                        <i className="fa fa-facebook-f text-primary"></i>
                        <small className="mx-3"><b>/{jobSeeker.facebook_link ? jobSeeker.facebook_link : 'No Facebook Link'}</b></small>
                    </button>
                    <button className="rounded-pill border-0 px-3 py-2 my-2 bg-dark-berry w-100 text-white text-truncate">
                        <i className="fa fa-linkedin text-info"></i>
                        <small className="mx-3"><b>/{jobSeeker.linkedin_link ? jobSeeker.linkedin_link : 'No Linkid Link'}</b></small>
                    </button>
                    <button className="rounded-pill border-0 px-3 py-2 my-2 bg-dark-light-red w-100 text-white text-truncate">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram text-danger" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg>
                        <small className="mx-3"><b>/{jobSeeker.instagram_link ? jobSeeker.instagram_link : 'No Instagram Link'}</b></small>
                    </button>
                    <button className="rounded-pill border-0 px-3 py-2 my-2 bg-dark-blueish w-100 text-white text-truncate">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter text-primary" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                        <small className="mx-3"><b>/{jobSeeker.twitter_link ? jobSeeker.twitter_link : 'No Twitter Link'}</b></small>
                    </button>
                </div>
            </div>
        )
    }
    const RenderAboutMeDetail = (props) => {
        return (
            <div className="card rounded-10 bg-dark-mode p-4">
                <div className='d-flex flex-wrap justify-content-between align-items-center'>
                    <strong className='text-white'>About Me</strong>
                    <ReactStars
                        count={5}
                        value={jobSeeker.fiveStarScore}
                        isHalf={true}
                        edit={false}
                        size={18}
                        activeColor="#067d1f"
                    />
                </div>
                <p align="justify" className="my-3 text-white">
                    {jobSeeker.description ? jobSeeker.description : 'No Description Available'}
                </p>
                <p align="justify" className="text-white">It is the paragraph explaining
                    the decription of job
                    skills required and all neccessary information
                    It is the paragraph explaining the decription of job
                    skills required and all neccessary informationIt is
                    the paragraph explaining the decription of job
                    skills required and all neccessary informationIt
                </p>
                <strong className='text-white mb-3'>Contact</strong>

                <div className="top-response-mob-left d-flex flex-wrap align-items-center">

                    <div className="d-flex flex-row align-items-center">
                        <button className="btn btn-success rounded-circle"><i className="fa fa-phone"></i></button>

                        <div className="px-3 d-flex flex-column">
                            <small className="text-muted">Phone</small>
                            <p className="text-white my-0">{jobSeeker.phone ? jobSeeker.phone : 'Not Available'}</p>
                        </div>
                    </div>

                    <div className="d-flex flex-row align-items-center">
                        <button className="btn btn-success rounded-circle"><i className="fa fa-phone"></i></button>

                        <div className="px-3 d-flex flex-column">
                            <small className="text-muted">Email</small>
                            <p className="text-white my-0">{jobSeeker.email ? jobSeeker.email : 'Not Available'}</p>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const RenderTabs = (props) => {
        const [selectType, setSelectType] = useState(1);
        const buttons = [
            {
                id: 1,
                title: 'About'
            },
            {
                id: 2,
                title: 'Experience'
            },
            {
                id: 3,
                title: 'Work'
            },
            {
                id: 4,
                title: 'Education'
            },
        ]

        return (
            <div className="card rounded-10 bg-dark-mode p-4">

                <div className='tab-btn-wrapper mb-4'>
                    {
                        buttons.map(e => (
                            <button
                                key={e.id}
                                className={selectType == e.id ? 'btnSelectedStyle' : 'btnStyle'}
                                onClick={() => { setSelectType(e.id) }}
                            >{e.title}</button>
                        ))
                    }
                </div>
                {selectType === 1 ? <AboutTab /> : null}
                {selectType === 2 ? <ExperienceTab /> : null}
                {selectType === 3 ? <WorkTab /> : null}
                {selectType === 4 ? <EducationTab /> : null}
            </div>
        )
    }
    const AboutTab = (props) => {
        return (
            <>
                <div className='d-flex flex-wrap justify-content-between align-items-center'>
                    <strong className='text-white'>About Me</strong>
                    <ReactStars
                        count={5}
                        value={jobSeeker.fiveStarScore}
                        isHalf={true}
                        edit={false}
                        size={18}
                        activeColor="#067d1f"
                    />
                </div>
                <p align="justify" className="my-3 text-white">
                    {jobSeeker.description ? jobSeeker.description : 'No Description Available'}
                </p>
                <p align="justify" className="text-white">It is the paragraph explaining
                    the decription of job
                    skills required and all neccessary information
                    It is the paragraph explaining the decription of job
                    skills required and all neccessary informationIt is
                    the paragraph explaining the decription of job
                    skills required and all neccessary informationIt
                </p>
                <strong className='text-white mb-3'>Contact</strong>

                <div className="top-response-mob-left d-flex flex-wrap align-items-center">

                    <div className="d-flex flex-row align-items-center">
                        <button className="btn btn-success rounded-circle"><i className="fa fa-phone"></i></button>

                        <div className="px-3 d-flex flex-column">
                            <small className="text-muted">Phone</small>
                            <p className="text-white my-0">{jobSeeker.phone ? jobSeeker.phone : 'Not Available'}</p>
                        </div>
                    </div>

                    <div className="d-flex flex-row align-items-center">
                        <button className="btn btn-success rounded-circle"><i className="fa fa-phone"></i></button>

                        <div className="px-3 d-flex flex-column">
                            <small className="text-muted">Email</small>
                            <p className="text-white my-0">{jobSeeker.email ? jobSeeker.email : 'Not Available'}</p>

                        </div>
                    </div>
                </div>
            </>
        )
    }
    const ExperienceTab = (props) => {
        return (
            <>
                <strong className='text-white'>Experience Detail</strong>
                <section className='card shadow-lg p-3 mt-3 border-0 rounded-10' style={{ backgroundColor: 'rgb(32, 39, 60)' }}>
                    <div className='d-flex flex-wrap justify-content-between'>
                        <small className='text-white'>Project Name: <span className='color-green'>Djkon</span></small>
                        <small className='text-white'>Status: <span className='color-green'>Completed</span></small>
                    </div>
                    <small className='d-block text-white'>Role: <span className='color-green'>Project Manager</span></small>
                    <small className='d-block text-white'>Project Link: <a className='color-green' target='_blank' href='https://www.google.com/'>www.google.com</a></small>
                    <small className='d-block text-white'>Start at: <span className='color-green'>14/12/2021</span></small>
                    <small className='d-block text-white'>End at: <span className='color-green'>14/12/2021</span></small>

                    <small className='d-block color-green mt-3'>Description: </small>
                    <small className='text-white'>detail about experience etc...</small>

                </section>
            </>
        )
    }
    const WorkTab = (props) => {
        return (
            <>
                <strong className='text-white'>Work Detail</strong>
                <section className='card shadow p-3 mt-3 border-0 rounded-10' style={{ backgroundColor: 'rgb(32, 39, 60)' }}>
                    <div className='d-flex flex-wrap justify-content-between'>
                        <small className='text-white'>Work Name: <span className='color-green'>Developer</span></small>
                        <small className='text-white'>Status: <span className='color-green'>Completed</span></small>
                    </div>
                    <small className='d-block text-white'>Company Name: <span className='color-green'>Y4k Tech</span></small>
                    <small className='d-block text-white'>Company Address: <span className='color-green'>Wapda Town</span></small>
                    <small className='d-block text-white'>Start at: <span className='color-green'>14/12/2021</span></small>
                    <small className='d-block text-white'>End at: <span className='color-green'>14/12/2021</span></small>

                    <small className='d-block color-green mt-3'>Description: </small>
                    <small className='text-white'>detail about work etc...</small>

                </section>
            </>
        )
    }
    const EducationTab = (props) => {
        return (
            <>
                <strong className='text-white'>Education Detail</strong>
                <section className='card shadow-lg p-3 mt-3 border-0 rounded-10' style={{ backgroundColor: 'rgb(32, 39, 60)' }}>
                    <div className='d-flex flex-wrap justify-content-between'>
                        <small className='text-white'>Degree Name: <span className='color-green'>BSCS</span></small>
                        <small className='text-white'>Status: <span className='color-green'>Completed</span></small>
                    </div>
                    <small className='d-block text-white'>Start at: <span className='color-green'>14/12/2021</span></small>
                    <small className='d-block text-white'>End at: <span className='color-green'>14/12/2021</span></small>

                    <small className='d-block color-green mt-3'>Description: </small>
                    <small className='text-white'>detail about education etc...</small>

                </section>

            </>
        )
    }
    const RenderPage = (props) => {
        return (

            <div className="container">
                <RenderTopSection />
                <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-3 mx-auto mb-3">
                        <RenderSkills />
                        <RenderLanguages />
                    </div>
                    <div className="col-sm-8 col-md-8 col-lg-6 mb-3">
                        <RenderAboutMeDetail />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 mb-3">
                        <RenderSocialLinks />
                    </div>
                    <div className='col-sm-6'>
                        <RenderTabs />
                    </div>
                </div>
                <br />
            </div>
        )
    }


    return (
        <>
            <ApiSpinner visibility={loading} />
            {contentShow && <RenderPage />}

        </>
    );
}
export default Aboutme;