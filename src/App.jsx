import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import './App.css';
import Carousal from './Carousal';
import Sidebar from './SideBar';
import Footer from './Footer';
import Wave from './Wave';
import Aeroplane from './Aeroplane';
import Bus from './Bus';
import Hotel from './Hotel';
import Train from './Train';
import Passengers from './Protected/Passengers';
import ProtectedRoute from './ProtectedRoute';
import LoginForm from './Auth/Login';
import Register from './Auth/Register';

const HomeLayout = () => {
  return (
    <>
      <Carousal />
      <Sidebar />
      <Wave />
      <Outlet />
      <Footer />
    </>
  );
};

const AuthorizedLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />

        
        <Route path="/type/*" element={<ProtectedRoute><HomeLayout /></ProtectedRoute>}>
          <Route index element={<Hotel />} />
          <Route path="bus" element={<Bus />} />
          <Route path="train" element={<Train />} />
          <Route path="hotel" element={<Hotel />} />
          <Route path="aeroplane" element={<Aeroplane />} />
        </Route>

        <Route path="/user/*" element={<ProtectedRoute><AuthorizedLayout /></ProtectedRoute>}>
          <Route index element={<Passengers />} />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
