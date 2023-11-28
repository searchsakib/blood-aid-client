import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import useDonationReqs from '../../../hooks/useDonationReqs';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyDonationRequests = () => {
  // const { user } = useAuth();

  const [donationReqs, refetch, isLoading] = useDonationReqs();
  console.log('This is donation req', donationReqs);
  const axiosSecure = useAxiosSecure();

  if (isLoading)
    return (
      <span className="loading loading-bars text-red-500 loading-lg"></span>
    );

  // const myDonationReqs = useLoaderData();
  // const [theDonationReqs, setTheDonationReqs] = useState([]);
  // console.log(myDonationReqs);

  return (
    <div>
      <div className="text-3xl text-center py-5">
        Data fetched here: {donationReqs.length}
      </div>
      {/* mock data  */}

      <div className="rounded-lg border border-gray-200">
        <Helmet>
          <title>Blood Aid | My Donation Requests</title>
        </Helmet>
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

            <tbody className="divide-y divide-gray-200">
              <tr>
                <th>1{/* {index+1} */}</th>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  jhon doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  <p>Rajbari Sadar</p>
                  <p>Rajbari</p>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  12.12.2023
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  5:12pm
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex flex-col gap-3">
                  <button className="btn btn-xs rounded-none bg-[#2161a2] text-white hover:bg-[#1b4978]">
                    Done
                  </button>
                  <button className="btn btn-xs rounded-none bg-[#2161a2] text-white hover:bg-[#1b4978]">
                    Canceled
                  </button>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  <p>Matt Henry</p>
                  <p>matthenry@mail.com</p>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <button className="btn btn-sm rounded-none bg-[#2161a2] text-white hover:bg-[#1b4978]">
                    Edit
                  </button>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <button className="btn btn-sm rounded-none bg-[#d33] text-white hover:bg-[#ac2828]">
                    Delete
                  </button>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <button className="btn btn-sm rounded-none bg-[#2161a2] text-white hover:bg-[#1b4978]">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
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

            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                1
              </a>
            </li>

            <li className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
              2
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
    </div>
  );
};

export default MyDonationRequests;
