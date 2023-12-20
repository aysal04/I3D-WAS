import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Signup() {
    const inputStyle={
        borderBottom: '3px solid rgba(0, 0, 0, 0.58)',
        borderRadius: '0',
        width:'100%',
        background: 'rgba(172, 179, 221, 0)',
      };

    
  const signUpButton= {
    borderRadius: '1.25rem',
    border: '1px solid rgba(172, 179, 221, 0.57)',
    background: 'rgba(80, 110, 161, 0.57)',
    width:'50%',
    marginLeft: '25%',
    maxHeight:'2.5rem',
    minHeight:'2.5rem'
    }

    return(
        <div>
            <div className="d-flex flex-column align-items-center justify-content-center p-4">
      <h3 className="mb-4">SignUp</h3>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" fill="none">
        <path d="M50.0222 48.0391C47.4343 48.0391 45.3346 50.1367 45.3346 52.7266C45.5573 66.8379 43.7448 80.4414 39.9244 94.0449C39.3912 95.9434 40.3443 100 44.4401 100C46.487 100 48.3679 98.6484 48.9499 96.5781C51.5925 87.2207 55.0125 72.084 54.7078 52.7266C54.7097 50.1387 52.6121 48.0391 50.0222 48.0391ZM49.8542 32.0762C37.8892 32.0625 29.5395 41.2695 29.7055 51.8203C29.852 61.1836 28.9731 70.5527 27.0942 79.6621C26.5688 82.1973 28.2016 84.6797 30.7348 85.2012C33.2837 85.7227 35.7486 84.0957 36.274 81.5605C38.2935 71.7773 39.2369 61.7207 39.0807 51.6738C39.0006 46.6055 42.9713 41.4219 49.7155 41.4512C55.8308 41.543 60.8778 46.4004 60.9696 52.2852C61.12 61.6699 60.4207 71.0996 58.8973 80.3223C58.4735 82.873 60.2039 85.2871 62.7567 85.709C66.6572 86.3594 67.9931 82.7598 68.1435 81.8477C69.7607 72.0762 70.499 62.0801 70.3447 52.1387C70.1728 41.2402 60.9813 32.2402 49.8542 32.0762ZM28.2348 28.2129C26.2231 26.584 23.2797 26.8848 21.641 28.8926C16.637 35.0449 13.9475 42.8144 14.0725 50.7676C14.1878 58.1074 13.5901 65.4688 12.2932 72.6523C11.8362 75.2012 13.5257 77.6387 16.0745 78.0996C20.0023 78.7832 21.3617 75.207 21.5219 74.3184C22.9262 66.5371 23.5727 58.5644 23.4477 50.6211C23.3559 44.7851 25.2446 39.3164 28.9165 34.8066C30.5473 32.7988 30.2427 29.8476 28.2348 28.2129ZM49.6159 16.0391C46.6061 15.959 43.5866 16.3203 40.6744 17.0098C38.1568 17.6074 36.5982 20.1308 37.192 22.6523C37.7896 25.1699 40.317 26.7207 42.8346 26.1348C44.9928 25.625 47.2233 25.3984 49.4753 25.4141C64.2079 25.6348 76.376 37.4258 76.6006 51.6992C76.7159 59.0977 76.3506 66.5644 75.5108 73.8926C75.2178 76.4648 77.0635 78.791 79.6339 79.084C82.8995 79.4648 84.6163 76.7637 84.8253 74.9609C85.7128 67.1911 86.0971 59.3721 85.9757 51.5527C85.671 32.2656 69.3603 16.332 49.6159 16.0391ZM98.8489 39.7598C98.2903 37.2363 95.8196 35.6191 93.261 36.1914C90.7336 36.75 89.1359 39.25 89.6945 41.7793C90.6145 45.9609 90.6535 49.0859 90.6125 53.8105C90.591 56.4023 92.6731 58.5156 95.261 58.5371H95.3001C97.8724 58.5371 99.9661 56.4648 99.9876 53.8887C100.023 49.5566 100.066 45.2734 98.8489 39.7598ZM91.0129 22.041C81.5011 8.48827 65.9364 0.25194 49.3757 0.00389338C35.7447 -0.160169 23.1371 4.86522 13.76 14.2461C4.7033 23.3144 -0.177619 35.3594 0.0255081 48.1738L0.00207035 52.3672C-0.0741024 52.3672 1.96108 52.3672 4.549 52.3672C4.59392 52.3672 4.64275 52.3672 4.68963 52.3672C7.21309 52.3672 9.2971 50.3555 9.37132 47.8164L9.40257 43.1992C9.24046 38.7676 13.1448 33.583 20.3949 26.3291C27.9653 18.751 38.2349 14.6748 49.239 14.833C62.8036 15.0342 75.5537 21.7783 83.3448 32.8779C84.8312 34.999 87.7511 35.5049 89.8723 34.0225C91.9895 32.5342 92.5012 29.6104 91.0129 22.041Z" fill="black" fill-opacity="0.58"/>
      </svg>
    </div>
    <form action="/home">
    <div className='d-flex justify-content-center'>
    <EmailOutlinedIcon style={{marginRight:'10px', marginTop:'8px'}}/>
    <MDBInput wrapperClass='mb-4' style={inputStyle} placeholder='Email address' required id='form1' type='email' />
    </div>
    <div className='d-flex justify-content-center'>
        <AccountCircleIcon style={{marginRight:'10px', marginTop:'8px'}}/>
        <MDBInput wrapperClass='mb-4' style={inputStyle} placeholder='Username' id='form2' required type='text' />
    </div>
    <div className='d-flex justify-content-center'>
        <VpnKeyOutlinedIcon style={{marginRight:'10px', marginTop:'8px'}}/>
        <MDBInput wrapperClass='mb-4' style={inputStyle} placeholder='Password' id='form2' required type='password' />
    </div>
    <div className='d-flex justify-content-center'>
        <LockOpenOutlinedIcon style={{marginRight:'10px', marginTop:'8px'}}/>
        <MDBInput wrapperClass='mb-5' style={inputStyle} placeholder='Confirm Password' id='form2' required type='password' />
    </div>
        <MDBBtn className="mb-4" style={signUpButton}>Sign up</MDBBtn>
        </form>
        <div className="text-center">
          <p>Already registered? <a href="/login">Login</a></p>
          <p>or sign in with:</p>

          <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm" />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="sm" />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm" />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="sm" />
            </MDBBtn>

          </div>
        </div>
        </div>
    );
}

export default Signup;