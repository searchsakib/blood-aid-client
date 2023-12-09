import { Helmet } from 'react-helmet-async';
import towns from '../../data/towns';
import { useEffect, useState } from 'react';
import useUsers from '../../hooks/useUsers';

const SearchPage = () => {
  const [district, setDistrict] = useState();
  const [upazila, setUpazila] = useState();
  const [upazilas, setUpazilas] = useState([]);
  const [matchedUser, setMatchedUser] = useState([]);

  // fetching all users data
  const [users, usersFetch, isUserLoading] = useUsers();
  console.log(users[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const blood = form.get('blood');
    const district = form.get('district');
    const upazila = form.get('upazila');

    const filteredUser = users.filter(
      (singleUser) =>
        singleUser.blood === blood &&
        singleUser.district === district &&
        singleUser.upazila === upazila
    );

    if (filteredUser.length > 0) {
      console.log('We are matched');
      setMatchedUser(filteredUser);
    } else {
      setMatchedUser('');
      console.log('Not matched');
    }
  };

  useEffect(() => {
    if (district) {
      setUpazilas(towns[district] || []);
    }
  }, [district]);
  // console.log(towns[district]);

  return (
    <div className="max-w-screen-lg mx-auto min-h-[80vh]">
      <Helmet>
        <title>Blood Aid | Search Page</title>
      </Helmet>
      <h2 className="text-3xl py-10 font-semibold text-center">Search</h2>
      <div className="flex gap-10  justify-center">
        <form onSubmit={handleSubmit} className="" action="">
          <div>
            <label htmlFor="" className="block p-3">
              Blood Group
            </label>
            <select name="blood" id="" className="mx-3 px-3 outline outline-2">
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div>
            <label htmlFor="" className="block p-3">
              Districts
            </label>
            <select
              onChange={(e) => setDistrict(e.target.value)}
              name="district"
              id=""
              className="mx-3 px-3 outline outline-2"
            >
              <option value="">Select District</option>
              {Object.keys(towns)
                .sort()
                .map((town) => (
                  <option key={town} value={town}>
                    {' '}
                    {town}{' '}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="" className="block p-3">
              Upazilas
            </label>
            <select
              name="upazila"
              id=""
              className="mx-3 px-3 outline outline-2"
              onChange={(e) => setUpazila(e.target.value)}
            >
              <option value="">Select Upazila</option>
              {upazilas.map((singleUpazila) => {
                return (
                  <option key={singleUpazila} value={singleUpazila}>
                    {singleUpazila}
                  </option>
                );
              })}
            </select>
          </div>
          <button className="btn mx-2 my-5  bg-[#05386B] text-white hover:text-[#05386B]  hover:bg-blue-50 hover:border-2 hover:border-[#05386B] rounded-none">
            Search Donor
          </button>
        </form>

        <div>
          <h2>This is where the magic happens</h2>
          {matchedUser.length > 0 && <h2>Haha</h2>}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
