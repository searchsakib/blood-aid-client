import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import useDonationReqs from '../../../hooks/useDonationReqs';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const MyDonationRequests = () => {
  const { user } = useAuth();

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
      {/* <div className="text-3xl text-center py-5">
        Data fetched here: {donationReqs.length}
      </div> */}

      <div>
        <h2 className="text-3xl text-center pb-10">
          Welcome 🎉{' '}
          <span className="font-semibold text-red-500">
            {user?.displayName}
          </span>
        </h2>
      </div>

      <Helmet>
        <title>Blood Aid | Dashboard Home</title>
      </Helmet>
      {donationReqs?.length > 0 ? (
        <div className="rounded-lg border border-gray-200">
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

              {donationReqs
                .slice()
                .reverse()
                .slice(0, 3)
                ?.map((perDonationReq, index) => (
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
        </div>
      ) : (
        <div className="text-center text-2xl font-medium">
          No Donation Request Made Yet
        </div>
      )}

      {/* donationReqs?.length > 0 */}

      {donationReqs?.length > 0 ? (
        <div className="flex items-center justify-center pt-10">
          <Link
            to="/dashboard/my-donation-requests"
            rel="noopener noreferrer"
            className="capitalize px-8 py-3 text-lg font-semibold rounded dark:bg-red-600 hover:bg-red-800 transition-colors duration-300 ease-in-out dark:text-white"
          >
            view my all request
          </Link>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default MyDonationRequests;
