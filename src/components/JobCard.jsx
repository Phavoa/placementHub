import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Clock, DollarSign, ArrowRight } from "lucide-react";
import Hubtel from "../assets/hubtel.png"; // Default logo fallback

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const {
    companyLogo = Hubtel,
    companyName,
    title,
    description,
    location,
    type,
    salary,
    tags = [],
  } = job;

  return (
    <div
      onClick={() => navigate(`/internships/${job.id}`)}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full group cursor-pointer relative overflow-hidden hover:-translate-y-1"
    >
      {/* Hover Gradient Border Effect */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-[#2d1b4e] to-[#ffc12b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center p-2 border border-gray-100 group-hover:border-[#ffc12b]/30 transition-colors">
            <img
              src={companyLogo}
              alt={`${companyName} logo`}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg text-[#2d1b4e] group-hover:text-[#4c2b85] transition-colors line-clamp-1">
              {title}
            </h3>
            <p className="text-sm text-gray-500 font-medium">{companyName}</p>
          </div>
        </div>
      </div>

      <div className="mb-6 grow">
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#F3F0F9] text-[#2d1b4e] text-xs font-bold rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100 mt-auto">
        <div className="flex justify-between text-sm text-gray-500 mb-4 space-y-2 sm:space-y-0 sm:flex-row flex-col items-start sm:items-center">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#ffc12b]" />
              {location}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#ffc12b]" />
              {type}
            </div>
          </div>
          {type !== "Internship" && (
            <div className="font-bold text-[#2d1b4e] bg-[#ffc12b]/10 px-3 py-1 rounded-full">
              {salary}
            </div>
          )}
        </div>

        <div className="w-full bg-[#ffc12b] text-[#2d1b4e] font-bold py-3 rounded-xl hover:bg-[#ffcd57] transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:gap-3 relative overflow-hidden">
          <span className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/40 to-transparent -skew-x-12 group-hover:animate-shine" />
          <span className="relative flex items-center justify-center gap-2">
            View Details <ArrowRight className="w-4 h-4 transition-all" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
