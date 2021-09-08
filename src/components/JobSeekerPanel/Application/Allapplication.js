import React from "react";
import ReactPaginate from 'react-paginate';


const Allapplication = () => {
      return (
            <>

                  <div class="app-card app-card-orders-table shadow-sm mb-5">
                        <div class="app-card-body">
                              <div class="table-responsive">
                                    <table class="table  mb-0 text-left table-borderless" style={{ backgroundColor: "#212130" }}>
                                          <thead>
                                                <tr>
                                                      <th><input class="form-check-input" type="checkbox" /><hr /></th>
                                                      <th class="cell text-white" >Order Id<hr /></th>
                                                      <th class="cell text-white">Data Applied<hr /></th>
                                                      <th class="cell text-white">Company<hr /></th>
                                                      <th class="cell text-white">Type<hr /></th>
                                                      <th class="cell text-white">Position<hr /></th>
                                                      <th class="cell text-white">Contact<hr /></th>
                                                      <th class="cell text-white">Status<hr /></th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                <tr>
                                                      <td><input class="form-check-input mt-2" type="checkbox" /></td>
                                                      <td class="cell text-white text-white">#000123456</td>
                                                      <td class="cell text-white"><span class="truncate">Nov 21th 2020 09:21 AM</span></td>
                                                      <td class="cell text-white"><img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />&nbsp;&nbsp;&nbsp;&nbsp;Bubbles Studios</td>
                                                      <td class="cell text-white">FULL TIME</td>
                                                      <td class="cell text-white">UI Designer</td>
                                                      <td class="cell text-white"><i className="fa fa-phone"></i>&nbsp; 012 3123412 441</td>
                                                      <td class="cell text-white"><button className="btn btn-outline-light rounded-pill shadow" style={{ width: "150px" }}>PENDING</button></td>
                                                      <td class="cell "><button className="btn-sm border-0 text-white" style={{ backgroundColor: "#067d1f" }}>View</button></td>
                                                </tr>
                                                <tr>
                                                      <td><input class="form-check-input mt-2" type="checkbox" /></td>
                                                      <td class="cell text-white text-white">#000123456</td>
                                                      <td class="cell text-white"><span class="truncate">Nov 21th 2020 09:21 AM</span></td>
                                                      <td class="cell text-white"><img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />&nbsp;&nbsp;&nbsp;&nbsp;Bubbles Studios</td>
                                                      <td class="cell text-white">FULL TIME</td>
                                                      <td class="cell text-white">UI Designer</td>
                                                      <td class="cell text-white"><i className="fa fa-phone"></i>&nbsp; 012 3123412 441</td>
                                                      <td class="cell text-white"><button className="btn btn-outline-success rounded-pill shadow" style={{ width: "150px" }}>ON HOLD</button></td>
                                                      <td class="cell "><button className="btn-sm border-0 text-white" style={{ backgroundColor: "#067d1f" }}>View</button></td>
                                                </tr>
                                                <tr>
                                                      <td><input class="form-check-input mt-2" type="checkbox" /></td>
                                                      <td class="cell text-white text-white">#000123456</td>
                                                      <td class="cell text-white"><span class="truncate">Nov 21th 2020 09:21 AM</span></td>
                                                      <td class="cell text-white"><img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />&nbsp;&nbsp;&nbsp;&nbsp;Bubbles Studios</td>
                                                      <td class="cell text-white">FULL TIME</td>
                                                      <td class="cell text-white">UI Designer</td>
                                                      <td class="cell text-success"><i className="fa fa-phone"></i>&nbsp; 012 3123412 441</td>
                                                      <td class="cell text-white"><button className="btn btn-outline-danger rounded-pill shadow" style={{ width: "150px" }}>CANDIDATE</button></td>
                                                      <td class="cell "><button className="btn-sm border-0 text-white" style={{ backgroundColor: "#067d1f" }}>View</button></td>
                                                </tr>
                                                <tr>
                                                      <td><input class="form-check-input mt-2" type="checkbox" /></td>
                                                      <td class="cell text-white text-white">#000123456</td>
                                                      <td class="cell text-white"><span class="truncate">Nov 21th 2020 09:21 AM</span></td>
                                                      <td class="cell text-white"><img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />&nbsp;&nbsp;&nbsp;&nbsp;Bubbles Studios</td>
                                                      <td class="cell text-white">FULL TIME</td>
                                                      <td class="cell text-white">UI Designer</td>
                                                      <td class="cell text-success"><i className="fa fa-phone"></i>&nbsp; 012 3123412 441</td>
                                                      <td class="cell text-white"><button className="btn btn-outline-light rounded-pill shadow" style={{ width: "150px" }}>PENDING</button></td>
                                                      <td class="cell "><button className="btn-sm border-0 text-white" style={{ backgroundColor: "#067d1f" }}>View</button></td>
                                                </tr>
                                                <tr>
                                                      <td><input class="form-check-input mt-2" type="checkbox" /></td>
                                                      <td class="cell text-white text-white">#000123456</td>
                                                      <td class="cell text-white"><span class="truncate">Nov 21th 2020 09:21 AM</span></td>
                                                      <td class="cell text-white"><img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />&nbsp;&nbsp;&nbsp;&nbsp;Bubbles Studios</td>
                                                      <td class="cell text-white">FULL TIME</td>
                                                      <td class="cell text-white">UI Designer</td>
                                                      <td class="cell text-success"><i className="fa fa-phone"></i>&nbsp; 012 3123412 441</td>
                                                      <td class="cell text-white"><button className="btn btn-outline-success rounded-pill shadow" style={{ width: "150px" }}>ON HOLD</button></td>
                                                      <td class="cell "><button className="btn-sm border-0 text-white" style={{ backgroundColor: "#067d1f" }}>View</button></td>
                                                </tr>
                                                <tr>
                                                      <td><input class="form-check-input mt-2" type="checkbox" /></td>
                                                      <td class="cell text-white text-white">#000123456</td>
                                                      <td class="cell text-white"><span class="truncate">Nov 21th 2020 09:21 AM</span></td>
                                                      <td class="cell text-white"><img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />&nbsp;&nbsp;&nbsp;&nbsp;Bubbles Studios</td>
                                                      <td class="cell text-white">FULL TIME</td>
                                                      <td class="cell text-white">UI Designer</td>
                                                      <td class="cell text-success"><i className="fa fa-phone"></i>&nbsp; 012 3123412 441</td>
                                                      <td class="cell text-white"><button className="btn btn-outline-danger rounded-pill shadow" style={{ width: "150px" }}>CANDIDATE</button></td>
                                                      <td class="cell "><button className="btn-sm border-0 text-white" style={{ backgroundColor: "#067d1f" }}>View</button></td>
                                                </tr>
                                                <tr>
                                                      <td><input class="form-check-input mt-2" type="checkbox" /></td>
                                                      <td class="cell text-white text-white">#000123456</td>
                                                      <td class="cell text-white"><span class="truncate">Nov 21th 2020 09:21 AM</span></td>
                                                      <td class="cell text-white"><img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />&nbsp;&nbsp;&nbsp;&nbsp;Bubbles Studios</td>
                                                      <td class="cell text-white">FULL TIME</td>
                                                      <td class="cell text-white">UI Designer</td>
                                                      <td class="cell text-success"><i className="fa fa-phone"></i>&nbsp; 012 3123412 441</td>
                                                      <td class="cell text-white"><button className="btn btn-outline-light rounded-pill shadow" style={{ width: "150px" }}>PENDING</button></td>
                                                      <td class="cell "><button className="btn-sm border-0 text-white" style={{ backgroundColor: "#067d1f" }}>View</button></td>
                                                </tr>
                                                <tr>
                                                      <td><input class="form-check-input mt-2" type="checkbox" /></td>
                                                      <td class="cell text-white text-white">#000123456</td>
                                                      <td class="cell text-white"><span class="truncate">Nov 21th 2020 09:21 AM</span></td>
                                                      <td class="cell text-white"><img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />&nbsp;&nbsp;&nbsp;&nbsp;Bubbles Studios</td>
                                                      <td class="cell text-white">FULL TIME</td>
                                                      <td class="cell text-white">UI Designer</td>
                                                      <td class="cell text-success"><i className="fa fa-phone"></i>&nbsp; 012 3123412 441</td>
                                                      <td class="cell text-white"><button className="btn btn-outline-danger rounded-pill shadow" style={{ width: "150px" }}>CANDIDATE</button></td>
                                                      <td class="cell "><button className="btn-sm border-0 text-white" style={{ backgroundColor: "#067d1f" }}>View</button></td>
                                                </tr>
                                                <tr>
                                                      <td><input class="form-check-input mt-2" type="checkbox" /></td>
                                                      <td class="cell text-white text-white">#000123456</td>
                                                      <td class="cell text-white"><span class="truncate">Nov 21th 2020 09:21 AM</span></td>
                                                      <td class="cell text-white"><img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />&nbsp;&nbsp;&nbsp;&nbsp;Bubbles Studios</td>
                                                      <td class="cell text-white">FULL TIME</td>
                                                      <td class="cell text-white">UI Designer</td>
                                                      <td class="cell text-success"><i className="fa fa-phone"></i>&nbsp; 012 3123412 441</td>
                                                      <td class="cell text-white"><button className="btn btn-outline-success rounded-pill shadow" style={{ width: "150px" }}>ON HOLD</button></td>
                                                      <td class="cell "><button className="btn-sm border-0 text-white" style={{ backgroundColor: "#067d1f" }}>View</button></td>
                                                </tr>
                                                <tr>
                                                      <td><input class="form-check-input mt-2" type="checkbox" /></td>
                                                      <td class="cell text-white text-white">#000123456</td>
                                                      <td class="cell text-white"><span class="truncate">Nov 21th 2020 09:21 AM</span></td>
                                                      <td class="cell text-white"><img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />&nbsp;&nbsp;&nbsp;&nbsp;Bubbles Studios</td>
                                                      <td class="cell text-white">FULL TIME</td>
                                                      <td class="cell text-white">UI Designer</td>
                                                      <td class="cell text-success"><i className="fa fa-phone"></i>&nbsp; 012 3123412 441</td>
                                                      <td class="cell text-white"><button className="btn btn-outline-light rounded-pill shadow" style={{ width: "150px" }}>PENDING</button></td>
                                                      <td class="cell "><button className="btn-sm border-0 text-white" style={{ backgroundColor: "#067d1f" }}>View</button></td>
                                                </tr>
                                                <tr>
                                                      <td><input class="form-check-input mt-2" type="checkbox" /></td>
                                                      <td class="cell text-white text-white">#000123456</td>
                                                      <td class="cell text-white"><span class="truncate">Nov 21th 2020 09:21 AM</span></td>
                                                      <td class="cell text-white"><img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />&nbsp;&nbsp;&nbsp;&nbsp;Bubbles Studios</td>
                                                      <td class="cell text-white">FULL TIME</td>
                                                      <td class="cell text-white">UI Designer</td>
                                                      <td class="cell text-success"><i className="fa fa-phone"></i>&nbsp; 012 3123412 441</td>
                                                      <td class="cell text-white"><button className="btn btn-outline-danger rounded-pill shadow" style={{ width: "150px" }}>CANDIDATE</button></td>
                                                      <td class="cell "><button className="btn-sm border-0 text-white" style={{ backgroundColor: "#067d1f" }}>View</button></td>
                                                </tr>
                                          </tbody>
                                    </table>
                              </div>

                        </div>
                  </div>
                  <div className="overflow-auto">
                        <ReactPaginate
                              previousLabel={"Prev"}
                              nextLabel={"Next"}
                              // pageCount={pageCount}
                              // onPageChange={changePage}
                              containerClassName={"paginationBttns1"}
                              previousLinkClassName={"previousBttn1"}
                              nextLinkClassName={"nextBttn1"}
                              disabledClassName={"paginationDisabled1"}
                              activeClassName={"paginationActive1"}
                        />

                  </div>

            </>
      );
}

export default Allapplication;