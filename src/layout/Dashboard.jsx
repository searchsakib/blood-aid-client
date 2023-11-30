import {
  FaAccessibleIcon,
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaForumbee,
  FaHamburger,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaUsers,
  FaUsersCog,
  FaUtensils,
} from 'react-icons/fa';
import { IoCreate } from 'react-icons/io5';
import { BiSolidDonateBlood } from 'react-icons/bi';
import { MdEditDocument } from 'react-icons/md';

// import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';
import { NavLink, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
  // const [cart] = useCart();

  // TODO: have to add Volunteer route

  // TODO: get isAdmin value from the database
  const [isAdmin, isAdminLoading] = useAdmin();

  if (isAdminLoading) {
    return (
      <div className="flex items-center justify-center m-14 lg:m-[150px]">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="drawer lg:drawer-open">
      <Helmet>
        <title>Blood Aid | Dashboard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col-reverse items-center justify-center">
        {/* Page content here */}
        {/* dashboard content */}

        <div>
          <Outlet></Outlet>
        </div>

        <label
          htmlFor="my-drawer-2"
          className="btn hover:bg-red-800 text-white bg-red-600 drawer-button lg:hidden z-10 m-2 self-end"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {/* dashboard side bar */}

          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? '' : ''
                  }
                >
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/profile">
                  <FaUser></FaUser>
                  Admin Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-users">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-blood-donation-request">
                  <BiSolidDonateBlood />
                  All Blood Donation Request
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/content-management">
                  <MdEditDocument />
                  Content Management
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? '' : ''
                  }
                >
                  <FaHome></FaHome>
                  Donor Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/profile">
                  <FaUser></FaUser>
                  Donor Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-donation-requests">
                  <FaList></FaList>
                  My Donation Requests Page
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/create-donation-request">
                  <IoCreate />
                  Create Donation Requests Page
                </NavLink>
              </li>
              {/*
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaAd></FaAd>
                  Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaList></FaList>
                  Real Payment History
                </NavLink>
              </li> */}
            </>
          )}
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/order/salad">
              <FaSearch></FaSearch>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
