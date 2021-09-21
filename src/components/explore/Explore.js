import React from "react";
import Footer from "../Footer";
import Navebar from "../Navebar";
import Subscribe from "../Subscribe";
import Contact from "../Contact";
import Map from "../jobpage/Map";
import Job from "../jobpage/Jobsection";
import Search from "../jobpage/Search";


const Explore = () => {

      return (
            <>
                  <div className="container-fluid">
                        <Navebar />
                        <Job />
                        <Subscribe />
                        <Contact />
                        <Footer />
                  </div>
            </>
      );
}

export default Explore;