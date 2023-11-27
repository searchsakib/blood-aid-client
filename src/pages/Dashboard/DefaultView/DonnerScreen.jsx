import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const DonnerScreen = () => {
  const { user } = useAuth();
  return (
    <div>
      <div>
        <h2 className="text-3xl p-2">
          Welcome{' '}
          <span className="font-semibold text-red-500">
            {user?.displayName}
          </span>
        </h2>
      </div>

      {/* mock data  */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center">
        <Link
          to="/register"
          rel="noopener noreferrer"
          className="capitalize px-8 py-3 text-lg font-semibold rounded dark:bg-red-600 hover:bg-red-800 transition-colors duration-300 ease-in-out dark:text-white"
        >
          view my all request
        </Link>
      </div>
    </div>
  );
};

export default DonnerScreen;
