import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Axios from "axios";
import Modal from 'react-modal';
import ReactPlayer from "react-player";

Modal.setAppElement('#root');

const DashboardProfile = () => {
    let history = useHistory();
    const [employer, setEmployer] = useState('');
    const [modelIsOpen, setmodelIsOpen] = useState(false);
    const authId = localStorage.getItem('id');
    let token = localStorage.getItem('token');


    useEffect(async () => {

        try {
            const res = await Axios({
                method: 'GET',
                url: 'https://mploya.com/api/single/employer/' + authId,
                headers: {
                    authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                },
            });

            setEmployer(res.data);
            console.log(res.data);

        } catch (error) {

            console.log(error);
        }

    }, [])


    const profileEdit = () => {
        history.push('/profile/edit', {
            name: employer.name,
            company_name: employer.company_name,
            address: employer.address,
            about: employer.about,
            facebook_link: employer.facebook_link,
            instagram_link: employer.instagram_link,
            linkedin_link: employer.linkedin_link,
            twitter_link: employer.twitter_link,
            image: employer.image,
        });
    }
    return (
        <>
            <div className="top-response d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                    <img className="calendar-top-img text-center" src={employer.image ? "https://mploya.com/" + employer.image : "https://i.imgur.com/IRsUTtE.jpg"} />
                    <div className="px-2 d-flex flex-column">
                        <strong>{employer.name}</strong>
                        <small className="color-green">{employer.company_name}</small>
                        <p className="text-muted">
                            <small><i class="fa fa-map-marker fa-sm" aria-hidden="true"></i>&nbsp;{employer.address}</small>
                        </p>

                    </div>

                </div>
                <button onClick={profileEdit} className="btn btn-success btn-sm px-3 my-2 rounded-pill">Update Profile</button>


            </div>

            <strong className="m-3">About</strong>
            <div className="aboutme-round-sm p-3 mb-4">
                <p align="justify" className="text-muted">{employer.about}
                </p>
            </div>



            <div className="d-flex flex-row justify-content-center align-items-center">
                <button className="btn btn-success rounded-circle" onClick={() => setmodelIsOpen(true)}><i className="fa fa-play"></i></button>
                <Modal isOpen={modelIsOpen} onRequestClose={() => setmodelIsOpen(false)}

                    style={{
                        overlay: {
                            backgroundColor: 'transparent',
                            left: '400px',
                            right: '400px',
                            top: '130px',
                            bottom: '130px'
                        },

                    }}
                >
                    <button className="btn mb-2" style={{ float: "right", marginTop: "-15px", backgroundColor: "transparent" }} onClick={() => setmodelIsOpen(false)}><i className="fa fa-close"></i></button>

                    <ReactPlayer url={employer.video ? "https://mploya.com/" + employer.video : "https://www.youtube.com/watch?v=zWh3CShX_do"} controls width="100%" height="90%" />


                </Modal>
                <strong className="mx-2">Watch <span className="text-success">{employer.name}</span> <br /> Introduction Video</strong>
            </div>


            <strong className="m-3">What we do</strong>
            <div className="aboutme-round-sm p-3 mb-3">
                <div className="d-flex flex-row align-items-center">
                    <img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />

                    <div className="px-3 d-flex flex-column">
                        <small><strong>Graphic Designer</strong></small>
                        <small className="text-muted">Design and maintain</small>
                        <small className="text-muted">Mobile</small>
                    </div>

                </div>


            </div>
            <div className="aboutme-round-sm p-3">
                <div className="d-flex flex-row align-items-center">
                    <img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />

                    <div className="px-3 d-flex flex-column">
                        <small><strong>Graphic Designer</strong></small>
                        <small className="text-muted">Design and maintain</small>
                        <small className="text-muted">Mobile</small>
                    </div>

                </div>


            </div>

        </>
    );
}
export default DashboardProfile;