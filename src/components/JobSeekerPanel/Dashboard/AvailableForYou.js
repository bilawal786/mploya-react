import React from 'react';

const AvailableForYou = () => {

    return (
        <>
            <div className="top-response d-flex flex-row justify-content-between align-items-center">
                <strong className="my-1 text-white">Available Jobs For You</strong>
                <div className="my-1">
                    <button type="button" class="btn btn-outline-success btn-sm rounded-pill px-3 mx-3">Newest</button>
                    <button className="border-0 bg-transparent text-white"><i class="fa fa-ellipsis-v"></i></button>
                </div>
            </div>
            <div className="row mt-2">
                <AFYCard
                    imgSource={'https://i.imgur.com/IRsUTtE.jpg'}
                    title={'UX Designer'}
                    subtitle={'Bubble Studio'}
                    location={'Manchaster, England'}
                    range={'100 - 200'}
                >
                </ AFYCard> 
                <AFYCard
                    imgSource={'https://i.imgur.com/IRsUTtE.jpg'}
                    title={'UX Designer'}
                    subtitle={'Bubble Studio'}
                    location={'Manchaster, England'}
                    range={'100 - 200'}
                >
                </ AFYCard> 

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
                            <img className="icon-img text-center mb-2" src={props.imgSource} alt="..image" /><br />
                            <strong className="text-white">{props.title}</strong><br />
                            <small className="primary-span">{props.subtitle}</small>
                        </div>
                        <strong>
                            <small className="small-txt text-muted"><i class="fa fa-map-marker fa-sm" aria-hidden="true"></i>&nbsp;{props.location}</small>
                            <small className="small-txt text-muted"><i class="fa fa-usd fa-sm" aria-hidden="true"></i>&nbsp;{props.range}</small>
                        </strong>
                    </div>
                </div>
            </div>
        </>

    );

}

