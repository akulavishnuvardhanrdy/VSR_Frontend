import './CSS/Booking.css';
import BookingCard from "./BookingCard";
import DoubleDuckerImg from './assets/Images/DoubleDucker.jpg';
import ArticulatedImg from './assets/Images/Articulated.jpg'
import OpenTopImg from './assets/Images/OpenTop.jpg'
import LowFloorImg from './assets/Images/LowFloor.jpg'
import { DoubleDuckerBusDesc , ArticulatedBusDesc , TopOpenBusDesc , LowFloorBusDesc } from "./Services/Description";

const Bus = () => {
  return (
    <section style={{ backgroundColor: 'rgb(220, 243, 243)' }}>
      <div className="home-div container" id="bus" style={{ paddingBottom: '40px' }}>
        <h1 className="card-heading">Bus Booking</h1>

        <BookingCard
          subHeading="Low Floor Bus"
          description= {LowFloorBusDesc}
          imageSrc={LowFloorImg}
          offer="10% Off"
        />

        <BookingCard
          subHeading="Top Open Bus"
          description= {TopOpenBusDesc}
          imageSrc={OpenTopImg}
          offer="14% Off"
        />

        <BookingCard
          subHeading="Articulated Bus"
          description= {ArticulatedBusDesc}
          imageSrc={ArticulatedImg}
          offer="8% Off"
        />

        <BookingCard
          subHeading="Double AC"
          description= {DoubleDuckerBusDesc}
          imageSrc={DoubleDuckerImg}
          offer="15% Off"
        />

      </div>
    </section>
  );
};

export default Bus;
