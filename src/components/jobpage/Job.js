
import React from "react";
import Footer from "../Footer";
import Navebar from "../Navebar";
import Subscribe from "../Subscribe";
import Contact from "../Contact";
import Jobsection from './Jobsection';
const Job = () => {

      return (
            <>
                  <div className="container-fluid">
                        <Navebar />
                        <Jobsection />
                        <Subscribe />
                        <Contact />
                        <Footer />
                  </div>
            </>
      );
}

export default Job;