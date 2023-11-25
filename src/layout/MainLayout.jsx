import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  const location = useLocation();

  console.log(location);

  const noHeaderFooter =
    location.pathname.includes('/login') ||
    location.pathname.includes('/register');

  return (
    <div>
      {noHeaderFooter || (
        <div className="bg-red-600">
          <Navbar></Navbar>
        </div>
      )}
      <div>
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || (
        <div className="bg-red-600">
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
