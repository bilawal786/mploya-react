import React, { useEffect, useState } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import Axios from "axios";
import { colors } from '@material-ui/core';
const MapContainer = (props) => {

      const style = {
            width: '100%',
            height: '72%'
      }

      const [coordinate, setcoordinate] = useState([]);
      useEffect(async () => {

            try {
                  const res = await Axios({
                        method: 'GET',
                        url: 'https://mploya.com/api/get/coordinates',
                  });
                  setcoordinate(res.data);
            } catch (error) {

                  console.log(error);
            }

      }, [])



      return (
            <>
                  <div className='row maprow mt-5'>
                        <Map google={props.google}
                              style={style}
                              zoom={5}
                              initialCenter={{

                                    lat: coordinate.latitude,
                                    lng: coordinate.longitude,
                              }}
                              center={{
                                    lat: coordinate.latitude,
                                    lng: coordinate.longitude,
                              }}

                        >
                              {props.jobs.map(marker => (

                                    <Marker
                                          position={{ lat: marker.latitude, lng: marker.longitude }}
                                          key={marker.id}

                                    />
                              ))}
                        </Map>
                  </div>
            </>
      );
}

export default GoogleApiWrapper({
      apiKey: process.env.React_App_Google_Map_Api_Key
})(MapContainer)