import React from 'react';
import './Model.css';

const Model = ({ projectId }) => {
    return (
        <div className='modelCard'>
            <h3 className='mb-3'>{projectId}</h3>
            <h3>Model</h3>
            <div className='model-main mb-5'>
            </div>
            <div className="model-status mb-2 d-flex w-[31px] h-[31px] bg-zinc-300 rounded-full justify-content-between align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
  <circle cx="15.5" cy="15.5" r="15.5" fill="#D9D9D9"/>
</svg>
<div className="w-[261.01px] h-[0px] border-4 border-zinc-300" style={{width: '16.313rem',
height: '0.3125rem', background: '#DFD9D9', marginTop:'0.5rem'}}></div>
<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
<circle cx="15.5" cy="15.5" r="15.5" fill="#D9D9D9"/>
</svg>
<div className="w-[261.01px] h-[0px] border-4 border-zinc-300" style={{width: '16.313rem',
height: '0.3125rem', background: '#DFD9D9', marginTop:'0.5rem'}}></div>
<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
<circle cx="15.5" cy="15.5" r="15.5" fill="#D9D9D9"/>
</svg>
            </div>
            <div className='d-flex justify-content-between align-items-center' style={{paddingLeft: '20rem',
    paddingRight: '20rem'}}>
                <p>start</p>
                <p>intmediate</p>
                <p>final</p>
            </div>
        </div>
    );
}

export default Model;