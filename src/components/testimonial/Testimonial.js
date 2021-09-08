import React from "react";
import Footer from "../Footer";
import Navebar from "../Navebar";
import ClientSays from "../ClientSays";
import Subscribe from "../Subscribe";
import Contact from "../Contact";
const Testimonial = () => {

      return (
            <>
                  <div className="container-fluid">
                        <Navebar />
                        <ClientSays />
                        <Subscribe />
                        <Contact />
                        <Footer />
                  </div>
            </>
      );
}

export default Testimonial;