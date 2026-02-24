import React from "react";
import { Briefcase } from "lucide-react";

const ResponsibilityAlignmentSection = ({
  responsibilities = [],
  responses = {},
  handleChange,
}) => {
  if (!responsibilities?.length) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 animate-in slide-in-from-bottom duration-500 delay-100">
      <div className="flex items-center gap-3 mb-2 border-b border-gray-100 pb-4">
        <div className="bg-[#ffc12b]/10 p-2 rounded-lg">
          <Briefcase className="w-5 h-5 text-[#d49e18]" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#2d1b4e]">
            Experience Alignment
          </h3>
          <p className="text-gray-400 text-sm">
            How do you match the core responsibilities?
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {responsibilities.map((resp, index) => (
          <div key={index} className="space-y-3">
            <label className="block text-sm font-bold text-gray-700 leading-relaxed">
              <span className="text-[#2d1b4e] mr-2">#{index + 1}</span> {resp}
            </label>
            <textarea
              name={`resp_${index}`}
              placeholder="Describe your relevant experience here..."
              value={responses[`resp_${index}`] || ""}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#2d1b4e] focus:ring-2 focus:ring-[#2d1b4e]/20 outline-none transition-all text-gray-700 leading-relaxed min-h-[100px] resize-y placeholder:text-gray-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsibilityAlignmentSection;
