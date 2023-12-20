import React from 'react';
import NavBar from '../Components/Navbar.jsx';
import Sidebar from '../Components/Sidebar.jsx';
import IndiaMap from '../Components/Map.jsx';

const Dashboard = () => {
    return(
        <div>
            <NavBar/>
            <div className='d-flex'>
                <Sidebar/>
                <div className='mt-3' style={{marginLeft:'30%'}}>
                    <h1 style={{paddingLeft:'15rem', marginBottom:'2rem'}}>Statewise projects in India</h1>
                <IndiaMap/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;