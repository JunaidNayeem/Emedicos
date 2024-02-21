import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { Layout, Button, Select } from 'antd';
import HeaderComponent from "./Header";
import "../assets/sass/hospital.scss";
const { Content } = Layout;
const { Option } = Select;

class Doctorlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDoctorlist: null,
            Doctorlists: ['Doctor A', 'Doctor B', 'Doctor C'] 
        };
    }

    handleDoctorlistChange = (value) => {
        this.setState({ selectedDoctorlist: value });
    }

    render() {
        const { Doctorlists, selectedDoctorlist } = this.state;
        return (
            <>
                <HeaderComponent />
                <Content>
                    <div className="hospital">
                        <h2>Select Doctor For You</h2>
                        <Select
                            style={{ width: 200 }}
                            placeholder="Select a Doctor from list"
                            onChange={this.handleDoctorlistChange}
                            value={selectedDoctorlist}
                        >
                            {Doctorlists.map((Doctorlist, index) => (
                                <Option key={index} value={Doctorlist}>
                                    {Doctorlist}
                                </Option>
                            ))}
                        </Select>
                        <Link to="/doctordetails"> 
                            <Button type="primary" style={{ marginTop: '20px' }}>Next</Button>
                        </Link>
                    </div>
                </Content>
            </>
        );
    }
}

export default Doctorlist;
