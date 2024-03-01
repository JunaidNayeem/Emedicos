import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appointment from "./Components/Appointment.jsx";
import QueuePage from "./Components/QueuePage.jsx";

const RoutesCond = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/" element={<Register />} /> */}
        <Route path="/" element={<QueuePage />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesCond;
