import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Login from '../pages/Login/Login';
import DonationRequests from '../pages/DonationRequests/DonationRequests';
import Blog from '../pages/Blog/Blog';
import Fundings from '../pages/Fundings/Fundings';
import Register from '../pages/Register/Register';
import SearchPage from '../pages/SearchPage/SearchPage';
import Dashboard from '../layout/Dashboard';
import DonnerHome from '../pages/Dashboard/DonnerHome/DonnerHome';
import AdminHome from '../pages/Dashboard/AdminHome/AdminHome';
import DefaultView from '../pages/Dashboard/DefaultView/DefaultView';
import Profile from '../pages/Dashboard/Profile/Profile';
import UpdateProfile from '../pages/Dashboard/Profile/UpdateProfile';
import DonnerDonationReq from '../pages/Dashboard/DonnerDonationReq/DonnerDonationReq';

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

  //Dashboard Section

  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: <DefaultView></DefaultView>,
      },

      {
        path: '/dashboard/profile',
        element: <Profile></Profile>,
        loader: () => fetch('https://blood-aid-server.vercel.app/users'),
      },

      {
        path: '/dashboard/my-donation-requests',
        element: <DonnerDonationReq></DonnerDonationReq>,
      },

      {
        path: '/dashboard/update-profile/:id',
        element: <UpdateProfile></UpdateProfile>,
        loader: ({ params }) =>
          fetch(
            `https://blood-aid-server.vercel.app/dashboard/update-profile/${params.id}`
          ),
      },

      //! donner (user) routes
      {
        path: 'donner-home',
        element: <DonnerHome></DonnerHome>,
      },
      // {
      //   path: 'cart',
      //   element: <Cart></Cart>,
      // },
      // {
      //   path: 'payment',
      //   element: <Payment></Payment>,
      // },
      // {
      //   path: 'paymentHistory',
      //   element: <PaymentHistory></PaymentHistory>,
      // },

      //! admin only routes
      {
        path: 'admin-home',
        element: (
          // <AdminRoute></AdminRoute>
          <AdminHome></AdminHome>
        ),
      },
      // {
      //   path: 'addItems',
      //   element: (
      //     <AdminRoute>
      //       <AddItems></AddItems>
      //     </AdminRoute>
      //   ),
      // },
      // {
      //   path: 'manageItems',
      //   element: (
      // <AdminRoute>
      //   <ManageItems></ManageItems>
      // </AdminRoute>,
      //   ),
      // },
      // {
      //   path: 'updateItem/:id',
      //   element: (
      //     <AdminRoute>
      //       <UpdateItem></UpdateItem>
      //     </AdminRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/menu/${params.id}`),
      // },
      // {
      //   path: 'users',
      //   element: (
      //     <AdminRoute>
      //       <AllUsers></AllUsers>
      //     </AdminRoute>
      //   ),
      // },
      //! volunteer only routes
    ],
  },
]);

export default myRoute;
