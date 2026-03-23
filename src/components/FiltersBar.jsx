import React from "react";
import { Search, MapPin, Briefcase, ChevronDown } from "lucide-react";

const FiltersBar = ({
  search,
  setSearch,
  location,
  setLocation,
  type,
  setType,
  onSearch,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="p-3 w-full flex flex-col md:flex-row gap-3 items-center">
      {/* Search Input */}
      <div className="flex-1 w-full md:w-auto relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#2d1b4e] transition-colors mt-1" />
        <input
          type="text"
          placeholder="Internship title, keywords, or company"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full pl-20 pr-6 py-4 rounded-full bg-gray-50 border border-transparent focus:bg-white focus:border-[#2d1b4e]/20 outline-none transition-all placeholder:text-gray-400 text-gray-700 font-medium"
          style={{
            paddingLeft: "50px",
          }}
        />
      </div>

      <div className="hidden md:block w-px h-10 bg-gray-200"></div>

      {/* Filters Container */}
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        {/* Location Filter */}
        <div className="relative group w-full sm:w-auto">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#ffc12b] transition-colors mt-1" />
          <select
            className="w-full sm:w-[180px] pl-12 pr-10 py-4 rounded-full bg-gray-50 border border-transparent focus:bg-white focus:border-[#2d1b4e]/20 outline-none transition-all appearance-none cursor-pointer text-gray-700 font-medium"
            style={{
              paddingLeft: "50px",
            }}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Location</option>
            <option value="Remote">Remote</option>
            <option value="Lagos, Nigeria">Lagos</option>
            <option value="Abuja, Nigeria">Abuja</option>
            <option value="Port Harcourt, Nigeria">Port Harcourt</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none mt-1" />
        </div>

        {/* Job Type Filter */}
        <div className="relative group w-full sm:w-auto">
          <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#ffc12b] transition-colors mt-1" />
          <select
            className="w-full sm:w-[180px] pl-12 pr-10 py-4 rounded-full bg-gray-50 border border-transparent focus:bg-white focus:border-[#2d1b4e]/20 outline-none transition-all appearance-none cursor-pointer text-gray-700 font-medium"
            style={{
              paddingLeft: "50px",
            }}
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="Internship">Internship</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none mt-1" />
        </div>
      </div>

      <button
        onClick={onSearch}
        className="w-full md:w-auto bg-[#ffc12b] text-[#2d1b4e] px-8 py-4 rounded-full font-bold hover:bg-[#ffcd57] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
      >
        Find Opportunities
      </button>
    </div>
  );
};

export default FiltersBar;
