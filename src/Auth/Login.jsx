import { useState } from 'react';
import axios from 'axios';
import login from '../assets/Images/Loginbg.png';
import Favicon from '../assets/Images/Favicon.png';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) =>
    setLoginData((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('https://vsr-backend.onrender.com/login', loginData);
      const response = await axios.post('/login', loginData);
      const { token } = response.data;
      localStorage.setItem('jwtToken', token);
      setError('');
      navigate('/type');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
      console.error(err);
    }
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
          className="d-flex flex-column justify-content-center col-lg-6 col-md-8 mx-auto p-4"
          style={{ borderRadius: '12px', backgroundColor: '#f8f9fa' }}
        >
          <div className="text-center mb-3">
            <img src={Favicon} alt="Favicon" style={{ height: '50px', width: '100px' }} />
          </div>
          <h1 className="text-center" style={{ fontSize: '20px' }}>Login</h1>
          <form onSubmit={handleSubmit}>
            {['email', 'password'].map((field) => (
              <div className="mb-3" key={field}>
                <label htmlFor={field} style={{ fontSize: '16px' }}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field}
                  className="form-control"
                  name={field}
                  placeholder={`Enter your ${field}`}
                  value={loginData[field]}
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
              Login
            </button>
            {error && <div className="text-danger font-weight-bold text-center mt-2">{error}</div>}
            <div className="mt-2 text-center">
              <span>
                <NavLink to="/register" style={{ color: 'gray', fontSize: '15px' }}>
                  Not having an account? Register
                </NavLink>
              </span>
              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
