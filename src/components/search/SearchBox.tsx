import { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

const SearchBox = () => {
  const today = new Date().toISOString().split("T")[0];

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [journeyDate, setJourneyDate] = useState(today);

  // Swap From and To locations
  const swapLocations = () => {
    setFrom(to);
    setTo(from);
  };

  // Handle Search
  const handleSearch = () => {
    if (!from.trim() || !to.trim()) {
      alert("Please enter both From and To locations.");
      return;
    }

    if (from.trim().toLowerCase() === to.trim().toLowerCase()) {
      alert("From and To locations cannot be the same.");
      return;
    }

    alert(`Searching buses from ${from} to ${to} on ${journeyDate}`);
  };

  return (
    <div className="mx-auto -mt-12 max-w-6xl rounded-2xl bg-white p-6 shadow-xl">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        
        {/* From */}
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="rounded-lg border p-4 outline-none focus:border-red-500"
        />

        {/* Swap Button */}
        <button
          onClick={swapLocations}
          className="flex items-center justify-center rounded-lg border bg-gray-100 transition hover:bg-red-600 hover:text-white"
          title="Swap Locations"
        >
          <FaExchangeAlt />
        </button>

        {/* To */}
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="rounded-lg border p-4 outline-none focus:border-red-500"
        />

        {/* Journey Date */}
        <input
          type="date"
          min={today}
          value={journeyDate}
          onChange={(e) => setJourneyDate(e.target.value)}
          className="rounded-lg border p-4 outline-none focus:border-red-500"
        />

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="rounded-lg bg-red-600 p-4 font-semibold text-white transition hover:bg-red-700"
        >
          Search Buses
        </button>
      </div>
    </div>
  );
};

export default SearchBox;