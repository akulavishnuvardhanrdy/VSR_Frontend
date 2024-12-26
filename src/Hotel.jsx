import './CSS/Booking.css';
import BookingCard from "./BookingCard";
import SingleNonACImg from './assets/Images/SingleNonAC.jpg';
import SingleACImg from './assets/Images/SingleAC.jpg'
import DoubleNonACImg from './assets/Images/DoubleNonAC.jpeg'
import DoubleACImg from './assets/Images/DoubleAC.jpg'
import { SingleACDesc ,SingleNonACDesc , DoubleACDesc , DoubleNonAcDesc } from "./Services/Description";

const Hotel = () => {
  return (
    <section style={{ backgroundColor: 'rgb(220, 243, 243)' }}>
      <div className="home-div container" id="hotel" style={{ paddingBottom: '40px' }}>
        <h1 className="card-heading">Hotel Booking:</h1>

        <BookingCard
          subHeading="Single Non AC"
          description= {SingleNonACDesc}
          imageSrc={SingleNonACImg}
          offer="24% Off"
        />

        <BookingCard
          subHeading="Single AC"
          description= {SingleACDesc}
          imageSrc={SingleACImg}
          offer="20% Off"
        />

        <BookingCard
          subHeading="Double Non AC"
          description= {DoubleNonAcDesc}
          imageSrc={DoubleNonACImg}
          offer="17% Off"
        />

        <BookingCard
          subHeading="Double AC"
          description= {DoubleACDesc}
          imageSrc={DoubleACImg}
          offer="25% Off"
        />

      </div>
    </section>
  );
};

export default Hotel;
