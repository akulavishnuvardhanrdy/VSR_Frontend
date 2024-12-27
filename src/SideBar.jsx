import { NavLink } from 'react-router-dom';
import './CSS/Sidebar.css';
import Logo from './assets/Images/Logo.png';
import Create from './assets/Images/Create.png';

const SideBar = () => {
  const menuItems = [
    { path: '/hotel', label: 'Hotel Booking' },
    { path: '/bus', label: 'Bus Booking' },
    { path: '/train', label: 'Train Booking' },
    { path: '/aeroplane', label: 'Aeroplane Booking' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <section>
      <div className="intro">
        <div className="list d-lg-flex justify-content-around container">
          <div>
            <ul>
              {menuItems.map(({ path, label }) => (
                <li key={path}>
                  <NavLink to={path} activeClassName="active">
                    <span>{label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img src={Logo} alt="Logo" style={{ height: '250px', width: '370px' }} />
            <br />
            <button
              type="button"
              data-toggle="modal"
              data-target="#signUp"
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              <img src={Create} alt="Create Account" height="150px" width="180px" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBar;