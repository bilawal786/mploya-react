import React from 'react';
const Search = () => {

      return (
            <>
                  <div className="container">

                        <div className="row justify-content-center">

                              <div className='col-sm-10 mb-5 rounded p-4' style={{ backgroundColor: '#067d1f', marginTop: '40px' }}>
                                    {/* <form className="row gx-3 gy-2 align-items-center justify-content-around" style={{ background: 'white', borderRadius: 5 }}>
                                          <div className="col-sm-3 p-2 sub-input-wrapper">
                                                <input type="text" className="form-control border-0" placeholder="&#xf084; &nbsp; Keyword" />
                                          </div>
                                          <div className="col-sm-3 p-2 sub-input-wrapper">
                                                <input type="text" className="form-control border-0" placeholder="&#xf041; &nbsp; Location" />
                                          </div>
                                          <div className="col-sm-3 p-2 sub-input-wrapper">
                                                <input type="text" className="form-control border-0" placeholder="&#xf022; &nbsp; Category" />
                                          </div>
                                          <div className="col-auto">
                                                <button type="submit" className="btn px-3 mt-2 mb-2" style={{ backgroundColor: '#c8eddc' }}>Search</button>
                                          </div>
                                    </form> */}
                                    <form action="" className="bg-white rounded">
                                          <div className="top-response d-flex flex-row justify-content-between align-items-center">

                                                <div className="col-sm-3 p-2 sub-input-wrapper">
                                                      <input type="text" className="form-control border-0" placeholder="&#xf084; &nbsp; Keyword" />
                                                </div>
                                                <div className="col-sm-3 p-2 sub-input-wrapper">
                                                      <input type="text" className="form-control border-0" placeholder="&#xf041; &nbsp; Location" />
                                                </div>
                                                <div className="col-sm-3 p-2 sub-input-wrapper">
                                                      <input type="text" className="form-control border-0" placeholder="&#xf022; &nbsp; Category" />
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