import React,{useState} from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";

// import Home from "./App.jsx";
// import Login from "./Components/Login.jsx";
// import Register from "./Components/Register.jsx";
import "./index.css";
// import AdminForm from "./Components/AdminForm.jsx";
// import Layout from "antd/es/layout/layout.js";
// import Location from "./Components/Location.jsx";
// import Hospital from "./Components/Hospital.jsx";
// import Doctorlist from "./Components/Doctotlist.jsx";
// import DoctorDetails from "./Components/DoctorDetails.jsx";
 import RoutesCond from "./RoutesCond.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>  
    <RoutesCond/>
  </React.StrictMode>
);




{/* <BrowserRouter>
      <Routes>
      {/* const [isLoggedIn, setIsLoggedIn] = useState(false); */}

    //     <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
    //     <Route path="/register" element={<Register />} />
    //     {isLoggedIn ? (
    //       <>
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/admin" element={<AdminForm />} />
    //     <Route path="/location" element={<Location />} />
    //     <Route path="/hospital" element={<Hospital />} />
    //     <Route path="/doctorlist" element={<Doctorlist />} />
    //     <Route path="/doctordetails" element={<DoctorDetails />} />
    //     </>
    //     ) : (
    //       <Navigate to="/" state={{ alertMessage: 'Please login First !!!' }} />
    //     )}
    //   </Routes>
    // </BrowserRouter> */}