import { FaAddressCard } from 'react-icons/fa';
import { BiSolidDonateBlood } from 'react-icons/bi';
import { FaHandsHelping } from 'react-icons/fa';

const Featured = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 md:px-6">
      <section className="py-6 text-black bg-gray-100">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-4xl font-bold">How it Works?</h2>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-4">
            <div className="text-5xl text-red-600">
              <FaAddressCard />
            </div>
            <h3 className="my-3 text-3xl font-medium text-center">
              Register & Become a Donor
            </h3>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="text-5xl text-red-600">
              <BiSolidDonateBlood />
            </div>
            <h3 className="my-3 text-3xl font-medium text-center">
              Request & Donate Blood
            </h3>
          </div>
          <div className="flex flex-col items-center p-4 sm:col-span-3 lg:col-span-1">
            <div className="text-5xl text-red-600">
              <FaHandsHelping />
            </div>
            <h3 className="my-3 text-3xl font-medium text-center">
              Become a Volunteer & Help Others
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
