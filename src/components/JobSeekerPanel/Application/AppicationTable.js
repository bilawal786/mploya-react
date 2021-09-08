import React from 'react';
import "./applicationtable.css";
import Allapplication from './Allapplication';
import Onhold from './Onhold';
import Pending from './Pending';
import Candidate from './Candidate';
const ApplicationTable = () => {
      return (
            <>
                  <div className="top-response d-flex flex-row justify-content-between align-items-center "> 
                              <div className="chart-wrapper-dark ">
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
                                                <button className="nav-link rounded-pill py-1" id="pills-candidate-tab" data-bs-toggle="pill" data-bs-target="#pills-candidate" type="button" role="tab" aria-controls="pills-on-hold" aria-selected="false">Candidate</button>
                                          </li>
                                    </ul>
                              </div>
 
                  </div>

                  <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-all-status" role="tabpanel" aria-labelledby="pills-all-status-tab">
                              <Allapplication />
                        </div>
                        <div className="tab-pane fade" id="pills-pending" role="tabpanel" aria-labelledby="pills-pending-tab">
                              <div className="tab-pane fade show active" id="pills-all-status" role="tabpanel" aria-labelledby="pills-all-status-tab">
                                    <Pending />
                              </div>
                        </div>
                        <div className="tab-pane fade" id="pills-on-hold" role="tabpanel" aria-labelledby="pills-on-hold-tab">
                              <div className="tab-pane fade show active" id="pills-all-status" role="tabpanel" aria-labelledby="pills-all-status-tab">
                                    <Onhold />
                              </div>
                        </div>
                        <div className="tab-pane fade" id="pills-candidate" role="tabpanel" aria-labelledby="pills-candidate-tab">
                              <div className="tab-pane fade show active" id="pills-all-status" role="tabpanel" aria-labelledby="pills-all-status-tab">
                                    <Candidate />
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default ApplicationTable;