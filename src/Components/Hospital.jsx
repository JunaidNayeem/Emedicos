import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { Layout, Button, Select } from 'antd';
import HeaderComponent from "./Header";
import "../assets/sass/hospital.scss";
const { Content } = Layout;
const { Option } = Select;

class Hospital extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedHospital: null,
            hospitals: ['Hospital A', 'Hospital B', 'Hospital C'] 
        };
    }

    handleHospitalChange = (value) => {
        this.setState({ selectedHospital: value });
    }

    render() {
        const { hospitals, selectedHospital } = this.state;
        return (
            <>
                <HeaderComponent />
                <Content>
                    <div className="hospital">
                        <h2>Select Hospital</h2>
                        <Select
                            style={{ width: 200 }}
                            placeholder="Select a hospital"
                            onChange={this.handleHospitalChange}
                            value={selectedHospital}
                        >
                            {hospitals.map((hospital, index) => (
                                <Option key={index} value={hospital}>
                                    {hospital}
                                </Option>
                            ))}
                        </Select>
                        <Link to="/doctorlist"> 
                            <Button type="primary" style={{ marginTop: '20px' }}>Next</Button>
                        </Link>
                    </div>
                </Content>
            </>
        );
    }
}

export default Hospital;
