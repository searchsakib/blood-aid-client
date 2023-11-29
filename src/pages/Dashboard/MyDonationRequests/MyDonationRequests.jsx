import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import useDonationReqs from '../../../hooks/useDonationReqs';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const MyDonationRequests = () => {
  const { user } = useAuth();

  // filter by status
  const [filterStatus, setFilterStatus] = useState('all');

  const [donationReqs, refetch, isLoading] = useDonationReqs();
  console.log('This is donation req', donationReqs);
  const axiosSecure = useAxiosSecure();

  //! Done Functionality
  const handleDone = (id) => {
    axiosSecure.patch(`/dashboard/status-done/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        // navigate('/dashboard/my-donation-requests');
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Blood Donation Done!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  //! Canceled Functionality
  const handleCanceled = (id) => {
    axiosSecure.patch(`/dashboard/status-canceled/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        // navigate('/dashboard/my-donation-requests');
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Donation Canceled!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  //! Delete Functionality
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/dashboard/create-donation-request/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };

  if (isLoading)
    return (
      <span className="loading loading-bars text-red-500 loading-lg"></span>
    );

  // const myDonationReqs = useLoaderData();
  // const [theDonationReqs, setTheDonationReqs] = useState([]);
  // console.log(myDonationReqs);

  return (
    <div>
      <h2 className="text-3xl text-center font-semibold pb-5">
        My Blood Donation Requests
      </h2>
      {donationReqs?.length > 0 ? (
        <div className="rounded-lg border border-gray-200">
          <Helmet>
            <title>Blood Aid | My Donation Requests</title>
          </Helmet>

          {/* Filtering options */}
          <div className="flex items-center justify-end my-4">
            <label htmlFor="statusFilter" className="mr-2 font-semibold">
              Filter by Status:
            </label>
            <select
              id="statusFilter"
              className="p-2 border border-gray-300 rounded-md"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="inprogress">InProgress</option>
              <option value="done">Done</option>
              <option value="canceled">Canceled</option>
              {/* Add more status options if needed */}
            </select>
          </div>
          <div className="overflow-x-auto rounded-t-lg">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    #
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Recipient Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Recipient Location
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Donation Date
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Donation Time
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Donation Status
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Donor Info
                  </th>
                </tr>
              </thead>

              {/* Render donation requests based on the selected status */}

              {donationReqs
                ?.filter((perDonationReq) => {
                  if (filterStatus === 'all') return true;
                  return perDonationReq.status === filterStatus;
                })
                .map((perDonationReq, index) => (
                  <tbody
                    key={perDonationReq?._id}
                    className="divide-y divide-gray-200"
                  >
                    <tr>
                      <th>{index + 1}.</th>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {perDonationReq?.recipient_name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                        <p>{perDonationReq?.recipient_upazila},</p>
                        <p> {perDonationReq?.recipient_district} </p>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {perDonationReq?.donation_date}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {perDonationReq?.donation_time}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex flex-col gap-3">
                        {perDonationReq?.status === 'inprogress' ? (
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleDone(perDonationReq?._id)}
                              className="btn btn-sm rounded-none bg-[#2161a2] text-white hover:bg-[#1b4978]"
                            >
                              Done
                            </button>
                            <button
                              onClick={() =>
                                handleCanceled(perDonationReq?._id)
                              }
                              className="btn btn-sm rounded-none bg-[#2161a2] text-white hover:bg-[#1b4978]"
                            >
                              Canceled
                            </button>
                          </div>
                        ) : (
                          <p className="uppercase text-sm text-center">
                            {' '}
                            {perDonationReq?.status}{' '}
                          </p>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                        {perDonationReq?.status === 'pending' ? (
                          'no donor yet'
                        ) : (
                          <div>
                            <p> {user?.displayName} </p>
                            <p> {user?.email} </p>
                          </div>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        <Link
                          to={`/dashboard/my-donation-requests-update/${perDonationReq?._id}`}
                        >
                          <button className="btn btn-sm rounded-none bg-[#2161a2] text-white hover:bg-[#1b4978]">
                            Edit
                          </button>
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        <button
                          onClick={() => handleDelete(perDonationReq?._id)}
                          className="btn btn-sm rounded-none bg-[#d33] text-white hover:bg-[#ac2828]"
                        >
                          Delete
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        <Link
                          to={`/dashboard/donation-details/${perDonationReq?._id}`}
                        >
                          <button className="btn btn-sm rounded-none bg-[#2161a2] text-white hover:bg-[#1b4978]">
                            View
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                ))}
            </table>
          </div>

          <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
            <ol className="flex justify-end gap-1 text-xs font-medium">
              <li>
                <a
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                  <span className="sr-only">Prev Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
                1
              </li>

              <li>
                <a
                  href="#"
                  className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                  2
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                  3
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                  4
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                  <span className="sr-only">Next Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ol>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center pt-10 flex-col gap-10">
          <div className="text-center text-2xl font-medium text-sky-700">
            No Donation Request Made Yet
          </div>
          <Link
            to="/dashboard/create-donation-request"
            rel="noopener noreferrer"
            className="capitalize px-8 py-3 text-lg font-semibold rounded dark:bg-sky-600 hover:bg-sky-800 transition-colors duration-300 ease-in-out dark:text-white"
          >
            create donation request
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyDonationRequests;
