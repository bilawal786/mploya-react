import React from "react";
import Contact from "../Contact";
import Footer from "../Footer"; 
import Subscribe from "../Subscribe";
import ContactE from "./ContactE";
import Profilesection from "./Profilesection";
import JobDetail from '../JobDetail';
import ComapnyDetail from '../CompanyDetail';
import Request from '../Request';
import Calendar from "./Calendar";
import RequestSchedule from "../RequestSchedule";

const Profile = () => {

      return (
            <>
                  <Profilesection/>
                  <h1 className="text-center">Company Detail</h1>
                  <ComapnyDetail />
                  <h1 className="text-center mt-5">Job Detail</h1>
                  <JobDetail />
                  <h1 className="text-center">Request</h1>
                  <Request />
                  <h1 className="text-center">Request Schedule</h1>
                  <RequestSchedule />
                  <h1 className="text-center">Calendar</h1>
                  <Calendar />
                  <ContactE />
                  <Subscribe />
                  <Contact />
                  <Footer/>
            </>
      );
}

export default Profile;