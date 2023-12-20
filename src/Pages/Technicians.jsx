import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import NavBar from '../Components/Navbar.jsx';
import Sidebar from '../Components/Sidebar.jsx';
import tData from '../assets/data/technicianData.js';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Components/Form.css';
import CloseButton from 'react-bootstrap/CloseButton';

function Technicians() {
  const [searchValue, setSearchValue] = useState('');
  const [visible, setVisibility] = useState(false);

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <NavBar onSearchChange={handleSearchChange} />
      <div className='d-flex'>
        <Sidebar />
        <div className="justify-content-between align-items-center" style={{ paddingLeft: '30%', marginTop:'3%', minWidth:'80%' }}>
          <div>
            <div className='d-flex mb-5 mt-5 justify-content-between align-items-center'>
              <h1 className='heading'>Field Technicians</h1>
              <button onClick={() => setVisibility(true)}>Register</button>
            </div>
            <div>
              {visible ?
                <div>
                  <div className='modal' style={{display: visible ? 'block' : 'none' }}>
    <div className='modal-content' style={{zIndex: 1000, width: 700, padding: 30 }}>
        <div className='mb-3 d-flex justify-content-between align-items-center'>
      <h4>Register as a Technician</h4>
      <button style={{zIndex:'1000', background:'none', border:'none'}} onClick={() => setVisibility(false)}><CloseButton aria-label="Hide" /></button>
      </div>
      <Form>
      <Form.Group> 
          <Form.Label>Enter your full name:</Form.Label> 
          <Form.Control type="text" 
                        placeholder="Enter your full name" /> 
        </Form.Group>
        <Form.Group className='mb-3'> 
          <Form.Label>Enter your contact number:</Form.Label> 
          <Form.Control type="number" placeholder="Enter your contact number" /> 
        </Form.Group>  
        <Form.Group className='mb-3'> 
          <Form.Label>Enter your email address:</Form.Label> 
          <Form.Control type="email" 
                        placeholder="Enter your your email address" /> 
        </Form.Group> 
        <Button variant="primary" type="submit"> 
           Submit
        </Button> 
      </Form>
    </div>
    </div>
                </div> : ""
              }
            </div>
          </div>
          <Table responsive="md">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Assigned Project</th>
            <th>Contact</th>
            <th>Email</th>
          </tr>
        </thead>
        {tData
      .filter((t) => t.name.toLowerCase().includes(searchValue.toLowerCase()))
      .map((t) => (
        <tbody>
          <tr>
            <td>{t.id}</td>
            <td>{t.name}</td>
            <td>{t.project}</td>
            <td>{t.contact}</td>
            <td>{t.email}</td>
          </tr>
        </tbody>
      ))}
`      </Table>

        </div>
      </div>
    </div>
  );
}

export default Technicians;