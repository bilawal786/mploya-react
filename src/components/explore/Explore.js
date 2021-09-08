import React from "react";
import Footer from "../Footer";
import Navebar from "../Navebar";


const Explore = () => {

      return (
            <>
                  <div className="container-fluid">
                        <Navebar />
                        {/* dummy data */}
                        <div style={{ height: "140px" }}>
                              <h1 className="text-center" style={{ marginTop: "200px" }}>Explore Componenet</h1>
                        </div>

                        <Footer />
                  </div>
            </>
      );
}

export default Explore;