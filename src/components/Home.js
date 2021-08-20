import React from 'react';
import Contact from './Contact';
import Subscribe from './Subscribe';
import Header from './Header';
import HowItWorks from './HowItWorks';
import Categories from './Categories';
import LatestJobs from './LatestJobs';
import PopularCompanies from './PopularCompanies';
import ClientSays from './ClientSays'; 
import Footer from './Footer';
const Home = () => {

      return (
            <>
                  <Header />
                  <HowItWorks />
                  <Categories />
                  <LatestJobs />
                  <PopularCompanies />
                  <ClientSays /> 
                  <Subscribe />
                  <Contact />
                  <Footer />
            </>
      );
}

export default Home;