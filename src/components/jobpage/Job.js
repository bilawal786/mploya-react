import React from 'react';
import Contact from '../Contact';
import Footer from '../Footer';
import Navebar from '../Navebar';
import Subscribe from '../Subscribe';
import Jobsection from './Jobsection';
import Map from './Map';
import Search from './Search';


const Job = () => {

      return (
            <>
                  <Navebar />
                  <Map />
                  <Search />
                  <Jobsection />
                  <Subscribe />
                  <Contact />
                  <Footer />

            </>
      );
}

export default Job;