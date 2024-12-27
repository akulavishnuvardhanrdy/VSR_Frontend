import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Carousal from './Carousal';
import Sidebar from './SideBar';
import Footer from './Footer';
import Wave from './Wave';
import Aeroplane from './Aeroplane';
import Bus from './Bus';
import Hotel from './Hotel';
import Train from './Train';
import { useLocation } from 'react-router-dom';
import { useEffect} from 'react';
import Passengers from './Protected/Passengers'
const ScrollToMain = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 1000, behavior: 'smooth' });
  }, [location]);

  return null;
};
const ScrollToBottom = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ bottom: 0, behavior: 'smooth' });
  }, [location]);

  return null;
};
function App() {
  return (
    // <Router>
    //   <ScrollToMain />
    //   <div className="app-container">
    //     <Carousal />
    //     <Sidebar/>
    //     <Wave />
    //     <div className="main-content">
    //       <Routes>
    //         <Route path="/" element={<Hotel />} />
    //         <Route path="/bus" element={<Bus />} />
    //         <Route path="/train" element={<Train />} />
    //         <Route path="/hotel" element={<Hotel />} />
    //         <Route path="/aeroplane" element={<Aeroplane />} />
    //       </Routes>
    //     </div>
    //     <Footer/>
    //   </div>
    // </Router>
    <Passengers/>
  );
}

export default App;
