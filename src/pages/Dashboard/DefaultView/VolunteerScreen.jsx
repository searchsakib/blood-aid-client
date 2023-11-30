import { Helmet } from 'react-helmet-async';
import { FaUsers } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { BiSolidDonateBlood } from 'react-icons/bi';
import useAuth from '../../../hooks/useAuth';
import useUsers from '../../../hooks/useUsers';
import useAllDonatonReqs from '../../../hooks/useAllDonatonReqs';

const VolunteerScreen = () => {
  const { user } = useAuth();
  const [users, refetch, isUserLoading] = useUsers();
  const [allDonationReqs, allDonationReqsRefetch, isDonationReqsLoading] =
    useAllDonatonReqs();

  if (isUserLoading) {
    return (
      <div className="flex items-center justify-center m-14 lg:m-[150px]">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="text-3xl text-center pb-10">
          Welcome Volunteer 🎉{' '}
          <span className="font-semibold text-red-500">
            {user?.displayName}
          </span>
        </div>
      </div>

      <Helmet>
        <title>Blood Aid | Dashboard Home</title>
      </Helmet>
      <div className="flex flex-col gap-7 px-5">
        <div className="rounded-xl border-2 border-gray-800 bg-sky-50">
          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
            <div className="avatar">
              <div className="w-24 rounded-full text-black">
                <FaUsers className="w-full h-full"></FaUsers>
              </div>
            </div>

            <div>
              <div className="font-medium text-3xl">
                <h2 className="hover:underline">Total Users</h2>
              </div>

              <p className="line-clamp-2 text-blue-950 font-semibold text-4xl pl-5">
                {users?.length}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border-2 border-gray-800 bg-sky-50">
          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
            <div className="avatar">
              <div className="w-24 rounded-full text-black">
                <GiMoneyStack className="w-full h-full"></GiMoneyStack>
              </div>
            </div>

            <div>
              <div className="font-medium text-3xl">
                <h2 className="hover:underline">Total Fundings</h2>
              </div>

              <p className="line-clamp-2 text-blue-950 font-semibold text-4xl pl-5">
                $773
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border-2 border-gray-800 bg-sky-50">
          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
            <div className="avatar">
              <div className="w-24 rounded-full text-black">
                <BiSolidDonateBlood className="w-full h-full"></BiSolidDonateBlood>
              </div>
            </div>

            <div>
              <div className="font-medium text-3xl">
                <h2 className="hover:underline">
                  Total Blood Donation Requests
                </h2>
              </div>

              <p className="line-clamp-2 text-blue-950 font-semibold text-4xl pl-5">
                {allDonationReqs?.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerScreen;
