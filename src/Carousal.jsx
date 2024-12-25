const Carousal = () => {
    return (
        <section>
        <div className="intro">
            <div id="home-carousel" className="carousel slide" data-ride="carousel" data-interval="2500">
                <ul className="carousel-indicators">
                    <li className="active" data-target="#home-carousel" data-slide-to="0"></li>
                    <li data-target="#home-carousel" data-slide-to="1"></li>
                    <li data-target="#home-carousel" data-slide-to="2"></li>
                    <li data-target="#home-carousel" data-slide-to="3"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active hotel-img carousel-img">                        
                    </div>
                    <div className="carousel-item carousel-img bus-img">                        
                    </div>
                    <div className="carousel-item train-img carousel-img">                        
                    </div>
                    <div className="carousel-item carousel-img aeroplane-img">
                    </div>
                </div>
                <a className="carousel-control-prev" href="#home-carousel" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#home-carousel" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div> 
        </div>
        </section>
    );
};
  
export default Carousal;
  