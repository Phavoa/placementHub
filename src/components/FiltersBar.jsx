import React, { useState } from "react";
import { Search, MapPin, Briefcase, Grid, ChevronDown } from "lucide-react";

const FiltersBar = () => {
  // Placeholder state for filter inputs
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="p-3 w-full flex flex-col md:flex-row gap-3 items-center">
      {/* Search Input */}
      <div className="flex-1 w-full md:w-auto relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#2d1b4e] transition-colors mt-1" />
        <input
          type="text"
          placeholder="Job title, keywords, or company"
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
            <option value="remote">Remote</option>
            <option value="onsite">On-site</option>
            <option value="hybrid">Hybrid</option>
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
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">Job Type</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="internship">Internship</option>
            <option value="contract">Contract</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none mt-1" />
        </div>
      </div>

      <button className="w-full md:w-auto bg-[#ffc12b] text-[#2d1b4e] px-8 py-4 rounded-full font-bold hover:bg-[#ffcd57] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap">
        Find Jobs
      </button>
    </div>
  );
};

export default FiltersBar;
