import { useLoaderData, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import towns from '../../../data/towns';

const MyDonationRequestsUpdate = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const myUpdate = useLoaderData();
  const {
    _id,
    requester_name,
    requester_email,
    recipient_name,
    blood,
    recipient_district,
    recipient_upazila,
    hospital_name,
    full_address,
    donation_date,
    donation_time,
    request_message,
  } = myUpdate || {};
  console.log('Why its not working', myUpdate);

  // for district and upazilla
  const [district, setDistrict] = useState();
  const [upazila, setUpazila] = useState();
  const [upazilas, setUpazilas] = useState([]);

  //for district and upazilla Errors
  // const [disError, setDisError] = useState('');
  // const [upazilaError, setUpazilaError] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const requester_name = form.get('requester_name');
    const requester_email = form.get('requester_email');
    const recipient_name = form.get('recipient_name');
    const blood = form.get('blood');
    const recipient_district = form.get('recipient_district');
    const recipient_upazila = form.get('recipient_upazila');
    const hospital_name = form.get('hospital_name');
    const full_address = form.get('full_address');
    const donation_date = form.get('donation_date');
    const donation_time = form.get('donation_time');
    const request_message = form.get('request_message');
    // const status = 'active';
    // const role = 'donor';

    const updatedDonationReq = {
      requester_name,
      requester_email,
      recipient_name,
      blood,
      recipient_district,
      recipient_upazila,
      hospital_name,
      full_address,
      donation_date,
      donation_time,
      request_message,
      status: 'pending',
    };
    console.log('New User', updatedDonationReq);

    //! for donation request upadate starts
    const res = await axiosSecure.put(
      `/dashboard/my-donation-requests-update/${_id}`,
      updatedDonationReq
    );
    console.log(res.data);
    if (res.data.modifiedCount) {
      Swal.fire({
        title: 'Success!',
        text: 'Donation Request Updated Successfully',
        icon: 'success',
        confirmButtonText: 'Okay',
      });
      navigate('/dashboard/my-donation-requests');
    }

    //! for donation request upadate ends

    // for distric and upazilla again
    // district ? setDisError('') : setDisError('Please choose district');
    // upazila ? setUpazilaError('') : setUpazilaError('Please choose upazila');
    // if (!district || !upazila) return;
  };

  // for district upazilla once again
  useEffect(() => {
    if (district) {
      // setDisError('');
      setUpazilas(towns[district] || []);
    }
  }, [district]);

  useEffect(() => {
    if (upazila) {
      // setUpazilaError('');
      console.log('hehe');
    }
  }, [upazila]);
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-5">
        <Helmet>
          <title>Blood Aid | Update Donation Request</title>
        </Helmet>

        <div className="pt-[40px] pb-[40px] overflow-x-hidden">
          <div className="mx-auto w-5/12 min-w-fit ">
            <h2 className="text-3xl font-medium mt-3 text-center uppercase">
              Update Donation Request
            </h2>

            <form
              onSubmit={handleUpdate}
              className="max-w-lg shadow-none rounded-none pt-4 pb-2"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Requester Name
                  </span>
                </label>
                <input
                  defaultValue={requester_name}
                  type="text"
                  placeholder=""
                  name="requester_name"
                  className="input input-bordered rounded-none cursor-not-allowed"
                  readOnly
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Email
                  </span>
                </label>
                <input
                  defaultValue={requester_email}
                  type="email"
                  placeholder=""
                  name="requester_email"
                  className="input input-bordered rounded-none cursor-not-allowed"
                  readOnly
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
                  defaultValue={recipient_name}
                  type="text"
                  placeholder="recipient name"
                  name="recipient_name"
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
                  defaultValue={blood}
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
                  defaultValue={recipient_district}
                  name="recipient_district"
                  className="input input-bordered rounded-none"
                  onChange={(e) => setDistrict(e.target.value)}
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
                {/* <p className=" mt-1 text-sm text-red-500">{disError}</p> */}
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
                  defaultValue={recipient_upazila}
                  name="recipient_upazila"
                  className="input input-bordered rounded-none"
                  onChange={(e) => setUpazila(e.target.value)}
                >
                  {upazilas.length > 0 ? (
                    <option value="">Select Upazila</option>
                  ) : (
                    <option value={recipient_upazila}>
                      {recipient_upazila}
                    </option>
                  )}
                  {upazilas.map((upazila) => {
                    return (
                      <option key={upazila} value={upazila}>
                        {upazila}
                      </option>
                    );
                  })}
                </select>
                {/* <p className=" mt-1 text-sm text-red-500">{upazilaError}</p> */}
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
                  defaultValue={hospital_name}
                  type="text"
                  placeholder="hospital name"
                  name="hospital_name"
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
                  defaultValue={full_address}
                  type="text"
                  placeholder="full address"
                  name="full_address"
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
                  defaultValue={donation_date}
                  type="date"
                  className="input input-bordered rounded-none"
                  name="donation_date"
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
                  defaultValue={donation_time}
                  type="time"
                  className="input input-bordered rounded-none"
                  name="donation_time"
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
                  defaultValue={request_message}
                  required
                  name="request_message"
                  placeholder=""
                  className="textarea textarea-bordered textarea-lg w-full text-lg px-3"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-[#05386B] text-white hover:text-[#05386B]  hover:bg-blue-50 hover:border-2 hover:border-[#05386B] rounded-none">
                  Update Donation Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDonationRequestsUpdate;
