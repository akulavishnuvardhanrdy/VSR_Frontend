import './CSS/Sidebar.css'
const SideBar = () => {
    return (
        <section>
        <div className="intro">
            {/* Code for Navigation bar and brand logo */}
            <div className="list d-lg-flex justify-content-around container">
                <div>
                    <h2>Booking in VSR is like booking every<br/>moment to enjoy and safe journey</h2>
                    <ul>
                        <li><a href="#hotel"><span>Hotel Booking</span></a></li>
                        <li><a href="#bus"><span>Bus Booking</span></a></li>
                        <li><a href="#train"><span>Train Booking</span></a></li>
                        <li><a href="#aeroplane"><span>Aeroplane Booking</span></a></li>
                        <li><a href="#contact"><span>Contact Us</span></a></li>
                    </ul>
                </div>
                <div>
                <div className="logo-container"></div><br/>
                    <button type="button" data-toggle="modal" data-target="#signUp" style={{ backgroundColor: "transparent", border: "none" }}>
                        <div className="create-button"></div>
                    </button>
                </div>
            </div>
        </div>   
    </section>
    );
  };
  
  export default SideBar;
  