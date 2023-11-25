import { Helmet } from 'react-helmet-async';

import Swal from 'sweetalert2';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [regError, setRegError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, photo, email, password);

    setRegError('');

    if (password.length < 6) {
      setRegError('Password should be at least 6 characters or longer');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegError(
        'Your password should have at least one upper case characters'
      );
      return;
    } else if (!/[#?!@$%^&*-]/.test(password)) {
      setRegError('Your password should have at least one special characters');
      return;
    }

    //create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: 'Registration Successfull!',
          text: 'You Registered Successfully.',
          icon: 'success',
          confirmButtonText: 'Okay',
        });
        navigate('/');
        updateUserProfile(name, photo)
          .then((res) => {
            console.log('profile updated', res);
          })

          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.error(error);
        setRegError(error.message);
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-3 md:px-6 2xl:px-0">
      <Helmet>
        <title>Blood Aid | Register</title>
      </Helmet>

      <div className="pt-[60px] pb-[76px] overflow-x-hidden">
        <div className="mx-auto w-5/12 min-w-fit ">
          <h2 className="text-3xl font-medium mt-0 mb-14 text-center uppercase">
            Register Here
          </h2>
          {regError && (
            <div className="text-red-600 text-center text-xl max-w-[540px] mx-auto pb-10">
              <p> {regError} </p>
            </div>
          )}

          <form
            onSubmit={handleRegister}
            className="card-body shadow-none md:shadow-xl rounded-none bg-green-200"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered rounded-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered rounded-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base">Email</span>
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
              <button className="btn bg-[#05386B] text-white hover:text-[#05386B]  hover:bg-blue-50 hover:border-2 hover:border-[#05386B] rounded-none">
                Register
              </button>
            </div>
          </form>

          <p className="font-medium text-center text-lg mt-8">
            Already have an account?{'   '}
            <Link
              to="/login"
              className="font-semibold text-[#05386B] underline text-2xl"
            >
              Login
            </Link>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
