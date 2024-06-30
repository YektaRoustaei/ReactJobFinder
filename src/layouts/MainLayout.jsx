import React from 'react';
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';

const MainLayout = () => {
  return (
      <>
          <Navbar/>
          {/*act as place holder for placing child components*/}
          <Outlet/>
          {/* show Toastify notifications*/}
          <ToastContainer/>
          <Footer/>
      </>
  )

}
export default MainLayout;