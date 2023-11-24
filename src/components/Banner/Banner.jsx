import { Link } from 'react-router-dom';
import bannerImg from '/images/banner.jpg';

const Banner = () => {
  return (
    <div className="mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
      <div
        className="hero min-h-[700px]"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-80 bg-black"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-7xl font-bold text-white">
              Donate Blood, Save Lives
            </h1>
            <p className="mb-5 text-gray-200 text-lg">
              BloodAid Connecting donors and recipients for life-saving blood
              donations. Join us in our mission to save lives.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center">
              <Link
                to="/register"
                rel="noopener noreferrer"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-red-600 hover:bg-red-800 transition-colors duration-300 ease-in-out dark:text-white"
              >
                Join as a donor
              </Link>
              <Link
                rel="noopener noreferrer"
                className="px-8 py-3 text-lg font-semibold border rounded text-white dark:border-gray-100 hover:text-red-600 hover:border-red-600 hover:bg-white transition-colors duration-300 ease-in-out"
              >
                Search Donors
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
