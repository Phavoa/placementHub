import React from "react";
import { MapPin, Clock, DollarSign, ArrowRight } from "lucide-react";

const StickyJobSnapshot = ({ job, onApply }) => {
  return (
    <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-gray-100 p-8 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-[#2d1b4e] to-[#ffc12b]"></div>

      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Applying For
          </span>
          <h3 className="text-xl font-bold text-[#2d1b4e] leading-tight mt-1">
            {job.title}
          </h3>
          <p className="text-sm font-medium text-[#2d1b4e]/80 mt-1">
            {job.companyName}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded-full text-xs font-bold text-gray-600 border border-gray-200">
            <MapPin className="w-3 h-3 text-[#ffc12b]" /> {job.location}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded-full text-xs font-bold text-gray-600 border border-gray-200">
            <Clock className="w-3 h-3 text-[#ffc12b]" /> {job.type}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ffc12b]/10 rounded-full text-xs font-bold text-[#2d1b4e] border border-[#ffc12b]/20">
            <DollarSign className="w-3 h-3 text-[#ffc12b]" /> {job.salary}
          </span>
        </div>

        <div className="h-px bg-gray-100 w-full my-2"></div>

        <div className="text-center">
          <button
            onClick={onApply}
            className="w-full bg-[#ffc12b] text-[#2d1b4e] font-bold py-4 rounded-xl hover:bg-[#ffcd57] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 mb-2 group"
          >
            Submit Application{" "}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-xs text-gray-400">Takes about 3-5 minutes</p>
        </div>
      </div>
    </div>
  );
};

export default StickyJobSnapshot;
