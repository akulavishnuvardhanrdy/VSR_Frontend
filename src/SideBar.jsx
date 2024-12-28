import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './CSS/Sidebar.css';
import Logo from './assets/Images/Logo.png';
import { ScrollToMain, ScrollToBottom } from './Services/Scroll';

const SideBar = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const menuItems = [
    { path: '/type/hotel', label: 'Hotel Booking' },
    { path: '/type/bus', label: 'Bus Booking' },
    { path: '/type/train', label: 'Train Booking' },
    { path: '/type/aeroplane', label: 'Aeroplane Booking' },
    { path: '/type', label: 'Contact Us' },
  ];

  const handleButtonClick = (label) => {
    if (label === 'Contact Us') {
      setShowScroll(false);
      setShowFooter(true);
    }
    else {
      setShowFooter(false);
      setShowScroll(true);
    }
  };

  return (
    <section>
      <div className="intro">
        <div className="list d-lg-flex justify-content-around container">
          <div>
            <ul>
              {menuItems.map(({ path, label }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    activeClassName="active"
                    onClick={() => handleButtonClick(label)}
                  >
                    <span>{label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img src={Logo} alt="Logo" style={{ height: '250px', width: '370px' }} />
          </div>
        </div>
      </div>
      {showScroll && <ScrollToMain />}
      {showFooter && <ScrollToBottom />}
    </section>
  );
};

export default SideBar;
