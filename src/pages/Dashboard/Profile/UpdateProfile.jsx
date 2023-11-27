import { Helmet } from 'react-helmet-async';

import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import towns from '../../../data/towns';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { imageUpload } from '../../../api/utils';

const UpdateProfile = () => {
  const { updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const myProfile = useLoaderData();
  console.log('this is hehehehhe', myProfile);

  const { _id, name, photo, email, blood, district, upazila, status, role } =
    myProfile || {};

  // for district and upazilla
  const [dis, setDis] = useState();
  const [upa, setUpa] = useState();
  const [upazilas, setUpazilas] = useState([]);

  //for district and upazilla Errors
  const [disError, setDisError] = useState('');
  const [upazilaError, setUpazilaError] = useState('');

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = e.target;
    const myForm = e.target;

    const name = form.name.value;

    // const image = form.get('image');
    // const image = e.currentTarget.querySelector('[name="image"]').files[0];

    //photo upload
    const photoData = myForm.photo.files[0];
    const fetchedPhoto = await imageUpload(photoData);
    const photo = fetchedPhoto?.data?.display_url;

    const email = form.email.value;
    const blood = form.blood.value;
    const district = form.district.value;
    const upazila = form.upazila.value;
    // const status = 'active';
    // const role = 'donor';

    const updatedUserData = {
      name,
      photo,
      email,
      blood,
      district,
      upazila,
      status: 'active',
      role: 'donor',
    };
    console.log('New User', updatedUserData);

    // for profile update starts
    const res = await axiosSecure.put(
      `/dashboard/update-profile/${_id}`,
      updatedUserData
    );
    console.log(res.data);
    if (res.data.modifiedCount) {
      Swal.fire({
        title: 'Success!',
        text: 'Profile Updated Successfully',
        icon: 'success',
        confirmButtonText: 'Okay',
      });
      navigate('/dashboard/profile');
      updateUserProfile(name, fetchedPhoto?.data?.display_url)
        .then((res) => {
          console.log('profile updated', res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // for profile update ends

    // for distric and upazilla again
    district ? setDisError('') : setDisError('Please choose district');
    upazila ? setUpazilaError('') : setUpazilaError('Please choose upazila');
    if (!district || !upazila) return;
  };

  // for district upazilla once again
  useEffect(() => {
    if (dis) {
      setDisError('');
      setUpazilas(towns[dis] || []);
    }
  }, [dis]);

  useEffect(() => {
    if (upa) {
      setUpazilaError('');
    }
  }, [upa]);

  return (
    <div className="bg-gray-100 px-5">
      <div className="max-w-screen-xl mx-auto">
        <Helmet>
          <title>Blood Aid | Update Profile</title>
        </Helmet>

        <div className="pt-[40px] pb-[40px] overflow-x-hidden">
          <div className="mx-auto w-5/12 min-w-fit ">
            <h2 className="text-3xl font-medium mt-3 text-center uppercase">
              Profile Update
            </h2>

            <form
              onSubmit={handleUpdateProfile}
              className="max-w-lg shadow-none rounded-none pt-4 pb-2"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">Name</span>
                </label>
                <input
                  defaultValue={name}
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered rounded-none"
                />
              </div>
              <div className="grid">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Update Avatar
                  </span>
                </label>

                <input
                  required
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  className="file-input rounded-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Email
                  </span>
                </label>
                <input
                  readOnly
                  defaultValue={email}
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered rounded-none"
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
                  defaultValue={blood}
                  name="blood"
                  className="input input-bordered rounded-none"
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
                  defaultValue={district}
                  name="district"
                  className="input input-bordered rounded-none"
                  onChange={(e) => setDis(e.target.value)}
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
                  defaultValue={upazila}
                  name="upazila"
                  className="input input-bordered rounded-none"
                  onChange={(e) => setUpa(e.target.value)}
                >
                  {upazilas.length > 0 ? (
                    <option value="">Select Upazila</option>
                  ) : (
                    <option value={upazila}>{upazila}</option>
                  )}
                  {upazilas.map((myUpazila) => {
                    return (
                      <option key={myUpazila} value={myUpazila}>
                        {myUpazila}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
