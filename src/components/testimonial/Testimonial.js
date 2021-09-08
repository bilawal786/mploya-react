import React from "react";
import Footer from "../Footer";
import Navebar from "../Navebar";
import ClientSays from "../ClientSays";
import Subscribe from "../Subscribe";
import Contact from "../Contact";
const Testimonial = () => {

      return (
            <>
                  <Navebar />
                    <ClientSays />
                    <Subscribe />
                    <Contact />
                  <Footer />
            </>
      );
}

export default Testimonial;