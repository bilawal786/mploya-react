import React, { useEffect, useState } from 'react';
import Axios from "axios";
import ReactPaginate from 'react-paginate';

const Jobsection = () => {
      const [jobs, setJobs] = useState([])
      const [pageNumber, setPageNumber] = useState(0);
      const jobsPerPage = 8;
      const pagesVisited = pageNumber * jobsPerPage;

      useEffect(async () => {

            try {
                  const res = await Axios({
                        method: 'GET',
                        url: 'https://mploya.com/api/all/jobs/frontend',
                  });
                  setJobs(res.data);
                  console.log(res.data)
            } catch (error) {

                  console.log(error);
            }

      }, [])

      const displayJobs = jobs
            .slice(pagesVisited, pagesVisited + jobsPerPage)
            .map((row) => {
                  return (
                        <>

                              {/* <div className="d-flex flex-row justify-content-between align-items-center">
                                    <div>
                                          <strong><p className="text-primary">{row.job_title}</p></strong>
                                          <span> 
                                                <span>{row.occupation}</span>
                                                <i class="fa fa-square-o" aria-hidden="true"></i>
                                                Experience: {row.min_experience}year to {row.max_experience}year 
                                                <i class="fa fa-square-o" aria-hidden="true"></i>&nbsp;&nbsp;Salary: ${Math.round(row.min_salary)} To ${Math.round(row.max_salary)} 
                                          </span>
                                         

                                    </div>
                                    <p className="text-danger"><i className="fa fa-square-o text-danger" aria-hidden="true"></i> {row.job_type}</p>
                                    <button className="btn btn-success px-4">Apply</button>
                              </div> */} 
                              <br />

                              <div className="col-lg-8 col-md-8 col-sm-6 top-response-mob-left">
                                    <strong><p className="text-primary my-0">{row.job_title}</p></strong>
                                    <p className='my-0'>{row.occupation} &nbsp;&nbsp;&nbsp; <i class="fa fa-square-o" aria-hidden="true"></i>&nbsp;&nbsp; Experience: {row.min_experience}year to {row.max_experience}year &nbsp;&nbsp;&nbsp; <i class="fa fa-square-o" aria-hidden="true"></i>&nbsp;&nbsp;Salary: ${Math.round(row.min_salary)} To ${Math.round(row.max_salary)} </p>
                              </div>
                              <div className="col-lg-2 col-md-2 col-sm-3 ">
                                    <div className="d-flex fllex-column h-100 justify-content-center align-items-center">
                                          <p className="text-danger m-0"><i className="fa fa-square-o text-danger" aria-hidden="true"></i> {row.job_type}</p>

                                    </div>
                              </div>
                              <div className="col-lg-2 col-md-2 col-sm-3" >
                                    <div className="d-flex fllex-column h-100 justify-content-center align-items-center">
                                          <button className="btn btn-success px-4">Apply</button>
                                    </div>
                              </div>
                              <span className="my-3"></span>
                              <hr />
                        </>

                  );
            });


      const pageCount = Math.ceil(jobs.length / jobsPerPage);
      const changePage = ({ selected }) => {
            setPageNumber(selected);
      };
      return (
            <>

                  <div className="container">
                        <div className='row  justify-content-center mt-5'>
                              <div className="col-lg-10 col-md-10 col-sm-10">
                                    <div className="row mb-5">
                                          {displayJobs}
                                    </div>


                                    <ReactPaginate
                                          previousLabel={"Previous"}
                                          nextLabel={"Next"}
                                          pageCount={pageCount}
                                          onPageChange={changePage}
                                          containerClassName={"paginationBttns"}
                                          previousLinkClassName={"previousBttn"}
                                          nextLinkClassName={"nextBttn"}
                                          disabledClassName={"paginationDisabled"}
                                          activeClassName={"paginationActive"}
                                    />
                              </div>
                        </div>

                  </div>

            </>
      );
}

export default Jobsection;