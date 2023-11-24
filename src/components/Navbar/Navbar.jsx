import { Link, NavLink } from 'react-router-dom';
import userPic from '/images/user.png';
import logo from '/images/logo.png';

const NavBar = () => {
  const links = (
    <>
      <li className="text-base md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-green-300 underline font-semibold'
              : ''
          }
        >
          Home
        </NavLink>
      </li>

      <li className="text-base md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0">
        <NavLink
          to="/donation-requests"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-green-300 underline font-semibold'
              : ''
          }
        >
          Donation Requests
        </NavLink>
      </li>

      <li className="text-base md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0">
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-green-300 underline font-semibold'
              : ''
          }
        >
          Blog
        </NavLink>
      </li>
      <li className="text-base md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-green-300 underline font-semibold'
              : ''
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li className="text-base md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0">
        <NavLink
          to="/fundings"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-green-300 underline font-semibold'
              : ''
          }
        >
          Fundings
        </NavLink>
      </li>
      <li className="text-base md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-green-300 underline font-semibold'
              : ''
          }
        >
          Login
        </NavLink>
      </li>

      <li className="text-base pb-8 md:pb-0 lg:pb-0">
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-green-300 underline font-semibold'
              : ''
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex flex-row-reverse xl:flex-row px-3 md:px-5 items-center justify-between max-w-screen-2xl mx-auto py-10">
      <div>
        <Link>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <img className="max-w-[70px] " src={logo} alt="" />{' '}
            </div>
            <div className="font-bold  text-2xl p-2 text-white rounded-sm flex items-center">
              BloodAid
            </div>
          </div>
        </Link>
      </div>
      <div className="dropdown bg-white rounded-lg">
        <label tabIndex={0} className="btn btn-ghost xl:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 50 50"
            stroke="currentColor"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-white bg-red-500"
        >
          {links}
          <div className="flex flex-col  items-center justify-center gap-3">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={userPic} />
              </div>
            </label>
            {/* {name && <p> {name} </p>} */}

            <Link to="/login">
              <button className="btn text-xs btn-sm">Login</button>
            </Link>
          </div>
        </ul>
      </div>

      {/* <div className="hidden xl:flex"> */}

      {/* </div> */}
      <div className="hidden xl:flex xl:flex-row items-center justify-center gap-3">
        <div className="text-center mt-9 md:mt-0 lg:mt-0 ">
          <ul className=" md:flex lg:flex text-lg text-white">{links}</ul>
        </div>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={userPic} />
          </div>
        </label>
        {/* {name && <p> {name} </p>} */}

        <Link to="/login">
          <button className="btn text-xs">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
