import { Link } from 'react-router-dom';
import errorImg from '/images/error.png';

const ErrorPage = () => {
  return (
    <div className="flex items-center h-screen bg-red-900">
      <div className="flex flex-col items-center justify-center px-5 mx-auto">
        <div className="max-w-md text-center">
          <div className="max-h-[330px]">
            <img src={errorImg} alt="error image" />
          </div>
          {/* <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-700">
            <span className="sr-only">Error</span>404
          </h2> */}
          <p className="text-2xl font-semibold md:text-3xl text-white">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-9 dark:text-gray-300">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <div className="mb-28">
            <Link
              to="/"
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 font-semibold rounded text-red-900 bg-white hover:outline hover:text-white hover:bg-red-900"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
