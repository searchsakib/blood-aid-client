import { Link, useLoaderData } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useEffect, useState } from 'react';
const Profile = () => {
  const { user } = useAuth();
  const usersProfile = useLoaderData();
  console.log(usersProfile);
  const [myProfiles, setMyProfiles] = useState([]);

  useEffect(() => {
    if (user) {
      const filteredProfiles = usersProfile.filter(
        (profile) => profile.email === user.email
      );
      setMyProfiles(filteredProfiles);
    }
  }, [usersProfile, user]);
  console.log(myProfiles);

  return (
    <div className="">
      {myProfiles.length > 0 ? (
        myProfiles?.map((myProfile) => (
          <div
            key={myProfile?._id}
            className="max-w-md p-8 sm:flex sm:space-x-6 bg-gray-900 text-gray-100"
          >
            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
              <img
                src={myProfile?.photo}
                alt=""
                className="object-cover object-center w-full h-full rounded bg-gray-500"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-2xl font-semibold">{myProfile?.name}</h2>
                <span className="font-medium">
                  Location: {myProfile?.upazila}, {myProfile?.district}{' '}
                </span>
              </div>
              <div className="space-y-1">
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-label="Email address"
                    className="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                    ></path>
                  </svg>
                  <span className="font-medium">{myProfile?.email}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <p>Blood Group:</p>
                  <span className="font-medium">{myProfile?.blood}</span>
                </span>
              </div>
              <div>
                <Link to={`/dashboard/update-profile/${myProfile._id}`}>
                  <button className="btn bg-[#2161a2] hover:bg-[#1b4978] text-white">
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="grid col-span-2 gap-10 mt-10 px-10">
          <span className="loading loading-spinner loading-lg text-red-600"></span>
        </div>
      )}
    </div>
  );
};

export default Profile;
