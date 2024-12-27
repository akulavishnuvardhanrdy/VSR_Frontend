import { useState } from 'react';
import Favicon from '../assets/Images/Favicon.png';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullname: '', age: '', gender: '', email: '', phoneno: '', hometown: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( formData);
  };

  return (
    <div  style={{ backgroundColor: '#f8f9fa', marginTop:'12px'}}>
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="row w-100 justify-content-around">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={`../../${localStorage.getItem('Image')}`} height="220" width="320" alt="Logo" style={{ borderRadius: '50%', marginBottom: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
          <p>
            <span className="offer">&nbsp;{localStorage.getItem('Offer')}&nbsp;</span>
            <span style={{ color: 'gray' }}>on&nbsp;</span>
            <img src={Favicon} className="card-img-card-img" alt="Offer" />
          </p>
        </div>

        <div className="col-md-7  p-4" style={{ borderRadius: '12px' }}>
        <h1 className='text-center' style={{fontSize:'20px'}}>{localStorage.getItem('Type')} Booking</h1>
    
          <form onSubmit={handleSubmit}>
            {['Full Name', 'Age', 'Gender', 'Email', 'Phone No', 'Home Town'].map((field) => (
              <div className="mb-3" key={field}>
                <label htmlFor={field} style={{ fontSize: '16px' }}>{field}</label>
                <input
                  type={field === 'age' ? 'number' : 'text'}
                  className="form-control"
                  name={field.toLowerCase().replace(' ','')}
                  placeholder={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
            <button type="submit" className="btn btn-success w-100 mt-3" style={{ fontSize: '18px', fontWeight: 'bold' }}>Confirm</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BookingForm;
