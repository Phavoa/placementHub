import React from "react";
import { User, Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const PersonalDetailsSection = ({ formData, handleChange }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 animate-in slide-in-from-bottom duration-500">
      <div className="flex items-center gap-3 mb-2 border-b border-gray-100 pb-4">
        <div className="bg-[#2d1b4e]/5 p-2 rounded-lg">
          <User className="w-5 h-5 text-[#2d1b4e]" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#2d1b4e]">
            Personal Information
          </h3>
          <p className="text-gray-400 text-sm">Tell us a bit about yourself</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className="w-full pl-12 pr-5 py-4 rounded-xl border border-gray-200 focus:border-[#2d1b4e] focus:ring-2 focus:ring-[#2d1b4e]/20 outline-none transition-all text-gray-700 font-medium"
            />
          </div>
        </div>

        {/* Email */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john@example.com"
              className="w-full pl-12 pr-5 py-4 rounded-xl border border-gray-200 focus:border-[#2d1b4e] focus:ring-2 focus:ring-[#2d1b4e]/20 outline-none transition-all text-gray-700 font-medium"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +234 80 123 4567"
              className="w-full pl-12 pr-5 py-4 rounded-xl border border-gray-200 focus:border-[#2d1b4e] focus:ring-2 focus:ring-[#2d1b4e]/20 outline-none transition-all text-gray-700 font-medium"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Current Location
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

        {/* LinkedIn */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            LinkedIn URL{" "}
            <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <div className="relative">
            <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="linkedin.com/in/johndoe"
              className="w-full pl-12 pr-5 py-4 rounded-xl border border-gray-200 focus:border-[#2d1b4e] focus:ring-2 focus:ring-[#2d1b4e]/20 outline-none transition-all text-gray-700 font-medium"
            />
          </div>
        </div>

        {/* Portfolio */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Portfolio URL{" "}
            <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <div className="relative">
            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="url"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              placeholder="e.g. behance.net/johndoe"
              className="w-full pl-12 pr-5 py-4 rounded-xl border border-gray-200 focus:border-[#2d1b4e] focus:ring-2 focus:ring-[#2d1b4e]/20 outline-none transition-all text-gray-700 font-medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsSection;
