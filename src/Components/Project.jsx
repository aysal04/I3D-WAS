import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
import './Project.css';

const Project = ({ pId, pLocation, pStatus }) => {
    const navigate = useNavigate(); 

    const handleCardClick = () => {
        navigate(`/project/${pId}`);
    };

    const handleButtonClick = () => {
        navigate(`/report`);
    };

    return (
        <div className='projectCard'>
            <div onClick={handleCardClick} className='d-flex justify-content-between align-items-center mb-3'>
                <h3>{pId}</h3>
                <div>
                    <LocationOnIcon/> {pLocation}
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center mb-3'>
            <p>{pStatus}</p>
            <button onClick={handleButtonClick}>Generate Report</button>
            </div>
        </div>
    );
}

export default Project;
