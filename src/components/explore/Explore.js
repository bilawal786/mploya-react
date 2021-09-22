import React from "react";
import Footer from "../Footer";
import Navebar from "../Navebar";
import Subscribe from "../Subscribe";
import Contact from "../Contact";
import Job from "../jobpage/Jobsection";
import { geolocated } from "react-geolocated";

class Demo extends React.Component {
      render() {
            return !this.props.isGeolocationAvailable ? (
                  <div>Your browser does not support Geolocation</div>
            ) : !this.props.isGeolocationEnabled ? (
                  <div>Geolocation is not enabled</div>
            ) : this.props.coords ? (
                  <>
                        <div className="container-fluid">
                              <Navebar />
                              <Job latitude={this.props.coords.latitude} longitude={this.props.coords.longitude} />
                              <Subscribe />
                              <Contact />
                              <Footer />
                        </div>
                  </>


            ) : (
                  // <div>Getting the location data&hellip; </div>
                  <div></div>
            );
      }
}

export default geolocated({
      positionOptions: {
            enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
})(Demo);
