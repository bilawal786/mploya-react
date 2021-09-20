import React from 'react';
const PopularCompanies = () => {

    const PopularCompanyCard = (props) => {
        return (
            <div className="col-sm-4 col-md-4 col-lg-4 my-3">
                <div className="card text-center shadow-lg pop-companies-card ">
                    <div className="card-body">
                        <img className="top-rounded-img" src={props.imgSource}></img>
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text"><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;{props.location}</p>
                        <a className="section-link" href="default.asp"><b>{props.openJobs}+ Jobs Open</b></a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className='container my-container'>
                <div className='section-title'>
                    <h4>Popular
                        <span style={{ color: "#067d1f" }}> Companies</span>
                    </h4>

                    <div className="row">
                        <div className="col-sm-8">
                            <p>Explore the different types of categories job available to rentand discover which is right for your speciality.</p>
                        </div>
                        <div className="col-sm-4">
                            <a href="#" className='btn btn-success'>See More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                        </div>
                    </div>

                </div>
                <br></br>
                <div className='row'>
                    <PopularCompanyCard 
                        imgSource='https://i.imgur.com/IRsUTtE.jpg'
                        title='Google'
                        location='San Francisco'
                        openJobs='20'
                    />
                    <PopularCompanyCard 
                        imgSource='https://i.imgur.com/IRsUTtE.jpg'
                        title='Google'
                        location='San Francisco'
                        openJobs='20'
                    />
                    <PopularCompanyCard 
                        imgSource='https://i.imgur.com/IRsUTtE.jpg'
                        title='Google'
                        location='San Francisco'
                        openJobs='20'
                    />
                    <PopularCompanyCard 
                        imgSource='https://i.imgur.com/IRsUTtE.jpg'
                        title='Google'
                        location='San Francisco'
                        openJobs='20'
                    />
                    <PopularCompanyCard 
                        imgSource='https://i.imgur.com/IRsUTtE.jpg'
                        title='Google'
                        location='San Francisco'
                        openJobs='20'
                    />
                    <PopularCompanyCard 
                        imgSource='https://i.imgur.com/IRsUTtE.jpg'
                        title='Google'
                        location='San Francisco'
                        openJobs='20'
                    />
                </div>





            </div>


        </>
    );
}
export default PopularCompanies;