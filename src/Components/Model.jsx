import React from 'react';
import './Model.css';

const Model = ({ projectId }) => {
    return (
        <div className='modelCard'>
            <h3 className='mb-3'>{projectId}</h3>
            <h3>Model</h3>
            <div id='model-main'>
            
            </div>
        </div>
    );

};

export default Model;