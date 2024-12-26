import './CSS/Booking.css';
import BookingCard from "./BookingCard";
import FirstImg from './assets/Images/First.jpg';
import BussinessImg from './assets/Images/Bussiness.jpg'
import EconomyImg from './assets/Images/economy.jpg'
import PremiumEconomyImg from './assets/Images/PremiumEconomy.jpeg'
import { FirstClassDesc,EconomyClassDesc,PremiumEconomyDesc,BussinessClassDesc } from "./Services/Description";

const Aeroplane = () => {
  return (
    <section style={{ backgroundColor: 'rgb(220, 243, 243)' }}>
      <div className="home-div container" id="aeroplane" style={{ paddingBottom: '40px' }}>
        <h1 className="card-heading">Aeroplane Booking:</h1>

        {/* First Class */}
        <BookingCard
          subHeading="First Class"
          description= {FirstClassDesc}
          imageSrc={FirstImg}
          offer="10% Off"
        />

        <BookingCard
          subHeading="Economy Class"
          description= {EconomyClassDesc}
          imageSrc={EconomyImg}
          offer="25% Off"
        />

        <BookingCard
          subHeading="Premium Economy Class"
          description= {PremiumEconomyDesc}
          imageSrc={PremiumEconomyImg}
          offer="17% Off"
        />

        <BookingCard
          subHeading="Bussiness Class"
          description= {BussinessClassDesc}
          imageSrc={BussinessImg}
          offer="20% Off"
        />

      </div>
    </section>
  );
};

export default Aeroplane;
