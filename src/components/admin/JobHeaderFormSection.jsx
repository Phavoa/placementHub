import React from "react";
import { Upload, MapPin, Briefcase, DollarSign, Building2 } from "lucide-react";

const JobHeaderFormSection = ({ formData, handleChange }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8">
      <div className="flex items-center gap-3 mb-2 border-b border-gray-100 pb-4">
        <div className="bg-[#2d1b4e]/5 p-2 rounded-lg">
          <Building2 className="w-5 h-5 text-[#2d1b4e]" />
        </div>
        <h3 className="text-xl font-bold text-[#2d1b4e]">
          Job Header Information
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Job Title */}
        <div className="col-span-2">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Job Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Senior Product Designer"
            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#2d1b4e] focus:ring-2 focus:ring-[#2d1b4e]/20 outline-none transition-all text-lg font-medium text-[#2d1b4e] placeholder:text-gray-400"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Hubtel"
            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#2d1b4e] focus:ring-2 focus:ring-[#2d1b4e]/20 outline-none transition-all text-gray-700 font-medium"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Lagos, Nigeria"
              className="w-full pl-12 pr-5 py-4 rounded-xl border border-gray-200 focus:border-[#2d1b4e] focus:ring-2 focus:ring-[#2d1b4e]/20 outline-none transition-all text-gray-700 font-medium"
            />
          </div>
        </div>

        {/* Job Type & Experience Level (Row) */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Job Type
            </label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full pl-12 pr-5 py-4 rounded-xl border border-gray-200 focus:border-[#2d1b4e] focus:ring-2 focus:ring-[#2d1b4e]/20 outline-none transition-all text-gray-700 font-medium appearance-none bg-white"
              >
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Experience
            </label>
            <select
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#2d1b4e] focus:ring-2 focus:ring-[#2d1b4e]/20 outline-none transition-all text-gray-700 font-medium appearance-none bg-white"
            >
              <option value="Entry Level">Entry Level</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Senior">Senior</option>
              <option value="Executive">Executive</option>
            </select>
          </div>
        </div>

        {/* Salary */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Salary Range
          </label>
          <div className="relative">
            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="e.g. ₦350k - ₦500k/mo"
              className="w-full pl-12 pr-5 py-4 rounded-xl border border-gray-200 focus:border-[#2d1b4e] focus:ring-2 focus:ring-[#2d1b4e]/20 outline-none transition-all text-gray-700 font-medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobHeaderFormSection;
