import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
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