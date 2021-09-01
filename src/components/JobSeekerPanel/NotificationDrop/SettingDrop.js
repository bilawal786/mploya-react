import React, { useState } from 'react';
import './NotificationDrop.css';

const SettingDrop = (props) => {
    const [settingOpen, setSettingOpen] = useState(false);
    const [numberNotification, setNumberNotification] = useState(1);

    return (
        <>
            <span
                onMouseLeave={() => setSettingOpen(false)}
                className="ND-drop-button d-flex flex-column" onClick={() => setSettingOpen(!settingOpen)}>

                <span
                    className={settingOpen == true ? "ND-icon-button activate" : "ND-icon-button"}

                >
                    {/* <i class="fa fa-bell" aria-hidden="true"></i>  */}
                    <span className="nav-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                        </svg>
                    </span>
                    <span class="badge p-1">{numberNotification}</span>

                </span>
                {settingOpen && <DropdownMenu />}

            </span>




        </>
    );
}
export default SettingDrop;


function DropdownMenu() {
    function DropdownItem(props) {
        return (
            <>
                <div className="p-2">
                    <div className="ND-menu-item-dark card bg-dark-mode border-0 shadow-sm rounded-10 p-3">
                        <div className="d-flex flex-row align-items-center">
                            <img class="ND-icon-img" src={props.imgSource} alt="image" />
                            <small><strong className="mx-2 text-white">{props.title}</strong></small>
                        </div>
                        <small className="text-white" align="left">{props.description}</small>
                        <small align="left" className="text-muted">{props.experience}</small>

                    </div>

                </div>
            </>

        );

    }
    return (
        <div className="ND-dropdown-dark">
            <button className="btn btn-success w-100"><b>Settings</b></button>
            <DropdownItem

                imgSource={"https://i.imgur.com/IRsUTtE.jpg"}
                title={"Airbnb"}
                description={"Word press 2 vacancies are available."}
                experience={"HTML CSS coder 2 to 3 year experience."}
            ></DropdownItem>  
        </div>

    );

}
