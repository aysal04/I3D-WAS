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
                <div style={{ paddingLeft: '300px' }}>
                    <div>
                    <div className='d-flex justify-content-between align-items-center m-5' style={{paddingLeft:'3rem'}}>
                    <h1>Projects</h1>
                    <Button variant="primary" style={addProject} onClick={handleShow}>
                        <h4 style={{'margin':'0'}}>Add Project</h4>
                    </Button>
                    </div>
                    <Modal style={{paddingTop:'25vh',right:'10rem'}} show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title><h5>Enter Project Details</h5></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                            <div className="form-group ">
                                <label for="exampleInput"><h6>Project Name/Id</h6></label>
                                <input required type="text" class="form-control form-control-md" id="project id" placeholder="Enter Project Name/Id" onChange={(e) => setProjectName(e.target.value)} />
                                <small className="form-text text-muted mb-5">Once submitted you cannot change the project name</small>
                            </div>
                            <div className="form-group mt-4">
                                <label for="exampleInputPassword1"><h6>Project Location</h6></label>
                                <select required class="form-control form-control-md" placeholder='Select project Location' onChange={(e) => setSelectedRegion(e.target.value)}>
                                    <option disabled selected>Select project Location</option>
                                    <option>TamilNadu</option>
                                    <option>Rajasthan</option>
                                    <option>Telangana</option>
                                    <option>Gujarat</option>
                                    <option>Chattisgarh</option>
                                    <option>Kerala</option>
                                </select>
                            </div>
                            <div class="form-check mt-4">
                                <input type="checkbox" required class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Confirm Submission</label>
                            </div>
                            <button type="submit" onClick={appendToLis} style={submit} class="btn btn-primary"><h5 style={{'margin':'0'}}>Submit</h5></button>
                            </form>
                        </Modal.Body>
                    </Modal>
                    </div>
                    {pData
  .filter((p) => p.location.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
  .map((p) => (
    <Project key={p.id} pId={p.id} pLocation={p.location} pStatus={p.status} />
  ))}

  </div>
            </div>
        </div>
    );
}

export default Projects;
