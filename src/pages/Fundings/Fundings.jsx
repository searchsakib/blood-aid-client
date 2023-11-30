import { Helmet } from 'react-helmet-async';

const handleSubmit = (event) => {
  event.preventDefault();
  event.target.reset();
};

const Fundings = () => {
  return (
    <div>
      <Helmet>
        <title>Blood Aid | Fundings</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-[70vh] bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white rounded shadow-md">
          <h1 className="text-3xl font-bold mb-4">Fundings</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="amount" className="block mb-1">
                Enter funding amount:
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="Enter amount"
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="cardNumber" className="block mb-1">
                Credit Card Number:
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="Enter card number"
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex">
              <div className="w-1/2 pr-2">
                <label htmlFor="expiry" className="block mb-1">
                  Expiry Date:
                </label>
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  placeholder="MM/YY"
                  className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="w-1/2 pl-2">
                <label htmlFor="cvv" className="block mb-1">
                  CVV:
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="Enter CVV"
                  className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none">
              Submit Funding
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Fundings;
