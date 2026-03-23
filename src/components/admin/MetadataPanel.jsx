import React from "react";
import { Calendar as CalendarIcon, Hash, Globe, Eye } from "lucide-react";

const MetadataPanel = ({ formData, handleChange, onPublish, onSaveDraft }) => {
  return (
    <div className="space-y-6 sticky top-24">
      {/* Visual Preview / Status Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">
          Publishing Actions
        </h3>

        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-500 font-medium">Status</span>
            <span
              className={`px-2 py-1 rounded-md text-xs font-bold ${formData.status === "Published" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"}`}
            >
              {formData.status}
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-500 font-medium">
              Visibility
            </span>
            <span className="text-xs font-bold text-[#2d1b4e]">Public</span>
          </div>
        </div>

        <button
          onClick={onPublish}
          className="w-full bg-[#ffc12b] text-[#2d1b4e] font-bold py-4 rounded-xl hover:bg-[#ffcd57] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 mb-3"
        >
          Publish Internship
        </button>
        <button
          onClick={onSaveDraft}
          className="w-full border border-gray-200 text-gray-600 font-bold py-3 rounded-xl hover:bg-gray-50 transition-all"
        >
          Save Draft
        </button>
      </div>

      {/* Metadata Fields */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6 space-y-6">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">
          Internship Setup
        </h3>

        {/* Featured Toggle */}
        <div
          className="flex items-center justify-between group cursor-pointer"
          onClick={() =>
            handleChange({
              target: {
                name: "featured",
                type: "checkbox",
                checked: !formData.featured,
              },
            })
          }
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg transition-colors ${formData.featured ? "bg-[#ffc12b]/20 text-[#d49e18]" : "bg-gray-100 text-gray-400"}`}
            >
              <Hash className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-gray-800 text-sm">
                Featured Internship
              </p>
              <p className="text-xs text-gray-400">Pin to top of lists</p>
            </div>
          </div>
          <div
            className={`w-12 h-6 rounded-full p-1 transition-colors relative ${formData.featured ? "bg-[#ffc12b]" : "bg-gray-200"}`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${formData.featured ? "translate-x-6" : "translate-x-0"}`}
            ></div>
          </div>
        </div>

        {/* Remote Toggle */}
        <div
          className="flex items-center justify-between group cursor-pointer"
          onClick={() =>
            handleChange({
              target: {
                name: "remote",
                type: "checkbox",
                checked: !formData.remote,
              },
            })
          }
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg transition-colors ${formData.remote ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-400"}`}
            >
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-gray-800 text-sm">Remote Friendly</p>
              <p className="text-xs text-gray-400">Badge shown on card</p>
            </div>
          </div>
          <div
            className={`w-12 h-6 rounded-full p-1 transition-colors relative ${formData.remote ? "bg-[#2d1b4e]" : "bg-gray-200"}`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${formData.remote ? "translate-x-6" : "translate-x-0"}`}
            ></div>
          </div>
        </div>

        {/* Dates */}
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            Application Deadline
          </label>
          <div className="relative">
            <CalendarIcon className="absolute w-4 h-4 text-gray-400" style={{ left: "12px", top: "50%", transform: "translateY(-50%)" }} />
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium text-gray-700 outline-none focus:bg-white focus:border-[#2d1b4e] transition-all"
              style={{ paddingLeft: "36px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetadataPanel;
