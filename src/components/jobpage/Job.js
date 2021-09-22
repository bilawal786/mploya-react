
import React from "react";
import { geolocated } from "react-geolocated";
import Footer from "../Footer";
import Navebar from "../Navebar";
import Subscribe from "../Subscribe";
import Contact from "../Contact";
import Jobsection from './Jobsection';
const Demo = (props) => {

      return !props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
      ) : !props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
      ) : props.coords ? (
            <>
                  <div className="container-fluid">
                        <Navebar />
                        <Jobsection latitude={props.coords.latitude} longitude={props.coords.longitude} />
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

export default geolocated({
      positionOptions: {
            enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
})(Demo);