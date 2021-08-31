import React, { useState } from 'react';
import Navebar from '../Navebar';
import { useHistory } from "react-router-dom";
import Axios from "axios";


const ForgotPassword = (props) => {
      let history = useHistory();

      const [emailerror, setemailerror] = useState('');
      // form data state
      const [data, setdata] = useState({
            email: '',


      });
      // message state
      const [message, setMessage] = useState({
            email: '',

      });

      // get in put vale function 
      const inputEvent = (event) => {

            const { name, value } = event.target;
            setdata((preValue) => {
                  return {
                        ...preValue,
                        [name]: value,
                  }

            });

      };
      // submit function 
      const onSubmit = async (event) => {
            event.preventDefault();
            // return error message
            if (data.email == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              email: "Email is Required",
                        }

                  });
            }
            else {
                  try {
                        const res = await Axios({
                              method: 'post',
                              url: 'https://mploya.com/api/forgot/password',
                              data: data,
                        });
                        if (res.data.success == true) {

                              history.push("/password/verify/otp", { email: data.email });
                        }

                  } catch (error) {
                        setemailerror(error.response.data.error);
                  }
            }



      };
      return (
            <>
                  <Navebar />
                  <div className="container">
                        <div className="row justify-content-center">

                              <div className="col-md-4 bg-light shadow-lg p-3 mb-5 bg-white rounded smain" style={{ marginTop: "100px" }}>
                                    <h5 className="text-center p-3"><b>Verify Email</b></h5>
                                    <span className="text-danger" style={{ fontSize: '12px' }}>{emailerror}</span>
                                    <form className="signin-form" onSubmit={onSubmit}>
                                          <div className="mb-3">
                                                <input type="email" name="email" value={data.email} className="form-control" placeholder="Enter Email" onChange={inputEvent} />
                                                <span className="text-danger" style={{ fontSize: "12px" }}>{message.email}</span>
                                          </div>

                                          <div className="text-center">
                                                <button type="submit" className="btn p-2 my-2" style={{ backgroundColor: "#067d1f", color: "white", width: '100%', }}><b>Send</b></button>
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default ForgotPassword;