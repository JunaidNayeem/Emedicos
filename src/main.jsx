import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./App.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import "./index.css";
import AdminForm from "./Components/AdminForm.jsx";
import Layout from "antd/es/layout/layout.js";
import Location from "./Components/Location.jsx";
import Hospital from "./Components/Hospital.jsx";
import Doctorlist from "./Components/Doctotlist.jsx";
import DoctorDetails from "./Components/DoctorDetails.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<AdminForm />} />
        <Route path="/location" element={<Location />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/doctorlist" element={<Doctorlist />} />
        <Route path="/doctordetails" element={<DoctorDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
