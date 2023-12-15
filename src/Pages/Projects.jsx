import React from 'react';
import NavBar from '../Components/Navbar.jsx';
import Sidebar from '../Components/Sidebar.jsx';
import Project from '../Components/Project.jsx';
import pData from '../assets/data/projectData.js';

const Projects = () => {
    return (
        <div>
            <NavBar />
            <div className='d-flex'>
                <Sidebar />
                <div style={{ paddingLeft: '250px' }}>
                    {pData.map((p) => (
                        <Project key={p.id} pId={p.id} pLocation={p.location} pStatus={p.status} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
