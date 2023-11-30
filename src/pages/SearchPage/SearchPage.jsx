import { Helmet } from 'react-helmet-async';

const SearchPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto min-h-[80vh]">
      <Helmet>
        <title>Blood Aid | Search Page</title>
      </Helmet>
      <h2 className="text-3xl py-10 font-semibold text-center">Search</h2>
      <input type="text" />
    </div>
  );
};

export default SearchPage;
