import React from 'react';
import {
  MDBContainer
} from 'mdb-react-ui-kit';
import Signin from '../Components/Signin';

function Login() {
  const containerStyle = {
    background: 'url("background-login.jpeg")',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5rem',
  };

  const cardStyle = {
    borderRadius: '3.125rem',
    border: '1px solid rgba(172, 179, 221, 0.57)',
    background: 'rgba(172, 179, 221, 0.41)',
    backdropFilter: 'blur(9px)',
    width: '30%',
    padding: '20px',
    borderRadius: '10px',
  };

  return (
    <div style={containerStyle}>
      <MDBContainer className="p-3" style={cardStyle}>
        <Signin/>
      </MDBContainer>
    </div>
  );
}

export default Login;
