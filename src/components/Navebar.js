import React, { useState } from 'react';
import Backdrop from "../components/Backdrop/Backdrop";
import Toolbar from "../components/Toolbar/Toolbar";
import SideDrawer from "../components/SideDrawer/SideDrawer";

const Navebar = () => {
      const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
      const drawerToggleClickHandler = () => setSideDrawerOpen(!sideDrawerOpen)
      let backdrop
      if (sideDrawerOpen) {
            backdrop = <Backdrop click={drawerToggleClickHandler} />

      };
      return (
            <>

                  <div className='row'>

                        <>


                              <div style={{ height: '100%' }}>
                                    <Toolbar drawerClickHandler={drawerToggleClickHandler} />
                                    <SideDrawer show={sideDrawerOpen} />
                                    {backdrop}
                              </div>

                        </>

                  </div>


            </>
      );
}

export default Navebar;
