import React from "react";
import Navebar from "../Navebar";
import Footer from "../Footer";

// import MUIDataTable from "mui-datatables";
const About = () => {
      // const columns = ["Order ID", "Date Applied", "Company", "Type", "Position", "Contact", "Status"];
      // const data = [
      //       ["Joe James", "Test Corp", "Yonkers", "NY", "Test", "Test", "Test", "Test", "Test"],


      // ];
      // const options = {
      //       filterType: 'checkbox',
      // };
      return (
            <>
                  <div className="container">
                        <Navebar />
                        <h1 className="text-center mt-5">About</h1>
                        <Footer />
                        {/* <MUIDataTable className="mt-5"
                              title={"Employee List"}
                              data={data}
                              columns={columns}
                              options={options}
                        /> */}
                  </div>


            </>
      );
}

export default About;