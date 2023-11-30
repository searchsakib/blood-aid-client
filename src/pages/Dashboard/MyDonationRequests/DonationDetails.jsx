import { useLoaderData, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
// import towns from '../../../data/towns';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const DonationDetails = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const myDonationDetails = useLoaderData();
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
    status,
  } = myDonationDetails || {};

  // making status in progress
  const handleStatus = (id) => {
    axiosSecure.patch(`/dashboard/status/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        // navigate('/dashboard/my-donation-requests');
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Confirmed!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // console.log('Why its not working', myDonationDetails);

  // for district and upazilla
  // const [district, setDistrict] = useState();
  // const [upazila, setUpazila] = useState();
  // const [upazilas, setUpazilas] = useState([]);

  //for district and upazilla Errors
  // const [disError, setDisError] = useState('');
  // const [upazilaError, setUpazilaError] = useState('');

  // const handleDonate = async (e) => {
  // e.preventDefault();
  // console.log(e.currentTarget);
  // const form = new FormData(e.currentTarget);
  // const requester_name = form.get('requester_name');
  // const requester_email = form.get('requester_email');
  // const recipient_name = form.get('recipient_name');
  // const blood = form.get('blood');
  // const recipient_district = form.get('recipient_district');
  // const recipient_upazila = form.get('recipient_upazila');
  // const hospital_name = form.get('hospital_name');
  // const full_address = form.get('full_address');
  // const donation_date = form.get('donation_date');
  // const donation_time = form.get('donation_time');
  // const request_message = form.get('request_message');
  // const status = 'active';
  // const role = 'donor';
  // const updatedDonationReq = {
  //   requester_name,
  //   requester_email,
  //   recipient_name,
  //   blood,
  //   recipient_district,
  //   recipient_upazila,
  //   hospital_name,
  //   full_address,
  //   donation_date,
  //   donation_time,
  //   request_message,
  //   status: 'pending',
  // };
  // console.log('New User', updatedDonationReq);
  //! for donation request upadate starts
  // const res = await axiosSecure.put(
  //   `/dashboard/my-donation-requests-update/${_id}`,
  //   updatedDonationReq
  // );
  // console.log(res.data);
  // if (res.data.modifiedCount) {
  //   Swal.fire({
  //     title: 'Success!',
  //     text: 'Donation Request Updated Successfully',
  //     icon: 'success',
  //     confirmButtonText: 'Okay',
  //   });
  //   navigate('/dashboard/my-donation-requests');
  // }
  //! for donation request upadate ends
  // for distric and upazilla again
  // district ? setDisError('') : setDisError('Please choose district');
  // upazila ? setUpazilaError('') : setUpazilaError('Please choose upazila');
  // if (!district || !upazila) return;
  // };

  // for district upazilla once again
  // useEffect(() => {
  //   if (district) {
  //     // setDisError('');
  //     setUpazilas(towns[district] || []);
  //   }
  // }, [district]);

  // useEffect(() => {
  //   if (upazila) {
  //     // setUpazilaError('');
  //     console.log('hehe');
  //   }
  // }, [upazila]);
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-5">
        <Helmet>
          <title>Blood Aid | Donation Details</title>
        </Helmet>

        <div className="pt-[40px] pb-[40px] overflow-x-hidden">
          <h2 className="text-3xl font-medium pb-7 text-center uppercase">
            Donation Details
          </h2>
          <div className="mx-auto w-5/12 min-w-fit ">
            <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
              <dl className="-my-3 divide-y divide-gray-100 text-base">
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900 capitalize">
                    requester name
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {requester_name}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900 capitalize">
                    requester email
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {requester_email}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900 capitalize">
                    recipient name
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {recipient_name}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900 capitalize">
                    recipient blood group
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2">{blood}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900 capitalize">
                    recipient district
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {recipient_district}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900 capitalize">
                    recipient upazila
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {recipient_upazila}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900 capitalize">
                    admitted hospital
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {hospital_name}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900 capitalize">
                    full address
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {full_address}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900 capitalize">
                    donation date
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {donation_date}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900 capitalize">
                    donation time
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {donation_time}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900 capitalize">
                    requester message
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {request_message}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="text-center mt-5">
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn text-white bg-red-600 hover:bg-red-800"
                onClick={() =>
                  document.getElementById('my_modal_1').showModal()
                }
              >
                Donate Blood
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <form
                    onSubmit={handleSubmit}
                    className="shadow-none rounded-none"
                  >
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium text-base">
                          Donor Name
                        </span>
                      </label>
                      <input
                        defaultValue={user?.displayName}
                        readOnly
                        type="text"
                        name="name"
                        className="input input-bordered rounded-none cursor-not-allowed"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium text-base">
                          Donor Email
                        </span>
                      </label>
                      <input
                        defaultValue={user?.email}
                        readOnly
                        type="email"
                        name="email"
                        className="input input-bordered rounded-none cursor-not-allowed"
                      />
                    </div>

                    <div className="form-control mt-6">
                      {status === 'inprogress' ? (
                        <div>
                          <button
                            onClick={() => handleStatus(_id)}
                            className="btn bg-[#05386B] text-white hover:text-[#05386B] hover:bg-blue-50 hover:border-2 hover:border-[#05386B] rounded-none btn-disabled"
                          >
                            Confirm
                          </button>
                          <p className="pt-5 font-semibold">
                            Donation inprogress...
                          </p>
                        </div>
                      ) : status === 'done' ? (
                        <div>
                          <button
                            onClick={() => handleStatus(_id)}
                            className="btn bg-[#05386B] text-white hover:text-[#05386B] hover:bg-blue-50 hover:border-2 hover:border-[#05386B] rounded-none btn-disabled"
                          >
                            Confirm
                          </button>
                          <p className="pt-5 font-semibold">Donation Done!</p>
                        </div>
                      ) : status === 'canceled' ? (
                        <div>
                          <button
                            onClick={() => handleStatus(_id)}
                            className="btn bg-[#05386B] text-white hover:text-[#05386B] hover:bg-blue-50 hover:border-2 hover:border-[#05386B] rounded-none btn-disabled"
                          >
                            Confirm
                          </button>
                          <p className="pt-5 font-semibold">
                            Donation Canceled!
                          </p>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleStatus(_id)}
                          className="btn bg-[#05386B] text-white hover:text-[#05386B] hover:bg-blue-50 hover:border-2 hover:border-[#05386B] rounded-none"
                        >
                          Confirm
                        </button>
                      )}
                    </div>
                  </form>

                  <div className="modal-action">
                    <form method="dialog" className="text-center mx-auto">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn bg-violet-600 hover:bg-violet-800  text-white">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
