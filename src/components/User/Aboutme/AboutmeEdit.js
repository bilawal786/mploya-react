import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import '../Aboutme/Aboutme.css';

const AboutmeEdit = () => {


    const [imgData, setImgData] = useState("https://i.imgur.com/IRsUTtE.jpg");
    const [videoData, setVideoData] = useState("https://www.youtube.com/watch?v=7sDY4m8KNLc&ab_channel=Codevolution");
    const onChangePicture = e => {
        if (e.target.files[0]) {
            console.log("picture: ", e.target.files);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    const onChangeVideo = e => {
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setVideoData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    const [languages, setLanguages] = useState(['English', 'Chinese']);
    const [addNew, setAddNew] = useState(null);
    function addLanguageHandler() {
        setLanguages(previous => [...previous, ""]) 
    }
    function changeLanguageHandler(e, index) {
        languages[index] = e.target.value; 
        console.log(languages);
    }
    function removeLanguageHandler(index,language) { 
        //console.log(index,language);
        setLanguages( 
            prev => {
                return prev.filter(item => item !== language);
            })
        // languages.splice(index, 1); 
        // const l=languages;
        // l.splice(index,1);
        // setLanguages(
        //     prev=> {return l;}
        // )

        //console.log(l);
    }

    return (
        <>
            <div className="container-fluid">
                <form>
                    <div className="cal-top-section px-4 pb-0">
                        <div className="card bg-transparent border-0">
                            <div className="top-response d-flex justify-content-between align-items-center">
                                <div className="top-response d-flex flex-column">
                                    <img className="calendar-top-img text-center" src={imgData} />
                                    <label for="profilePic" className="btn btn-success btn-sm rounded-pill" style={{ marginTop: '-20px' }}>
                                        <i className="fa fa-cloud-upload"></i>&ensp; Upload
                                    </label>
                                    <input id="profilePic" type="file" onChange={onChangePicture} className='d-none' />
                                </div>

                                <button type="submit" className="btn btn-success btn-sm rounded-pill px-5 my-3">Save</button>
                            </div>
                        </div>
                    </div>
                    <div className="spacer">&nbsp;</div>
                    <div className="row">
                        <br />
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <div className="aboutme-round-sm p-3 my-3">
                                <strong>Profile Status</strong>
                                <div className="d-flex flex-row mt-2">
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" name="user_type" value="visible" type="radio" id="flexSwitchCheckDefault" />
                                        <label className="form-check-label" for="flexSwitchCheckDefault">Visible</label>
                                    </div>
                                    <div className="form-check form-switch" style={{ marginLeft: '30px' }}>
                                        <input className="form-check-input" name="user_type" value="Not Visisble" type="radio" id="flexSwitchCheckDefault" />
                                        <label className="form-check-label" for="flexSwitchCheckDefault">Not Visible</label>
                                    </div>

                                </div>

                            </div>
                            <div className="aboutme-round-sm p-3 my-3">
                                <strong>Name</strong>
                                <input type="text" className="form-control border-0 my-2" defaultValue='Airbnb' />


                            </div>

                            <div className="aboutme-round-sm p-3 my-3">
                                <div className="d-flex flex-row justify-content-between align-items-center">
                    
                                    <strong>Your Languages</strong> 
                                    <a
                                        type="button"
                                        className="btn btn-success btn-sm rounded-circle" onClick={() => addLanguageHandler()}>
                                        <i class="fa fa-plus" aria-hidden="true"></i>

                                    </a>
                                </div>
                                {
                                    languages.map((language, index) => {
                                        return (
                                            <div key={index}>
                                                <input onChange={(e) => changeLanguageHandler(e, index)}
                                                    defaultValue={language}
                                                    required
                                                />
                                                <a
                                                    type="button"
                                                    className="btn btn-success btn-sm rounded-circle" onClick={() => removeLanguageHandler(index,language)}>
                                                    <i class="fa fa-remove"  aria-hidden="true"></i>

                                                </a>

                                            </div>
                                        )

                                    }
                                    )}
                            </div>
                            <div className="aboutme-round-sm p-3 my-3">
                                <strong>Company name</strong>
                                <input type="text" className="form-control border-0 my-2 " defaultValue='Homing' />

                            </div>
                            <div className="aboutme-round-sm p-3 my-3">
                                <strong>Location</strong>
                                <input type="text" className="form-control border-0 my-2 " defaultValue='Los Angels, CA' />

                            </div>
                            <div className="aboutme-round-sm p-3 my-3">
                                <strong>About Me</strong>
                                <textarea
                                    className="form-control border-0 my-2"
                                    id="AboutMeText"
                                    rows="3"
                                    defaultValue='Los Angels, CA'
                                >
                                </textarea>

                            </div>

                            <strong>What we do</strong>
                            <div className="aboutme-round-sm p-3 my-3">
                                <div className="d-flex flex-row align-items-center">
                                    <img class="icon-img" src={imgData} alt="image" />

                                    <div className="px-3 d-flex flex-column w-100">
                                        <small>
                                            <strong>Product Design</strong>
                                        </small>

                                        <input type="text" className="form-control border-0 mt-2 w-100" placeholder="Type here..." />


                                    </div>

                                </div>


                            </div>
                            <div className="aboutme-round-sm p-3 my-3">
                                <div className="d-flex flex-row align-items-center">
                                    <img class="icon-img" src={imgData} alt="image" />

                                    <div className="px-3 d-flex flex-column w-100">

                                        <small>
                                            <strong>Real Estate Photography</strong>
                                        </small>
                                        <input type="text" className="form-control border-0 mt-2 w-100" placeholder="Type here..." />
                                    </div>

                                </div>


                            </div>


                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <div className="row">
                                <div className="col-sm-1 col-md-1 col-lg-2"></div>
                                <div className="col">
                                    <strong>Socials</strong>
                                    <div className="my-3">
                                        <div className="social-link-input mb-2">
                                            <input type="text" className="form-control border-0 rounded-pill bg-blueish px-4" defaultValue="/Airbnb" />
                                            <div className="social-link-icon"><i className="fa fa-facebook-f text-primary"></i></div>

                                        </div>
                                        <div className="social-link-input mb-2">
                                            <input type="text" className="form-control border-0 rounded-pill bg-berry px-4" defaultValue="/Airbnb" />
                                            <div className="social-link-icon"><i className="fa fa-linkedin text-info"></i></div>

                                        </div>
                                        <div className="social-link-input mb-2">
                                            <input type="text" className="form-control border-0 rounded-pill bg-redish px-4" defaultValue="/Airbnb" />
                                            <div className="social-link-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram text-danger" viewBox="0 0 16 16">
                                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                                </svg>
                                            </div>

                                        </div>
                                        <div className="social-link-input mb-2">
                                            <input type="text" className="form-control border-0 rounded-pill bg-blueish px-4" defaultValue="/Airbnb" />
                                            <div className="social-link-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter text-primary" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                            </div>



                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="aboutme-round-sm my-3 p-0">
                                <div className="d-flex flex-row justify-content-between p-3">
                                    <strong>Introduction Video</strong>
                                    <div>
                                        <label for="videoUpload" className="btn btn-success btn-sm rounded-pill px-3">
                                            <i className="fa fa-cloud-upload"></i>&ensp; Upload
                                        </label>
                                        <input id="videoUpload" type="file" onChange={onChangeVideo} className='d-none' />

                                    </div>
                                </div>
                                <ReactPlayer url={videoData} controls width='100%' />
                                <br />
                            </div>

                        </div>




                    </div>
                </form>
            </div>

        </>
    );
}
export default AboutmeEdit;