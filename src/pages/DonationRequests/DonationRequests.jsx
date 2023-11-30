import { Helmet } from 'react-helmet-async';
import useAllDonatonReqs from '../../hooks/useAllDonatonReqs';
import { Link } from 'react-router-dom';

const DonationRequests = () => {
  const [allDonationReqs, allDonationReqsRefetch, isDonationReqsLoading] =
    useAllDonatonReqs();
  console.log('This all blogs data', allDonationReqs);

  if (isDonationReqsLoading) {
    return (
      <div className="flex items-center justify-center m-14 lg:m-[150px]">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto px-5">
      <Helmet>
        <title>Blood Aid |Blood Donation Requests</title>
      </Helmet>

      <h2 className="text-3xl capitalize text-center pb-5 pt-12 font-medium">
        Donation Requests
      </h2>

      <section className="pt-6 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allDonationReqs
            ?.filter((perDonReq) => perDonReq?.status === 'pending')
            .map((perDonReq) => (
              <div
                key={perDonReq?._id}
                className="card card-compact bg-green-200 shadow-xl flex flex-col text-center gap-5"
              >
                <div className="card-body mx-auto">
                  <h2 className="card-title mx-auto">
                    Requester name: {perDonReq?.requester_name}
                  </h2>
                  <p className="text-lg">
                    Location: {perDonReq?.full_address}{' '}
                  </p>
                </div>
                <div className="text-lg">Date: {perDonReq?.donation_date}</div>
                <div className="text-lg">Time: {perDonReq?.donation_time}</div>
                <Link to={`/dashboard/donation-details/${perDonReq?._id}`}>
                  <button className="btn bg-gray-600 text-white hover:bg-gray-800">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default DonationRequests;
