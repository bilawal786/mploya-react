import React, { useState } from 'react'; 
import NotificationDrop from './NotificationDrop/NotificationDrop';
import MessageDrop from './NotificationDrop/MessageDrop';
import SettingDrop from './NotificationDrop/SettingDrop';

const NotificationGroup = (props) => {  

    return (
        <>
            <MessageDrop />
            <NotificationDrop /> 
            <SettingDrop />

        </>
    );
}
export default NotificationGroup;

 
