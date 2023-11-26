import { Helmet } from 'react-helmet-async';
// start
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { getAuth } from 'firebase/auth';
import app from '../../components/Firebase/firebase.config';
// end

const Login = () => {
  const { signIn, user } = useContext(AuthContext);
  console.log(user);
  const auth = getAuth(app);

  const location = useLocation();
  const navigate = useNavigate();

  const [logError, setLogError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);

    setLogError('');

    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        Swal.fire({
          title: 'Login Successfull!',
          text: 'You Logged in Successfully.',
          icon: 'success',
          confirmButtonText: 'Okay',
        });
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        console.error(error);
        setLogError(error.message);
      });
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl min-h-screen mx-auto px-5 md:px-6 2xl:px-0">
        <Helmet>
          <title>Blood Aid | Login</title>
        </Helmet>
        <div className="pt-[60px] pb-[76px] overflow-x-hidden">
          <div className="mx-auto w-5/12 min-w-fit ">
            <h2 className="text-3xl font-medium mt-0 mb-5 text-center uppercase">
              Login Here
            </h2>
            {logError && (
              <div className="text-red-600 text-center text-xl max-w-[540px] mx-auto">
                <p> {logError} </p>
              </div>
            )}

            <form
              onSubmit={handleLogin}
              className="max-w-lg shadow-none rounded-none"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label font-medium text-base">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#05386B] text-white hover:text-[#05386B] hover:bg-blue-50 hover:border-2 hover:border-[#05386B] rounded-none">
                  Login
                </button>
              </div>
            </form>

            <p className="font-medium text-center text-lg pt-5">
              Do not have an account?{'   '}
              <Link
                to="/register"
                className="font-semibold text-[#05386B] underline text-2xl"
              >
                Register
              </Link>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
