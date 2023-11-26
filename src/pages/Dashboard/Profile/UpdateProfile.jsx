import { Helmet } from 'react-helmet-async';

import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import towns from '../../../data/towns';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAuth from '../../../hooks/useAuth';
import { imageUpload } from '../../../api/utils';

const UpdateProfile = () => {
  const { createUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const myProfile = useLoaderData();
  console.log('this is hehehehhe', myProfile);

  // for district and upazilla
  const [district, setDistrict] = useState();
  const [upazila, setUpazila] = useState();
  const [upazilas, setUpazilas] = useState([]);

  // state for password validation
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //for district and upazilla Errors
  const [disError, setDisError] = useState('');
  const [upazilaError, setUpazilaError] = useState('');

  const [regError, setRegError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const myForm = e.target;

    const name = form.get('name');

    // const image = form.get('image');
    // const image = e.currentTarget.querySelector('[name="image"]').files[0];

    //photo upload
    const photoData = myForm.photo.files[0];
    const fetchedPhoto = await imageUpload(photoData);
    const photo = fetchedPhoto?.data?.display_url;

    const email = form.get('email');
    const blood = form.get('blood');
    const district = form.get('district');
    const upazila = form.get('upazila');
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    const status = 'active';
    const role = 'donner';

    const registeredUserData = {
      name,
      photo,
      email,
      blood,
      district,
      upazila,
      // password,
      // confirmPassword,
      status,
      role,
    };
    console.log('New User', registeredUserData);

    setRegError('');

    // for distric and upazilla again
    district ? setDisError('') : setDisError('Please choose district');
    upazila ? setUpazilaError('') : setUpazilaError('Please choose upazila');
    if (!district || !upazila) return;

    // regex validation
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
    } else if (password !== confirmPassword) {
      // check if passwords match
      setRegError('Passwords do not match');
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
        updateUserProfile(name, fetchedPhoto?.data?.display_url)
          .then((res) => {
            console.log('profile updated', res);
            axiosPublic
              .post('/users', registeredUserData)
              .then((res) => console.log(res.data));
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

  // for district upazilla once again
  useEffect(() => {
    if (district) {
      setDisError('');
      setUpazilas(towns[district] || []);
    }
  }, [district]);

  useEffect(() => {
    if (upazila) {
      setUpazilaError('');
    }
  }, [upazila]);

  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-5 md:px-6 2xl:px-0">
        <Helmet>
          <title>Blood Aid | Update Profile</title>
        </Helmet>

        <div className="pt-[40px] pb-[40px] overflow-x-hidden">
          <div className="mx-auto w-5/12 min-w-fit ">
            <h2 className="text-3xl font-medium mt-3 text-center uppercase">
              Profile Update
            </h2>

            <form
              onSubmit={handleRegister}
              className="max-w-lg shadow-none rounded-none pt-4 pb-2"
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
                    User Avatar
                  </span>
                </label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  className="file-input rounded-none"
                  required
                />
              </div>
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
              {/* Blood group */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Blood Group
                  </span>
                </label>
                <select
                  name="blood"
                  className="input input-bordered rounded-none"
                  required
                >
                  <option value="">Select a Blood Group</option>
                  <option value="A+">A+</option>
                  <option value=" A-"> A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              {/* Blood group End */}

              {/* District Start */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    District
                  </span>
                </label>
                <select
                  name="district"
                  className="input input-bordered rounded-none"
                  onChange={(e) => setDistrict(e.target.value)}
                  required
                >
                  <option value="">Select District</option>
                  {Object.keys(towns)
                    .sort()
                    .map((town) => {
                      return (
                        <option key={town} value={town}>
                          {town}
                        </option>
                      );
                    })}
                </select>
                <p className=" mt-1 text-sm text-red-500">{disError}</p>
              </div>
              {/* District End */}

              {/* Upazila Start */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Upazila
                  </span>
                </label>
                <select
                  name="upazila"
                  className="input input-bordered rounded-none"
                  onChange={(e) => setUpazila(e.target.value)}
                  required
                >
                  <option value="">Select Upazila</option>
                  {upazilas.map((upazila) => {
                    return (
                      <option key={upazila} value={upazila}>
                        {upazila}
                      </option>
                    );
                  })}
                </select>
                <p className=" mt-1 text-sm text-red-500">{upazilaError}</p>
              </div>
              {/* Upazila End */}

              <div className="form-control mt-6">
                <button className="btn bg-[#05386B] text-white hover:text-[#05386B]  hover:bg-blue-50 hover:border-2 hover:border-[#05386B] rounded-none">
                  Update Profile
                </button>
              </div>
            </form>

            {/* update error  */}
            {regError && (
              <div className="text-red-600 text-center text-xl max-w-[540px] mx-auto py-3">
                <p> {regError} </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
