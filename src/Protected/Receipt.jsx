import Favicon from '../assets/Images/Favicon.png';
import Booked_logo from '../assets/Images/Booked_logo.png';
import PropTypes from 'prop-types';
import { ScrollToTop } from '../Services/Scroll';

const Receipt = ({ formData }) => {
  const formatHeading = (text) => {
    return text.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  };
  const handlePrint = () => {
    window.print(); 
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', marginTop: '12px' }}>
      <div className="d-flex align-items-center ">
        <ScrollToTop/>
        <div className="row w-100 justify-content-around">
          <div className=" d-flex flex-column justify-content-center align-items-center">
            <img
              src={`../../${localStorage.getItem('Image')}`}
              height="220"
              width="320"
              alt="Logo"
              style={{
                borderRadius: '50%',
                marginBottom: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
            <p>
              <span className="offer">&nbsp;{localStorage.getItem('offer')}&nbsp;</span>
              <span style={{ color: 'gray' }}>on&nbsp;</span>
              <img src={Favicon} className="card-img-card-img" alt="Offer" />
            </p>
          </div>

          <div className="p-4" style={{ borderRadius: '12px',width:'100%',backgroundImage:`url(${Booked_logo})` , backgroundSize:'20% 25%',backgroundPosition:'center',backgroundRepeat: 'no-repeat'}}>
            <h1 className="text-center" style={{ fontSize: '20px' }}>
              {localStorage.getItem('Type')}
            </h1>

            <table className="table" >
              <tbody>
                {Object.entries(formData).map(([key, value]) => {
                  return (
                    <tr key={key}>
                      <td className="px-4 py-3 font-weight-bold text-muted">
                        {formatHeading(key)}
                      </td>
                      <td className="px-4 py-3">{value || 'N/A'}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <button
              type="submit"
              className="btn btn-success w-100 mt-3"
              style={{ fontSize: '18px'}}
              onClick={handlePrint}
            >
              Print Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Receipt.propTypes = {
  formData: PropTypes.shape({
    fullname: PropTypes.string.isRequired, // Full name is required
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Age can be a string or a number
    gender: PropTypes.string, // Gender is optional
    email: PropTypes.string.isRequired, // Email is required
    phoneno: PropTypes.string.isRequired, // Phone number is required
    hometown: PropTypes.string, // Home town is optional
  }).isRequired,
};

export default Receipt;
