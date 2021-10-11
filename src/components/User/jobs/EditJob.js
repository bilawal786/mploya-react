import React, { useState, useEffect } from "react";
import Axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'
const EditJob = (props) => {

      const job = props.location.state.job;
      let token = localStorage.getItem('token');


      const [data, setdata] = useState({
            'id': job.id,
            'job_title': job.job_title,
            'description': job.description,
            'salary_type': 'ni aa rhi', // ni aa rhi
            'min_salary': Math.round(job.min_salary),
            'max_salary': Math.round(job.max_salary),
            'occupation': job.occupation,
            'education': job.education,
            'min_experience': job.min_experience,
            'max_experience': job.max_experience,
            'requirements': job.requirements,
            'link': job.link,
            'vacancies': job.vacancies,
            'job_type': job.job_type,
            'skills': job.skills,
      })
      // message state
      const [message, setMessage] = useState({
            'job_title': '',
            'description': '',
            'salary_type': '',
            'min_salary': '',
            'max_salary': '',
            'occupation': '',
            'education': '',
            'min_experience': '',
            'max_experience': '',
            'requirements': '',
            'link': '',
            'vacancies': '',
            'job_type': '',
            'skills': [],
      });




      const InputEvent = async (event) => {

            const { name, value } = event.target;
            setdata((preValue) => {
                  return {
                        ...preValue,
                        [name]: value,
                  }
            })
      }



      const onSubmit = async (e) => {
            e.preventDefault();
            if (data.job_title == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              job_title: "Job Title is Required",
                        }

                  });
            } else if (data.occupation == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              occupation: "Occupation is Required",
                        }

                  });
            } else if (data.education == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              education: "Education is Required",
                        }

                  });
            } else if (data.job_type == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              job_type: "Job Type is Required",
                        }

                  });
            }
            else if (data.salary_type == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              salary_type: "Salary Type is Required",
                        }

                  });
            } else if (data.link == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              link: "Link is Required",
                        }

                  });
            } else if (validator.isURL(data.link) == false) {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              link: "Invalid Link",
                        }

                  });
            }
            else if (data.min_salary == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              min_salary: "Min Salary is Required",
                        }

                  });
            }
            else if (data.max_salary == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              max_salary: "Max Salary is Required",
                        }

                  });
            } else if (data.min_experience == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              min_experience: "Min Experience is Required",
                        }

                  });
            }
            else if (data.max_experience == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              max_experience: "Max Experience is Required",
                        }

                  });
            } else if (data.requirements == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              requirements: "Requirements is Required",
                        }

                  });
            }
            else if (data.vacancies == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              vacancies: "Vacancies is Required",
                        }

                  });
            } else if (data.skills.length === 0) {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              skills: " Skills is Required",
                        }

                  });
            } else {

                  try {
                        const res = await Axios({
                              method: 'post',
                              url: 'https://mploya.com/api/job/edit',
                              data: data,
                              headers: {
                                    authorization: 'Bearer ' + token,
                                    Accept: 'application/json',
                              },
                        });


                        const notify = () => {
                              toast.success(res.data.message, {
                                    position: toast.POSITION.TOP_RIGHT
                              });
                        }
                        notify();

                  } catch (error) {

                        console.log(error.response.data.error);
                        const notify = () => {
                              toast.error(error.response.data.error, {
                                    position: toast.POSITION.TOP_RIGHT
                              });
                        }
                        notify();
                  }

            }

      }

      return (
            <>
                  <div className="container"  >
                        <ToastContainer />
                        <div className="app-content pt-3 p-md-3 p-lg-4"  >
                              <div className="container-xl">

                                    <div className="row g-3 mb-4 text-center mt-2">

                                          <h1 className="mb-0" style={{ fontSize: "30px" }}>Edit Job</h1>

                                    </div>
                              </div>

                        </div>
                        <div className="col-md-7 mx-auto shadow-lg p-5 mb-4 ">
                              <form onSubmit={onSubmit}>
                                    <div className="form-group mb-3">
                                          <label className="mb-1 text-dark" for="exampleInputEmail1">Job Title</label>
                                          <input name="job_title" value={data.job_title} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" onChange={InputEvent} />
                                          <span className="text-danger" style={{ fontSize: "12px" }}>{message.job_title}</span>

                                    </div>

                                    <div className="form-group mb-3">
                                          <label className="mb-1 text-dark" for="exampleInputEmail1">Occupation</label>
                                          <input name="occupation" value={data.occupation} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="type" onChange={InputEvent} />
                                          <span className="text-danger" style={{ fontSize: "12px" }}>{message.occupation}</span>
                                    </div>


                                    <div className="form-group mb-3">
                                          <label className="mb-1 text-dark" for="exampleInputEmail1">Education</label>
                                          <input name="education" value={data.education} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="type" onChange={InputEvent} />
                                          <span className="text-danger" style={{ fontSize: "12px" }}>{message.education}</span>
                                    </div>

                                    <div className="row">
                                          <div class="form-group col-md-6 mb-3">
                                                <label className="mb-1 text-dark" >Job Type</label>
                                                <select name="job_type" class="form-select" onChange={InputEvent}>
                                                      <option selected value={data.job_type}>{data.job_type}</option>
                                                      {
                                                            data.job_type == 'Full Time' ? <option value="Part Time">Part Time</option> : <option value="Full Time">Full Time</option>
                                                      }


                                                </select>
                                                <span className="text-danger" style={{ fontSize: "12px" }}>{message.job_type}</span>
                                          </div>
                                          <div class="form-group col-md-6 mb-3">
                                                <label className="mb-1 text-dark" >Salary Type</label>
                                                <select name="salary_type" class="form-select" onChange={InputEvent}>
                                                      <option selected value={data.salary_type}>Select</option>
                                                      <option value="Per Month">Per Month</option>
                                                      <option value="Per Week">Per Week</option>
                                                </select>
                                                <span className="text-danger" style={{ fontSize: "12px" }}>{message.salary_type}</span>
                                          </div>
                                    </div>

                                    <div className="row">
                                          <div class="form-group col-md-12 mb-3">
                                                <label className="mb-1 text-dark" for="inputState">Link</label>
                                                <input name="link" value={data.link} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="type" onChange={InputEvent} />
                                                <span className="text-danger" style={{ fontSize: "12px" }}>{message.link}</span>
                                          </div>

                                    </div>
                                    <div className="row">
                                          <div className="form-group col-md-3 mb-3">
                                                <label className="mb-1 text-dark" for="exampleInputEmail1">Min Salary</label>
                                                <input name="min_salary" value={data.min_salary} min='1' type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="type" onChange={InputEvent} />
                                                <span className="text-danger" style={{ fontSize: "12px" }}>{message.min_salary}</span>
                                          </div>
                                          <div className="form-group col-md-3">
                                                <label className="mb-1 text-dark" for="exampleInputEmail1">Max Salary</label>
                                                <input name="max_salary" value={data.max_salary} min='1' type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="type" onChange={InputEvent} />
                                                <span className="text-danger" style={{ fontSize: "12px" }}>{message.max_salary}</span>
                                          </div>
                                          <div class="form-group col-md-3 mb-3">
                                                <label className="mb-1 text-dark" for="inputState">Min Experience</label>
                                                <input name="min_experience" value={data.min_experience} min='1' type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="type" onChange={InputEvent} />
                                                <span className="text-danger" style={{ fontSize: "12px" }}>{message.min_experience}</span>
                                          </div>
                                          <div class="form-group col-md-3 mb-3">
                                                <label className="mb-1 text-dark" for="inputState">Max Experience</label>
                                                <input name="max_experience" value={data.max_experience} min='1' type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="type" onChange={InputEvent} />
                                                <span className="text-danger" style={{ fontSize: "12px" }}>{message.max_experience}</span>
                                          </div>


                                    </div>
                                    <div class="form-group mb-3">
                                          <label className="mb-1 text-dark" for="exampleFormControlTextarea1">Description</label>
                                          <CKEditor
                                                editor={ClassicEditor}
                                                data={data.description}
                                                name="description"
                                                onChange={(event, editor) => {
                                                      const data = editor.getData()
                                                      setdata((preValue) => {
                                                            return {
                                                                  ...preValue,
                                                                  'description': data,
                                                            }
                                                      })
                                                }}
                                          />

                                    </div>
                                    <div class="form-group mb-3">
                                          <label className="mb-1 text-dark" for="exampleFormControlTextarea1">Requirements</label>
                                          <CKEditor
                                                editor={ClassicEditor}
                                                data={data.requirements}
                                                name="requirements"
                                                onChange={(event, editor) => {
                                                      const data = editor.getData()
                                                      setdata((preValue) => {
                                                            return {
                                                                  ...preValue,
                                                                  'requirements': data,
                                                            }
                                                      })
                                                }}
                                          />
                                          <span className="text-danger" style={{ fontSize: "12px" }}>{message.requirements}</span>
                                    </div>

                                    <div className="row">
                                          <div class="form-group col-md-6 mb-3">
                                                <label className="mb-1 text-dark" for="inputState">Vacancies</label>
                                                <input name="vacancies" value={data.vacancies} min='1' type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="type" onChange={InputEvent} />
                                                <span className="text-danger" style={{ fontSize: "12px" }}>{message.vacancies}</span>
                                          </div>
                                          <div class="form-group col-md-6 mb-3">
                                                <label className="mb-1 text-dark" for="inputState">Skills</label>
                                                <input name="skills" value={data.skills} type="emtextil" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="type" onChange={InputEvent} />
                                                <span className="text-danger" style={{ fontSize: "12px" }}>{message.skills}</span>
                                          </div>
                                    </div>


                                    <button type="submit" className="btn mt-4 text-white btn-success" >Update</button>
                              </form>
                        </div>


                  </div>

            </>
      );
}

export default EditJob;