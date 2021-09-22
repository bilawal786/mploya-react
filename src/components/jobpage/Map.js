import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
const MapContainer = (props) => {
      console.log(props.lat);
      console.log(props.lng);
      const style = {
            width: '100%',
            height: '72%'
      }
      return (
            <>
                  <div className='row maprow mt-5'>
                        <Map google={props.google}
                              style={style}
                              zoom={5}
                              initialCenter={{

                                    lat: props.lat,
                                    lng: props.lng,
                              }}
                              center={{
                                    lat: props.lat,
                                    lng: props.lng,
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