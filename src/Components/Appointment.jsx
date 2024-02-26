import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout, Card } from "antd";
import HeaderComponent from "./Header";
import "../assets/sass/appointment.scss";

const { Content } = Layout;

const Appointment = () => {
    const [userData, setUserData] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedHospital, setSelectedHospital] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                //const email="apple@gmail.com"
                const email = localStorage.getItem("userEmail");
                const response = await axios.get(`http://localhost:5000/appointment`, {
                    params: {
                        email: email
                    }
                });
                setUserData(response.data);
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            }
        };
        fetchUserData();
    }, []);
    useEffect(() => {
        const hospital = localStorage.getItem('selectedHospital');
        const city = localStorage.getItem('selectedCity');
        const doctor = localStorage.getItem('selectedDoctor');
        setSelectedCity(city);
        setSelectedHospital(hospital);
        setSelectedDoctor(doctor);
    }, []);
    return (
        <>
            <HeaderComponent />
            <Content>
                <div className="Appointment-Container">
                    <h1>Appointment</h1>
                    <Card>
                        {userData && (
                            <div className="appdetails">
                                <p>Name: {userData.name}</p>
                                <p>Email: {userData.email}</p>
                                <p>Phone: {userData.phone}</p>
                                <p>Gender: {userData.gender}</p>
                                <p>Age: {userData.age}</p>
                                <div>
                                    <h2>city:</h2>
                                    <p>{selectedCity}</p>
                                </div>
                                <div>
                                    <h2>Hospital:</h2>
                                    <p>{selectedHospital}</p>
                                </div><div>
                                    <h2>Doctor:</h2>
                                    <p>{selectedDoctor}</p>
                                </div>

                            </div>
                        )}
                    </Card>
                </div>
            </Content>
        </>
    );
};

export default Appointment;



















// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Layout, Card } from "antd";

// const { Content } = Layout;

// const Appointment = () => {
//     const [userData, setUserData] = useState(null);
//     const [selectedHospital, setSelectedHospital] = useState(null);

//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 const email = localStorage.getItem("userEmail");
//                 const response = await axios.get(`http://localhost:5000/appointment`, {
//                     params: {
//                         email: email
//                     }
//                 });
//                 setUserData(response.data);
//             } catch (error) {
//                 console.error("Failed to fetch user data:", error);
//             }
//         };
//         fetchUserData();
//     }, []);

//     useEffect(() => {
//         // Retrieve the selected hospital from localStorage
//         const hospital = localStorage.getItem('selectedHospital');
//         setSelectedHospital(hospital);
//     }, []);

//     return (
//         <Content>
//             <div className="Appointment-Container">
//                 <h1>Appointment</h1>
//                 <Card>
//                     {userData && (
//                         <div>
//                             <h2>User Data:</h2>
//                             <p>Name: {userData.name}</p>
//                             <p>Email: {userData.email}</p>
//                             {/* Add more fields as needed */}
//                         </div>
//                     )}
//                     {/* Display the selected hospital */}
//                     {selectedHospital && (
//                         <div>
//                             <h2>Selected Hospital:</h2>
//                             <p>{selectedHospital}</p>
//                         </div>
//                     )}
//                 </Card>
//             </div>
//         </Content>
//     );
// };

// export default Appointment;