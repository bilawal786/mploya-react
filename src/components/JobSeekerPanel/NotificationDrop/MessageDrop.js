import React, { useState } from 'react';
import './NotificationDrop.css';
import OutsideClickHandler from 'react-outside-click-handler';

const MessageDrop = (props) => {
    const [msgOpen, setMsgOpen] = useState(false);
    const [numberNotification, setNumberNotification] = useState(2);


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
                <button className="btn btn-success w-100"><b>Messages</b></button>
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
    return (
        <>
            <OutsideClickHandler
                onOutsideClick={() => { setMsgOpen(false) }}
            >
                <span
                    className="ND-drop-button d-flex flex-column" onClick={() => setMsgOpen(!msgOpen)}>

                    <span
                        className={msgOpen == true ? "ND-icon-button activate" : "ND-icon-button"}

                    >
                        {/* <i class="fa fa-bell" aria-hidden="true"></i>  */}
                        <span className="nav-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                            </svg>
                        </span>
                        <span class="badge p-1">{numberNotification}</span>

                    </span>
                </span>
                {msgOpen && <DropdownMenu />}
            </OutsideClickHandler>
        </>
    );
}
export default MessageDrop;

