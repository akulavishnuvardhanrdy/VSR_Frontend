import { useState } from 'react';
import login from '../assets/Images/Loginbg.png';
import Favicon from '../assets/Images/Favicon.png';
import { NavLink } from 'react-router-dom';

const Register = () => {
  const [registerData, setRegisterData] = useState({
    firstname: '',
    lastname: '',
    dob: '',
    gender: '',
    email: '',
    phoneno: '',
    password: ''
  });

  const handleChange = ({ target: { name, value } }) =>
    setRegisterData((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerData);
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="row" style={{ width: '80%' }}>
        <img
          src={login}
          alt="Login Background"
          className="d-none d-lg-block col-lg-6"
          style={{ height: '100vh', objectFit: 'cover' }}
        />
        <div
          className="d-flex flex-column justify-content-center col-lg-6 col-md-8 mx-auto p-4 "
          style={{ borderRadius: '12px', backgroundColor: '#f8f9fa' }}
        >
          <div className="text-center mb-3">
            <img src={Favicon} alt="Favicon" style={{ height: '50px', width: '100px' }} />
          </div>
          
        <h1 className='text-center' style={{fontSize:'20px'}}>Register</h1>
          <form onSubmit={handleSubmit} >
            {['First Name', 'Last Name', 'DOB', 'Gender', 'Email', 'Phoneno', 'Password'].map((field) => (
              <div className="mb-3" key={field}>
                <label htmlFor={field} style={{ fontSize: '16px' }}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field.toLowerCase().replace(' ','') === 'dob' ? 'date' : field === 'password' ? 'password' : 'text'}
                  className="form-control"
                  name={field.toLowerCase().replace(' ','')}
                  placeholder={`Enter your ${field}`}
                  value={registerData[field.toLowerCase().replace(' ','')]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
            <button
              type="submit"
              className="btn btn-success w-100 mt-3"
              style={{ fontSize: '18px', fontWeight: 'bold' }}
            >
              Create
            </button>
            <div className="mt-2 text-center">
              <p>
                <NavLink to="/login" style={{ color: 'gray', fontSize: '15px' }}>
                  Have an account? Login
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
