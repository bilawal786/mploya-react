import React, { useEffect, useState } from 'react';
import Axios from "axios";
import "./applicationtable.css";
import ReactPaginate from 'react-paginate';


const ApplicationTable = () => {
      let token = localStorage.getItem('token');
      const [companies, seteCompanies] = useState([])
      const [pageNumber, setPageNumber] = useState(0);
      const applicationsPerPage = 3;
      const pagesVisited = pageNumber * applicationsPerPage;
      useEffect(async () => {
            try {
                  const res = await Axios({
                        method: 'GET',
                        url: 'https://mploya.com/api/all/employers',
                        headers: {
                              authorization: 'Bearer ' + token,
                              Accept: 'application/json',
                        },
                  });

                  seteCompanies(res.data);


            } catch (error) {

                  console.log(error);
            }

      }, [])
      const displayApplications = companies
            .slice(pagesVisited, pagesVisited + applicationsPerPage)
            .map((row) => {
                  return (
                        <tr>
                              <td ><input type="checkbox" /></td>
                              <td >#000123456</td>
                              <td >Nov 21th 2020 09:21 AM</td>
                              <td className="text-center">Bubbles Studios</td>
                              <td className="text-center">FULL TIME</td>
                              <td className="text-center">UI Designer</td>
                              <td ><i className="fa fa-phone"></i> 012 3123412 441</td>
                              <td><button className="btn btn-outline-light rounded-pill shadow" style={{ width: "150px" }}>PENDING</button></td>
                        </tr>
                  );
            });

      const pageCount = Math.ceil(companies.length / applicationsPerPage);
      const changePage = ({ selected }) => {
            setPageNumber(selected);
      };
      return (
            <>
                  <div className="top-response d-flex flex-row justify-content-between align-items-center">
                        <div className="chart-wrapper">
                              <ul className="nav nav-pills p-0 mb-3 rounded-pill" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                          <button className="nav-link active rounded-pill py-1" id="pills-all-status-tab" data-bs-toggle="pill" data-bs-target="#pills-all-status" type="button" role="tab" aria-controls="pills-all-status" aria-selected="true">All Status</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                          <button className="nav-link rounded-pill py-1" id="pills-pending-tab" data-bs-toggle="pill" data-bs-target="#pills-pending" type="button" role="tab" aria-controls="pills-weekly-expense" aria-selected="false">Pending</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                          <button className="nav-link rounded-pill py-1" id="pills-on-hold-tab" data-bs-toggle="pill" data-bs-target="#pills-on-hold" type="button" role="tab" aria-controls="pills-on-hold" aria-selected="false">On-Hold</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                          <button className="nav-link rounded-pill py-1" id="pills-candidate-tab" data-bs-toggle="pill" data-bs-target="#pills-candidate" type="button" role="tab" aria-controls="pills-on-hold" aria-selected="false">On-Hold</button>
                                    </li>
                              </ul>
                        </div>


                  </div>
                  <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-all-status" role="tabpanel" aria-labelledby="pills-all-status-tab">
                              <table class="table rounded-10 table-borderless" style={{ background: "#212130", color: "white" }}>


                                    <thead>
                                          <tr>
                                                <th>
                                                      <input type="checkbox" className="myclass" />
                                                      <hr />
                                                </th>
                                                <th>
                                                      Order Id
                                                      <hr />
                                                </th>
                                                <th>
                                                      Data Applied
                                                      <hr />
                                                </th>
                                                <th className="text-center">Company<hr /></th>
                                                <th className="text-center">Type<hr /></th>
                                                <th className="text-center">Position<hr /></th>
                                                <th>Contact<hr /></th>
                                                <th>Status<hr /></th>
                                          </tr>

                                    </thead>
                                    <tbody>
                                          {displayApplications}

                                    </tbody>
                              </table>
                              <ReactPaginate
                                    previousLabel={"Prev"}
                                    nextLabel={"Next"}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={"paginationBttns1"}
                                    previousLinkClassName={"previousBttn1"}
                                    nextLinkClassName={"nextBttn1"}
                                    disabledClassName={"paginationDisabled1"}
                                    activeClassName={"paginationActive1"}
                              />

                        </div>
                        <div className="tab-pane fade" id="pills-pending" role="tabpanel" aria-labelledby="pills-pending-tab">
                              <div className="tab-pane fade show active" id="pills-all-status" role="tabpanel" aria-labelledby="pills-all-status-tab">
                                    <table class="table rounded-10 table-borderless" style={{ background: "#212130", color: "white" }}>


                                          <thead>
                                                <tr>
                                                      <th>
                                                            <input type="checkbox" className="myclass" />
                                                            <hr />
                                                      </th>
                                                      <th>
                                                            Order Id
                                                            <hr />
                                                      </th>
                                                      <th>
                                                            Data Applied
                                                            <hr />
                                                      </th>
                                                      <th className="text-center">Company<hr /></th>
                                                      <th className="text-center">Type<hr /></th>
                                                      <th className="text-center">Position<hr /></th>
                                                      <th>Contact<hr /></th>
                                                      <th>Status<hr /></th>
                                                </tr>

                                          </thead>
                                          <tbody>
                                                {displayApplications}

                                          </tbody>
                                    </table>
                                    <ReactPaginate
                                          previousLabel={"Prev"}
                                          nextLabel={"Next"}
                                          pageCount={pageCount}
                                          onPageChange={changePage}
                                          containerClassName={"paginationBttns1"}
                                          previousLinkClassName={"previousBttn1"}
                                          nextLinkClassName={"nextBttn1"}
                                          disabledClassName={"paginationDisabled1"}
                                          activeClassName={"paginationActive1"}
                                    />

                              </div>
                        </div>
                        <div className="tab-pane fade" id="pills-on-hold" role="tabpanel" aria-labelledby="pills-on-hold-tab">
                              <div className="tab-pane fade show active" id="pills-all-status" role="tabpanel" aria-labelledby="pills-all-status-tab">
                                    <table class="table rounded-10 table-borderless" style={{ background: "#212130", color: "white" }}>


                                          <thead>
                                                <tr>
                                                      <th>
                                                            <input type="checkbox" className="myclass" />
                                                            <hr />
                                                      </th>
                                                      <th>
                                                            Order Id
                                                            <hr />
                                                      </th>
                                                      <th>
                                                            Data Applied
                                                            <hr />
                                                      </th>
                                                      <th className="text-center">Company<hr /></th>
                                                      <th className="text-center">Type<hr /></th>
                                                      <th className="text-center">Position<hr /></th>
                                                      <th>Contact<hr /></th>
                                                      <th>Status<hr /></th>
                                                </tr>

                                          </thead>
                                          <tbody>
                                                {displayApplications}

                                          </tbody>
                                    </table>
                                    <ReactPaginate
                                          previousLabel={"Prev"}
                                          nextLabel={"Next"}
                                          pageCount={pageCount}
                                          onPageChange={changePage}
                                          containerClassName={"paginationBttns1"}
                                          previousLinkClassName={"previousBttn1"}
                                          nextLinkClassName={"nextBttn1"}
                                          disabledClassName={"paginationDisabled1"}
                                          activeClassName={"paginationActive1"}
                                    />

                              </div>
                        </div>
                        <div className="tab-pane fade" id="pills-candidate" role="tabpanel" aria-labelledby="pills-candidate-tab">
                              <div className="tab-pane fade show active" id="pills-all-status" role="tabpanel" aria-labelledby="pills-all-status-tab">
                                    <table class="table rounded-10 table-borderless" style={{ background: "#212130", color: "white" }}>


                                          <thead>
                                                <tr>
                                                      <th>
                                                            <input type="checkbox" className="myclass" />
                                                            <hr />
                                                      </th>
                                                      <th>
                                                            Order Id
                                                            <hr />
                                                      </th>
                                                      <th>
                                                            Data Applied
                                                            <hr />
                                                      </th>
                                                      <th className="text-center">Company<hr /></th>
                                                      <th className="text-center">Type<hr /></th>
                                                      <th className="text-center">Position<hr /></th>
                                                      <th>Contact<hr /></th>
                                                      <th>Status<hr /></th>
                                                </tr>

                                          </thead>
                                          <tbody>
                                                {displayApplications}

                                          </tbody>
                                    </table>
                                    <ReactPaginate
                                          previousLabel={"Prev"}
                                          nextLabel={"Next"}
                                          pageCount={pageCount}
                                          onPageChange={changePage}
                                          containerClassName={"paginationBttns1"}
                                          previousLinkClassName={"previousBttn1"}
                                          nextLinkClassName={"nextBttn1"}
                                          disabledClassName={"paginationDisabled1"}
                                          activeClassName={"paginationActive1"}
                                    />

                              </div>
                        </div>
                  </div>







            </>
      );
}

export default ApplicationTable;