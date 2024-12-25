import './CSS/Footer.css'

const Footer = () => {
    return (
        <div className="about d-flex justify-content-around" id="contact">
            <div>
                <h1>Contact-Us:</h1>
                <div className="d-lg-flex">
                    <p>A.Vishnu Vardhan</p>
                    <p>&#x260E; 8688241584  </p>
                    <p>&#x2709; akulavishnuvardhanrdy@gmail.com</p>
                </div>
                <div className="d-lg-flex">
                    <p>B.Sohail   </p>
                    <p>&#x260E; 8790345569  </p>
                    <p>&#x2709; shaik16sohail@gmail.com</p>
                </div>
                <div className="d-lg-flex">
                    <p>P.Rehan Husaain   </p>
                    <p>&#x260E; 7075123308  </p>
                    <p>&#x2709; rehanhussain0842@gmail.com</p>
                </div>
            </div>
            <div className="support-image"></div>
        </div>
    );
  };
  
  export default Footer;