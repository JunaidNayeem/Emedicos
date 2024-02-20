import React, { Component } from 'react';
import { CitySelect, CountrySelect, StateSelect, LanguageSelect } from 'react-country-state-city';
import 'react-country-state-city/dist/react-country-state-city.css';
import HeaderComponent from "./Header";
import "../assets/sass/location.scss";

const { Content } = Layout;
import { Layout } from 'antd';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryid: 0,
            stateid: 0
        };
    }

    handleCountryChange = (e) => {
        this.setState({ countryid: e.id });
    }

    handleStateChange = (e) => {
        this.setState({ stateid: e.id });
    }

    render() {
        const { countryid, stateid } = this.state;
        return (
            <>
                <HeaderComponent />
                <Content>
                    <div className="location">
                        <h6>Country</h6>
                        <CountrySelect
                            onChange={this.handleCountryChange}
                            placeHolder="Select Country"
                        />
                        <h6>State</h6>
                        <StateSelect
                            countryid={countryid}
                            onChange={this.handleStateChange}
                            placeHolder="Select State"
                        />
                        <h6>City</h6>
                        <CitySelect
                            countryid={countryid}
                            stateid={stateid}
                            onChange={(e) => {
                                console.log(e);
                            }}
                            placeHolder="Select City"
                        />
                    </div>
                </Content>
            </>



        );
    }
}

export default App;
