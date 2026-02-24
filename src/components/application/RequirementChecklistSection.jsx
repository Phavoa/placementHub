import React from "react";
import { CheckSquare } from "lucide-react";

const RequirementChecklistSection = ({
  requirements = [],
  responses = {},
  handleChange,
}) => {
  if (!requirements?.length) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6 animate-in slide-in-from-bottom duration-500 delay-200">
      <div className="flex items-center gap-3 mb-2 border-b border-gray-100 pb-4">
        <div className="bg-blue-50 p-2 rounded-lg">
          <CheckSquare className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#2d1b4e]">
            Requirements Check
          </h3>
          <p className="text-gray-400 text-sm">
            Please confirm you meet the key criteria
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {requirements.map((req, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
          >
            <div className="mt-1">
              <input
                type="checkbox"
                name={`req_${index}`}
                checked={responses[`req_${index}`] || false}
                onChange={handleChange}
                className="w-5 h-5 rounded border-gray-300 text-[#2d1b4e] focus:ring-[#2d1b4e] cursor-pointer"
              />
            </div>
            <label
              className="text-sm font-medium text-gray-700 cursor-pointer select-none leading-relaxed"
              onClick={() =>
                handleChange({
                  target: {
                    name: `req_${index}`,
                    type: "checkbox",
                    checked: !responses[`req_${index}`],
                  },
                })
              }
            >
              {req}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequirementChecklistSection;
