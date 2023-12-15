import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Components/Navbar.jsx';
import Sidebar from '../Components/Sidebar.jsx';
import Model from '../Components/Model.jsx';

const Models = () => {
    const { id } = useParams();
    return(
        <div>
            <NavBar/>
            <div className='d-flex'>
                <Sidebar/>
                <div>
                <Model projectId={id}/>
                </div>
            </div>
        </div>
    );
}

export default Models;