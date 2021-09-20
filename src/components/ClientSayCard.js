import React, { Component } from "react";

const ClientSayCard = (props) => {
    return (
        <div>
            <h3>&nbsp;</h3>
            <div className="card shadow-sm cli-card m-2">
                <div className="card-body">
                    <img className="card-top-rounded-img" src={props.imgSource}></img>
                    <br /><br />
                    <p className="card-text text-muted">{props.detail}</p>
                </div>
                <div className="card-footer">
                    <p className="card-text">{props.name}</p>
                    <div
                        className="d-flex flex-row justify-content-between align-items-center review-footer">
                        <p className="card-text text-muted">{props.rank}</p>
                        <p className="text-muted">{props.rating}&nbsp;
                            <i className="fa fa-star star-color-green"></i>
                            <i className="fa fa-star star-color-green"></i>
                            <i className="fa fa-star star-color-green"></i>
                            <i className="fa fa-star star-color-green"></i>
                            <i className="fa fa-star star-color-green"></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ClientSayCard;