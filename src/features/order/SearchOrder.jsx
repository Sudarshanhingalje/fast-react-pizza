import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setquery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(query);
    if (!query) return;
    navigate(`/order/${query}`);
    setquery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search order "
        value={query}
        onChange={(e) => setquery(e.target.value)}
        className="transtion-all w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}
export default SearchOrder;

//what we do here *********

// // quaey is basicaally a order id that we are seraching here
// when we submit the form we are going to console log the query navigate to that page of order
