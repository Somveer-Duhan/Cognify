import React from 'react';
import Navbar from '../components/Navbar';
import './Dashboard.css';
import {useAuth} from '../components/authContext';

const Dashboard=()=>{
    const {logout}=useAuth();
    const handleLogout=()=>{
        logout();
    }
    return(
        <div className='dashboard-page'>
            <Navbar/>
            <div className='main-content'>
            <h1>Dashboard Page</h1>
            <p>all the content will be here</p>
            <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};
export default Dashboard;