import React from 'react';

const Header = () => {
      return (
            <>

                  <div className="row">
                        <div className="col-sm-8">
                              
                              <div className='row rowbg'>
                                     
                                    
                                    <div className='col header-input-wrapper'> 
                                          <div className='col-sm-12 d-flex justify-content-center align-items-center' style={{ marginBottom: '200px' }}>
                                                
                                                
                                                
                                                
                                               

                                                <div className="col-sm-8 ">
                                                      <p className="mainh text-success">Best Job Finder 2021</p>
                                                      <h1>Find A Job That Matches With Your Passion</h1>
                                                      <p className="text-muted">We'll hepl you with the tools we've created to find the jobs you've been looking for</p>
 
                                                      <form className="p-2 header-form" style={{ background: 'white', borderRadius: 5 }}>
                                                            <div className="sub-input-wrapper d-flex flex-row justify-content-between align-items-center">
                                                                   
                                                                  <input type="text" className="form-control border-0 m-2" placeholder="&#xf002; &nbsp; Job Title"/>
                                                                  <input type="text" className="form-control border-0 m-2" placeholder="&#xf041; &nbsp; Location"/>
                                                                    
                                                                        <button type="submit" className="btn btn-success m-2">Search</button>
                                                              

                                                                  

                                                            </div>
                                                             

                                                      </form>
                                                </div>

                                          </div>

                                    </div>
                              </div>

                        </div>
                        <div className="col-sm-4 header-img-2">

                        </div>
                  </div>

            </>
      );
}

export default Header;