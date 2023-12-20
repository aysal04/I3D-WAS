import React from 'react';
import NavBar from '../Components/Navbar.jsx';
import Sidebar from '../Components/Sidebar.jsx';

function Help() {
  return (
    <div>
      <NavBar />
      <div className='d-flex'>
        <Sidebar />
        <div style={{ paddingLeft: '30rem', marginTop:'10rem'}}>
          <h1>We are here to help!</h1>
          <p>
            If you need assistance or have any questions, feel free to reach out to us. Our support team is dedicated to providing you with the help you need.
          </p>
          <div className='mt-5'>
            <h3>Contact Details</h3>
            <p>
              Email: support@example.com<br />
              Phone: +1 (123) 456-7890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
