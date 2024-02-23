import React, { useState, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./App.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import AdminForm from "./Components/AdminForm.jsx";
import Location from "./Components/Location.jsx";
import Hospital from "./Components/Hospital.jsx";
import Doctorlist from "./Components/Doctorlist.jsx";
import DoctorDetails from "./Components/DoctorDetails.jsx";
import { message } from "antd";

const RoutesCond = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("authorized"));
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        {isLoggedIn ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<AdminForm />} />
            <Route path="/location" element={<Location />} />
            <Route path="/hospital" element={<Hospital />} />
            <Route path="/doctorlist" element={<Doctorlist />} />
            <Route path="/doctordetails" element={<DoctorDetails />} />
          </>
        ) : (
          <Route path="*" element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesCond;
