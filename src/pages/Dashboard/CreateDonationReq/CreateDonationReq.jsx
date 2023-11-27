import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import towns from '../../../data/towns';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const CreateDonationReq = () => {
  const { createUser, updateUserProfile, user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  // for district and upazilla
  const [district, setDistrict] = useState();
  const [upazila, setUpazila] = useState();
  const [upazilas, setUpazilas] = useState([]);

  //for district and upazilla Errors
  const [disError, setDisError] = useState('');
  const [upazilaError, setUpazilaError] = useState('');

  const [regError, setRegError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get('name');
    const email = form.get('email');
    const blood = form.get('blood');
    const district = form.get('district');
    const upazila = form.get('upazila');
    // const status = 'active';
    // const role = 'donor';

    const registeredUserData = {
      name,
      photo,
      email,
      blood,
      district,
      upazila,
      status: 'pending',
    };
    console.log('New User', registeredUserData);

    setRegError('');

    // for distric and upazilla again
    district ? setDisError('') : setDisError('Please choose district');
    upazila ? setUpazilaError('') : setUpazilaError('Please choose upazila');
    if (!district || !upazila) return;

    //create user
    // createUser(email, password)
    //   .then((result) => {
    //     console.log(result.user);
    //     Swal.fire({
    //       title: 'Registration Successfull!',
    //       text: 'You Registered Successfully.',
    //       icon: 'success',
    //       confirmButtonText: 'Okay',
    //     });
    //     navigate('/');
    //     updateUserProfile(name, fetchedPhoto?.data?.display_url)
    //       .then((res) => {
    //         console.log('profile updated', res);
    //         axiosSecure
    //           .post('/users', registeredUserData)
    //           .then((res) => console.log(res.data));
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     setRegError(error.message);
    //   });
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
      <div className="max-w-screen-xl mx-auto px-5">
        <Helmet>
          <title>Blood Aid | Create Donation Request</title>
        </Helmet>

        <div className="pt-[40px] pb-[40px] overflow-x-hidden">
          <div className="mx-auto w-5/12 min-w-fit ">
            <h2 className="text-3xl font-medium mt-3 text-center uppercase">
              Create Donation Request
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

              {/* recipient name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Recipient Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
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
                    Recipient District
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
                    Recipient Upazila
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

              {/* hospital name  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Hospital Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>

              {/* full address  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Full Address
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>

              {/* donation date */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Donation Date
                  </span>
                </label>
                <input
                  type="date"
                  className="input input-bordered rounded-none"
                  name="deadline"
                  required
                />
              </div>

              {/* donation time */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Donation Time
                  </span>
                </label>
                <input
                  type="time"
                  className="input input-bordered rounded-none"
                  name="deadline"
                  required
                />
              </div>

              {/* request message */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Request Message
                  </span>
                </label>
                <textarea
                  placeholder=""
                  className="textarea textarea-bordered textarea-lg w-full"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-[#05386B] text-white hover:text-[#05386B]  hover:bg-blue-50 hover:border-2 hover:border-[#05386B] rounded-none">
                  Request Donation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDonationReq;
