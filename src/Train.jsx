import './CSS/Booking.css';
import BookingCard from "./BookingCard";
import VandeBharathImg from './assets/Images/VandeBharat.jpg';
import BulletTrainImg from './assets/Images/bullet.jpeg'
import NiligiriImg from './assets/Images/Nilgiri.jpg'
import MetroImg from './assets/Images/metro.jpg'
import { VandeBharathDesc , BulletTrainDesc, NiligiriExpressDesc , MetroTrainDesc } from "./Services/Description";

const Train = () => {
  return (
    <section style={{ backgroundColor: 'rgb(220, 243, 243)' }}>
      <div className="home-div container" id="train" style={{ paddingBottom: '40px' }}>
        <h1 className="card-heading">Train Booking:</h1>

        <BookingCard
          subHeading="Vande Bharath Express"
          description= {VandeBharathDesc}
          imageSrc={VandeBharathImg}
          offer="12% Off"
        />

        <BookingCard
          subHeading="Bullet Train"
          description= {BulletTrainDesc}
          imageSrc={BulletTrainImg}
          offer="15% Off"
        />

        <BookingCard
          subHeading="Niligiri Express"
          description= {NiligiriExpressDesc}
          imageSrc={NiligiriImg}
          offer="5% Off"
        />

        <BookingCard
          subHeading="Metro Train"
          description= {MetroTrainDesc}
          imageSrc={MetroImg}
          offer="7% Off"
        />

      </div>
    </section>
  );
};

export default Train;
