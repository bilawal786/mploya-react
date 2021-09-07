import React from 'react';


const Subscribe = () => {

      return (
            <>
 
                        <div className="row justify-content-center row">

                              <div className="col-sm-12 mt-5 text-center mb-5 rounded" style={{ backgroundColor: '#067d1f' }}>
                                    <h1 style={{ color: 'white', marginTop: '80px' }}>Subscribe to our newsletter</h1>
                                    <p style={{ color: 'white' }}>Get notification about tips, new clothes and exclusive promo news just for you.</p>

                                    <div className="row justify-content-center">
                                          <div className='col-sm-4 col-md-6 col-lg-4 mb-5' style={{ marginTop: '40px' }}>



                                                <form action="" style={{background: 'white', borderRadius:5}}>
                                                      <div className="d-flex flex-row justify-content-between align-items-center">
                                                                   
                                                                  <input type="email" className="form-control border-0 m-2" placeholder="&#xf0e0; &nbsp; Enter you email address" style={{fontFamily: 'FontAwesome'}}/>

                                                                  <button type="submit" className="btn subscribebtn m-2" style={{ backgroundColor: '#067d1f', color: 'white' }}>Subscribe</button>

                                                      </div>
                                                       

                                                </form>

                                          </div>
                                    </div>




                              </div>

                        </div>
                 
            </>
      );
}

export default Subscribe;