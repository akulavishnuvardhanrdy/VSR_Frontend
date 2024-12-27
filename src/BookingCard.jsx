import PropTypes from 'prop-types';
import './CSS/Booking.css'; 
import Favicon from './assets/Images/Favicon.png';

const BookingCard = ({ 
  subHeading, 
  description, 
  imageSrc, 
  offer
}) => {
  const handleBooking = () => {
    localStorage.setItem('Type', subHeading);
    localStorage.setItem('Image',imageSrc);
    localStorage.setItem('offer',offer);
  };
  return (
    <div className="row booking-card" style={{ paddingTop: '30px' }}>
      <div className="col-lg-8">
        <h2 className="card-sub-heading">{subHeading}</h2>
        <p className="card-desc">{description}</p>
        <button 
          className="card-button" 
          type="button" 
          onClick={handleBooking}
        >
          Book Now
        </button>
      </div>
      <div className="card-img-card col-lg-4">
        <img src={imageSrc} className="card-div-img" />
        {offer && (
          <div className="card-bottom">
            <p>
              <span className="offer">&nbsp;{offer}&nbsp;</span>
              <span style={{ color: 'gray' }}>on&nbsp;</span>
              <img 
                src={Favicon} 
                className="card-img-card-img" 
                alt="Offer" 
              />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

BookingCard.propTypes = {
  subHeading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  offer: PropTypes.string,
};

export default BookingCard;
