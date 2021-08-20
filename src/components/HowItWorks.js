import React from 'react';
import { NavLink } from "react-router-dom"; 

const HowItWorks = () => {

      return (
            <>
            <div className='container my-container'>
                <div className='section-title'>
                    <h4>How it 
                    <span style={{color:"#067d1f"}}> Works</span>
                    </h4>
                    <p>Explore the following these steps will helps you to find the job</p>
                </div>
                
                
                <div className="row">
                    
                    <div className="card" style={{width:300, border:'none', margin:'auto'}}>
                    <div className="card-body">
                        <h1 className="card-title" style={{color:'#067d1f'}}>1</h1>
                        <span className="title-underline">Register Account</span> 
                        <p className="card-text my-3">Register Account to find job</p>  
                        <NavLink className="section-link" to="/register">Register Account</NavLink>
                    
                    </div>
                    
                    </div>
                    <div className="card" style={{width:300, border:'none', margin:'auto'}}>
                    <div className="card-body">
                        <h1 className="card-title" style={{color:'#067d1f'}}>2</h1>
                        <span className="title-underline">Find Job</span> 
                        <p className="card-text my-3">Search for the job you want.</p>   
                        <NavLink className="section-link" to="/jobs">Find Job</NavLink>
                    </div>
                    
                    </div>
                    <div className="card" style={{width:300, border:'none', margin:'auto'}}>
                    <div className="card-body">
                        <h1 className="card-title" style={{color:'#067d1f'}}>3</h1>
                        <span className="title-underline">Apply Job</span> 
                        <p className="card-text my-3">Apply to the company and wait.</p>                           
                        <NavLink className="section-link" to="/jobs">Apply Job</NavLink>
                    </div>
                    
                    </div>
                </div>
                </div>
                 
                 
            </>
      );
}
export default HowItWorks;