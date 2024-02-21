import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Card, Button } from 'antd';
import "../assets/sass/doctordetails.scss";
import HeaderComponent from "./Header";
const { Meta } = Card;

const tabListNoTitle = [
    {
        key: 'Specialist',
        tab: 'Specialist',
    },
    {
        key: 'Experience',
        tab: 'Experience',
    },

];
const contentListNoTitle = {
    Specialist: <p>Cardiologist</p>,
    Experience: <p>19yrs with more than 100 successfull operation.</p>,

};

const App = () => {
    const [activeTabKey, setActiveTabKey] = useState('article');

    const onTabChange = (key) => {
        setActiveTabKey(key);
    };

    return (
        <>
            <HeaderComponent />
            <div className='D-details'>
                <Card className='card1'
                    cover={
                        <img
                            alt="Doctor"
                            src="https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@2x.jpg"
                        />
                    }
                >
                    <Meta
                        title="Doctor 1"
                        description="Heart specilist "
                    />
                </Card>
                <Card className='card2'
                    tabList={tabListNoTitle}
                    activeTabKey={activeTabKey}
                    onTabChange={onTabChange}
                >
                    {contentListNoTitle[activeTabKey]}
                </Card>
                <Link to="/">
                    <div className='Button'><Button type="primary">Book Appointment</Button></div>
                </Link>

            </div>
        </>
    );
};

export default App;

