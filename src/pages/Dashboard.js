import React from 'react';
import Navbar from '../components/Navbar';
import './Dashboard.css';

const Dashboard=()=>{
    return(
        <div className='dashboard-page'>
            <Navbar/>
            <div className='main-content'>
            <h1>Dashboard Page</h1>
            <p>all the content will be here</p>
            </div>
        </div>
    );
};
export default Dashboard;