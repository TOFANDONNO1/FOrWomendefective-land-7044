import React from "react";
import { Route, Routes } from "react-router-dom";
import Cartpage from "../pages/Cartpage";
import Footer from "../pages/Footer";
import Homepage from "../pages/Homepage";

import Navbar from "../pages/Navbar";
import UserPage from "../pages/UserPage";
import WhichListpage from "../pages/WhichListpage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="navbar" element={<Navbar />}></Route>
        <Route path="footer" element={<Footer />}></Route>
        <Route path="cartpage" element={<Cartpage/>}></Route>
        <Route path='whichlistpage' element={<WhichListpage/>}></Route>
        <Route path="userpage" element={<UserPage/>}></Route>
        
      </Routes>
    </div>
  );
};

export default AllRoutes;
