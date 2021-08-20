import React from 'react';
const Search = () => {

      return (
            <>
                  <div className="container">
                  
                        <div className="row justify-content-center">
                                    <div className='col-sm-8 mb-5' style={{ backgroundColor: '#067d1f',marginTop:'40px' }}>
                                          
                                               <form className="row gx-3 gy-2 align-items-center justify-content-around">
                        <div className="col-sm-3 p-2">
                      
                        <input type="text" className="form-control"  placeholder="Keywords" />
                        </div>
                        <div className="col-sm-3 p-2">
                       
                              <input type="text" className="form-control" placeholder="Location" /> 
                        
                        </div>
                        <div className="col-sm-3 p-2">
                      
                        <input type="text" className="form-control"  placeholder="Category" /> 

                        </div>
                       
                        <div className="col-auto">
                        <button type="submit" className="btn mt-2 mb-2" style={{backgroundColor:'white'}}>Search</button>
                        </div>
                        </form>

                                    
                                    </div>
                        </div>

                        
                  </div>
                
            </>
      );
}

export default Search;