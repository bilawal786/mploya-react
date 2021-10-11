import React, { useState } from 'react';
import './NotificationDrop.css';
import OutsideClickHandler from 'react-outside-click-handler';
const NotificationDrop = (props) => {
    const [notifyOpen, setNotifyOpen] = useState(false);
    const [numberNotification, setNumberNotification] = useState(3);

    return (
        <>
            <OutsideClickHandler
                onOutsideClick={() => setNotifyOpen(false)}
            >
                <span
                    className="ND-drop-button d-flex flex-column"
                    onClick={() => setNotifyOpen(!notifyOpen)}
                >
                    <span
                        className={notifyOpen == true ? "ND-icon-button activate" : "ND-icon-button"}>
                        {/* <i class="fa fa-bell" aria-hidden="true"></i>  */}
                        <span className="nav-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                            </svg>
                        </span>
                        <span class="badge p-1">{numberNotification}</span>

                    </span>

                </span>
                {notifyOpen && <DropdownMenu />}
            </OutsideClickHandler>



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
            <button className="btn btn-success w-100"><b>Notification</b></button>
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
