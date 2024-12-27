import { useState } from 'react';
import Favicon from '../assets/Images/Favicon.png';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData); // Replace with actual login logic
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', marginTop: '12px' }}>
      <h1 className="text-center mb-2" style={{ fontFamily: "Courier New, Courier, monospace", fontSize: '25px', fontWeight: 'bold' }}>
        Login
      </h1>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="row w-100 justify-content-around">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img
              src={Favicon}
              height="220"
              width="320"
              alt="Logo"
              style={{
                borderRadius: '50%',
                marginBottom: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>

          <div className="col-md-5 p-4" style={{ borderRadius: '12px' }}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" style={{ fontSize: '16px' }}>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email"
                  value={loginData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" style={{ fontSize: '16px' }}>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-success w-100 mt-3"
                style={{ fontSize: '18px', fontWeight: 'bold' }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
