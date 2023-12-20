import React from 'react';
import NavBar from '../Components/Navbar.jsx';
import Sidebar from '../Components/Sidebar.jsx';
import Logo from "../Components/Logo.jsx";

function Home(){
    return(
        <div>
            <NavBar/>
            <div className='d-flex'>
                <Sidebar/>
                <div className='mt-5'>
                <Logo/>
                </div>
            </div>
        </div>
    );
}

export default Home;