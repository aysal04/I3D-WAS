import React from 'react';
import {useState} from 'react';
import NavBar from '../Components/Navbar.jsx';
import Sidebar from '../Components/Sidebar.jsx';
import Project from '../Components/Project.jsx';
import pData from '../assets/data/projectData.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { MDBBtn } from 'mdb-react-ui-kit';

const Projects = () => {
    const addProject= {
        borderRadius: '1.25rem',
        border: '1px solid rgba(172, 179, 221, 0.57)',
        background: 'rgba(90, 103, 186, 1)',
        width:'auto',
        marginLeft: '10rem',
        }
    const submit= {
        borderRadius: '1.25rem',
        border: '1px solid rgba(172, 179, 221, 0.57)',
        background: 'rgba(90, 103, 186, 1)',
        width:'auto',
        marginTop: '15px'
    }
    const button={
        marginLeft: '10px'
        
    }

    const [show, setShow] = useState(false);
    const [Lis, addLis] = useState(pData)
    const [projectName, setProjectName] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const appendToLis = () => {
        Lis.push({
          id: projectName.toString(),
          location: selectedRegion,
          status: 'New Status'
        });
        addLis([...Lis]);
        localStorage.setItem('pData', JSON.stringify(Lis));
      };
      const [searchValue, setSearchValue] = useState('');
      const handleSearchChange = (value) => {
          setSearchValue(value);
        };
    return (
        <div>
            <NavBar onSearchChange={handleSearchChange} />
            <div className='d-flex'>
                <Sidebar />
                <div style={{ paddingLeft: '250px' }}>
                    <div>
                    <Button variant="primary" style={addProject} onClick={handleShow}>
                        <h4 style={{'margin':'0'}}>Add Project</h4>
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title><h1>Enter Project Details</h1></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                            <div class="form-group ">
                                <label for="exampleInput"><h4>Project Name/Id</h4></label>
                                <input type="text" class="form-control form-control-lg" id="project id" placeholder="Enter Project Name/Id" onChange={(e) => setProjectName(e.target.value)} />
                                <small class="form-text text-muted">Once submitted you cannot change the project name</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1"><h4>Select Region</h4></label>
                                <select class="form-control form-control-lg" onChange={(e) => setSelectedRegion(e.target.value)}>
                                    <option disabled selected>select region</option>
                                    <option>TamilNadu</option>
                                    <option>Rajasthan</option>
                                    <option>Telangana</option>
                                    <option>Gujarat</option>
                                    <option>Chattisgarh</option>
                                    <option>Kerala</option>
                                </select>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Confirm Submission</label>
                            </div>
                            <button type="submit" onClick={appendToLis} style={submit} class="btn btn-primary"><h5 style={{'margin':'0'}}>Submit</h5></button>
                            </form>
                        </Modal.Body>
                    </Modal>
                    </div>
    {pData
      .filter((p) => p.location.toLowerCase().includes(searchValue.toLowerCase()))
      .map((p) => (
        <Project key={p.id} pId={p.id} pLocation={p.location} pStatus={p.status} />
      ))}
  </div>
            </div>
        </div>
    );
}

export default Projects;
