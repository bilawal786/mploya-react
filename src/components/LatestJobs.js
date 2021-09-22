import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

const LatestJobs = () => {

    const LatestJobs = (props) => {
        const [bookMarked, setBookMarked] = useState(false);
        const [skills, setSkills] = useState(props.skills); 
        return (
            <div className="col-sm-6 col-md-6 col-lg-4 my-3">
                <div className="card p-3 shadow-lg card-post">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center">
                            <img className="icon-img" src={props.imgSource} alt="image" />
                            <div className="c-details px-2">
                                <h6 className="mb-0">{props.name}</h6> <span>{props.timeAgo}</span>
                            </div>

                        </div>
                        <span className={bookMarked ? 'bookmark-btn bookmark-btn-active m-1' : 'bookmark-btn m-1'} onClick={() => {setBookMarked(!bookMarked)}}><i class="fa fa-bell"></i></span>  
                    </div>
                    <h5 className="card-title my-3"><b>{props.title}</b></h5>
                    <div className="c-details">
                        <span><i className="fa fa-map" aria-hidden="true"></i>&nbsp;{props.type}</span>
                        <span className='mx-2'><i className="fa fa-map" aria-hidden="true"></i>&nbsp;{props.location}</span>
                    </div>
                    <div className="c-details my-2"> 
                        {
                            props.skills.map((skill) => {
                                return(
                                    <span className='badge-type'>{skill}</span>
                                )
                            })
                        }
                        <a className="section-link" href="" style={{ float: 'right' }}><b>Apply</b></a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className='container my-container'>
                <div className='section-title'>
                    <h4>Latest Job
                        <span style={{ color: "#067d1f" }}> Posts</span>
                    </h4>
                    <div className="row">
                        <div className="col-sm-8">
                            <p>Explore the different types of jobs available to apply and discover which is right for you to apply</p>
                        </div>
                        <div className="col-sm-4">
                            <NavLink exact to="/jobs" className='btn btn-success'>See More <i class="fa fa-arrow-right" aria-hidden="true"></i></NavLink>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className='row'>
                    <LatestJobs
                        name='Mailchimp'
                        imgSource='https://i.imgur.com/IRsUTtE.jpg'
                        timeAgo='2 min ago'
                        title='Data Entry Staff'
                        type='Full Time'
                        location='California'
                        skills={['UX/UI','Developer']}
                    />
                    <LatestJobs
                        name='Mailchimp'
                        imgSource='https://i.imgur.com/IRsUTtE.jpg'
                        timeAgo='2 min ago'
                        title='Data Entry Staff'
                        type='Full Time'
                        location='California'
                        skills={['UX/UI','Developer']}
                    />
                    <LatestJobs
                        name='Mailchimp'
                        imgSource='https://i.imgur.com/IRsUTtE.jpg'
                        timeAgo='2 min ago'
                        title='Data Entry Staff'
                        type='Full Time'
                        location='California'
                        skills={['UX/UI','Developer']}
                    />                                        
                </div>


            </div>


        </>
    );
}
export default LatestJobs;