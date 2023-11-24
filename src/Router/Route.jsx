import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Login from '../pages/Login/Login';
import DonationRequests from '../pages/DonationRequests/DonationRequests';
import Blog from '../pages/Blog/Blog';
import Dashboard from '../pages/Dashboard/Dashboard';
import Fundings from '../pages/Fundings/Fundings';
import Register from '../pages/Register/Register';
import SearchPage from '../pages/SearchPage/SearchPage';

const myRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '',
        element: <Home></Home>,
      },

      {
        path: '/donation-requests',
        element: <DonationRequests></DonationRequests>,
      },

      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/fundings',
        element: <Fundings></Fundings>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },

      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/search-page',
        element: <SearchPage></SearchPage>,
      },
    ],
  },
]);

export default myRoute;
