import React, { Component } from 'react';
import { CitySelect, CountrySelect, StateSelect } from 'react-country-state-city';
import 'react-country-state-city/dist/react-country-state-city.css';
import HeaderComponent from "./Header";
import "../assets/sass/location.scss";
import { Layout, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Content } = Layout;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryid: 101, 
            stateid: 4037, 
            cityid: 0,
        };
    }

    handleCityChange = (e) => {
        this.setState({ cityid: e.id });
        localStorage.setItem('selectedCity', e.name); 
    }

    render() {
        const { countryid, stateid, cityid } = this.state;
        return (
            <>
                <HeaderComponent />
                <Content>
                    <div className="location">
                        <h6>Country</h6>
                        <CountrySelect
                            value={countryid} 
                            disabled={true} 
                            onChange={this.handleCountryChange}
                            placeHolder="INDIA"
                        />
                        <h6>State</h6>
                        <StateSelect
                            countryid={countryid}
                            value={stateid} 
                            disabled={true} 
                            onChange={this.handleStateChange}
                            placeHolder="BIHAR"
                        />
                        <h6>City</h6>
                        <CitySelect
                            countryid={countryid}
                            stateid={stateid}
                            onChange={this.handleCityChange}
                            placeHolder="Select City"
                        />
                        <Link to="/hospital"> 
                            <Button type="primary" style={{ marginTop: '20px' }}>Next</Button>
                        </Link>
                    </div>
                </Content>
            </>
        );
    }
}
