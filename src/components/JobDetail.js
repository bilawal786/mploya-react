import React from 'react';
const JobDetail = () => {

    return (
        <>
            <div className='container my-container'>

                <div className="row">
                    <div className="col-sm-9">
                        <div className="card border-0">
                            <div className="d-flex flex-row align-items-center">
                                <div className="icon-img"> <i></i> </div>
                                <div className="c-details px-4 d-flex flex-column">
                                    <h5 className="mb-0">Graphic Designer</h5>
                                    <div className="d-flex flex-row my-2">
                                        <span>$58,900 a year</span>
                                        <span className="mx-4">New york</span>
                                    </div>

                                    <span>from <span className="primary-span">Douglas Ellman</span></span>
                                </div>

                            </div>

                        </div>
                        <div className="job-decscription my-5">
                            <h6 style={{ color: '#067d1f' }}><b>About the job</b></h6>
                            <p>It is the paragraph explaining the decription of job
                            skills required and all neccessary information
                            It is the paragraph explaining the decription of job
                            skills required and all neccessary informationIt is
                            the paragraph explaining the decription of job
                            skills required and all neccessary informationIt is the paragraph explaining the decription of job
                                skills required and all neccessary information</p>
                            <h6><b>What You Need for this Position</b></h6>
                            <ul>
                                At Least 3 Year of experience and knowledge of:
                                <li>In Design</li>
                                <li>Illustrator</li>
                                <li>Photoshop</li>
                            </ul>
                            <hr></hr>
                            <h6 style={{ color: '#067d1f' }}><b>Additional</b></h6>
                            <ul>
                                Must have education in following subjects:
                                <li>Computer Science</li>
                                <li>BS degree</li>
                            </ul>
                        </div>



                    </div>
                    <div className="col-sm-3 d-flex flex-column align-items-center">
                        <span className="primary-span"><i class="fa fa-mobile" aria-hidden="true"></i>&ensp;Full time</span>
                        <div className="card border-0 my-4">
                            <p><b>Need help? Call 1-888-292-9499</b></p>
                            <a className="btn btn-success">Apply</a>
                            <a className="btn btn-secondary my-2">Save This Job</a>
                        </div>
                    </div>

                </div>

            </div>


        </>
    );
}
export default JobDetail;