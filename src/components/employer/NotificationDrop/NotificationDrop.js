import React, { useState } from 'react';
import './NotificationDrop.css';

const NotificationDrop = (props) => {
    const [open, setOpen] = useState(false);


    return (
        <>
            <li className="ND-drop-button d-flex flex-column">
                <a className="ND-icon-button" onClick={() => setOpen(!open)}>
                    {/* {props.icon} */}
                    <i class="fa fa-bell" aria-hidden="true"></i>
                </a>
                {open && <DropdownMenu />}

            </li>

        </>
    );
}
export default NotificationDrop;


function DropdownMenu() {
    function DropdownItem(props) {
        return (
            <>
                <div className="p-2">
                    <div className="ND-menu-item card border-0 shadow-sm rounded-10 p-3">
                        <div className="d-flex flex-row align-items-center">
                            <img class="ND-icon-img" src={props.imgSource} alt="image" />
                            <small><strong className="mx-2">{props.title}</strong></small>
                        </div>
                        <small align="left">{props.description}</small>
                        <small align="left" className="text-muted">{props.experience}</small>

                    </div>

                </div>
            </>

        );

    }
    return (
        <div className="ND-dropdown">
            <button className="btn btn-success btn-lg w-100"><b>Notification</b></button>
            <DropdownItem

                imgSource={"https://i.imgur.com/IRsUTtE.jpg"}
                title={"Airbnb"}
                description={"Word press 2 vacancies are available."}
                experience={"HTML CSS coder 2 to 3 year experience."}
            ></DropdownItem>
            <DropdownItem

                imgSource={"https://i.imgur.com/IRsUTtE.jpg"}
                title={"Airbnb"}
                description={"Word press 2 vacancies are available."}
                experience={"HTML CSS coder 2 to 3 year experience."}
            ></DropdownItem>
            <DropdownItem

                imgSource={"https://i.imgur.com/IRsUTtE.jpg"}
                title={"Airbnb"}
                description={"Word press 2 vacancies are available."}
                experience={"HTML CSS coder 2 to 3 year experience."}
            ></DropdownItem>




        </div>

    );

}
