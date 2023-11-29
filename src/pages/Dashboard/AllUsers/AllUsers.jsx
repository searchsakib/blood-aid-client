import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useUsers from '../../../hooks/useUsers';

const AllUsers = () => {
  const { user } = useAuth();

  // filter by status
  const [filterStatus, setFilterStatus] = useState('all');

  const [users, usersFetch, isUserLoading] = useUsers();
  const axiosSecure = useAxiosSecure();

  //! User Status Unblock Functionality
  const handleUnblock = (id) => {
    axiosSecure.patch(`/dashboard/admin/unblock/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        usersFetch();
        // navigate('/dashboard/my-donation-requests');
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `User is Unblocked!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  //!User Status Block Functionality
  const handleBlock = (id) => {
    axiosSecure.patch(`/dashboard/admin/block/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        usersFetch();
        // navigate('/dashboard/my-donation-requests');
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `User is Blocked!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  //!User Role: Make Volunteer Functionality
  const handleMakeVolunteer = (id) => {
    axiosSecure.patch(`/dashboard/admin/make-volunteer/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        usersFetch();
        // navigate('/dashboard/my-donation-requests');
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `User is a Volunteer Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  //!User Role: Make Admin Functionality
  const handleMakeAdmin = (id) => {
    axiosSecure.patch(`/dashboard/admin/make-admin/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        usersFetch();
        // navigate('/dashboard/my-donation-requests');
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `User is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  if (isUserLoading)
    return (
      <span className="loading loading-bars text-red-500 loading-lg"></span>
    );

  // const myusers = useLoaderData();
  // const [theusers, setTheusers] = useState([]);
  // console.log(myusers);

  return (
    <div>
      <h2 className="text-3xl text-center font-semibold pb-5">
        My Blood Donation Requests
      </h2>
      {users?.length > 0 ? (
        <div className="rounded-lg border border-gray-200">
          <Helmet>
            <title>Blood Aid | All Users</title>
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
              <option value="active">Active</option>
              <option value="blocked">Blocked</option>
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
                    User Avatar
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    User Email
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    User Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    User Status
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    User Role
                  </th>
                </tr>
              </thead>

              {/* Render donation requests based on the selected status */}

              {users
                ?.filter((perUser) => {
                  if (filterStatus === 'all') return true;
                  return perUser.status === filterStatus;
                })
                .map((perUser, index) => (
                  <tbody
                    key={perUser?._id}
                    className="divide-y divide-gray-200"
                  >
                    <tr>
                      <th>{index + 1}.</th>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        <div className="avatar">
                          <div className="w-14 rounded-full">
                            <img src={perUser?.photo} />
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                        <p>{perUser?.email}</p>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {perUser?.name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {perUser?.status}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex flex-col items-center  gap-3">
                        {perUser?.status === 'active' ? (
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleBlock(perUser?._id)}
                              className="btn btn-sm rounded-none bg-[#2161a2] text-white hover:bg-[#1b4978]"
                            >
                              Block
                            </button>
                          </div>
                        ) : (
                          <div>
                            <button
                              onClick={() => handleUnblock(perUser?._id)}
                              className="btn btn-sm rounded-none bg-[#2161a2] text-white hover:bg-[#1b4978]"
                            >
                              Unblock
                            </button>
                          </div>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {perUser?.role}
                      </td>

                      <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex flex-col gap-2 items-center">
                        {/* make donor to volunteer */}
                        {perUser?.role === 'donor' && (
                          <div>
                            <button
                              onClick={() => handleMakeVolunteer(perUser?._id)}
                              className="btn btn-sm rounded-none bg-[#2161a2] text-white hover:bg-[#1b4978]"
                            >
                              Make Volunteer
                            </button>
                          </div>
                        )}
                        {/* make donor to Admin */}
                        {perUser?.role === 'donor' && (
                          <div>
                            <button
                              onClick={() => handleMakeAdmin(perUser?._id)}
                              className="btn btn-sm rounded-none bg-[#2161a2] text-white hover:bg-[#1b4978]"
                            >
                              Make Admin
                            </button>
                          </div>
                        )}
                        {/* make volunteer to admin */}
                        {perUser?.role === 'volunteer' && (
                          <div>
                            <button
                              onClick={() => handleMakeAdmin(perUser?._id)}
                              className="btn btn-sm rounded-none bg-[#2161a2] text-white hover:bg-[#1b4978]"
                            >
                              Make Admin
                            </button>
                          </div>
                        )}
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

export default AllUsers;
