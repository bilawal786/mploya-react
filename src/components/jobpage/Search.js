import React from 'react';
const Search = () => {

      return (
            <>
                  <div className="container">

                        <div className="row justify-content-center">

                              <div className='col-sm-10 mb-5 rounded p-4' style={{ backgroundColor: '#067d1f', marginTop: '40px' ,zIndex: 1}}> 
                                    <form action="" className="bg-white rounded">
                                          <div className="top-response d-flex flex-row justify-content-between align-items-center">

                                                <div className="col-sm-3 p-2">
                                                      <input type="text" className="form-control border-0" placeholder="&#xf084; &nbsp; Keyword" style={{fontFamily: 'FontAwesome'}} />
                                                </div>
                                                <div className="col-sm-3 p-2">
                                                      <input type="text" className="form-control border-0" placeholder="&#xf041; &nbsp; Location" style={{fontFamily: 'FontAwesome'}} />
                                                </div>
                                                <div className="col-sm-3 p-2">
                                                      <input type="text" className="form-control border-0" placeholder="&#xf022; &nbsp; Category" style={{fontFamily: 'FontAwesome'}} />
                                                </div>


                                                <button type="submit" className="btn btn-success m-2">Search</button>
                                          </div>


                                    </form>




                              </div>
                        </div>


                  </div>

            </>
      );
}

export default Search;