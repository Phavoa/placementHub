import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Clock,
  DollarSign,
  Calendar,
  Heart,
  Share2,
  ArrowRight,
} from "lucide-react";

const StickyApplyCard = ({
  job,
  applicationJobData,
  isSaved,
  onSave,
  onShare,
}) => {
  return (
    <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-gray-100 p-8 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-[#2d1b4e] to-[#ffc12b]"></div>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-[#2d1b4e] mb-1">Job Summary</h3>
          <p className="text-sm text-gray-400">Review the key details below</p>
        </div>

        <div className="space-y-5">
          <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#f0f4f8] flex items-center justify-center text-[#2d1b4e]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                Location
              </p>
              <p className="font-semibold text-gray-800">{job.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#f0f4f8] flex items-center justify-center text-[#2d1b4e]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                Job Type
              </p>
              <p className="font-semibold text-gray-800">{job.type}</p>
            </div>
          </div>

          {job.type !== "Internship" && (
            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#f0f4f8] flex items-center justify-center text-[#2d1b4e]">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                  Salary
                </p>
                <p className="font-semibold text-gray-800">{job.salary}</p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#f0f4f8] flex items-center justify-center text-[#2d1b4e]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                Posted
              </p>
              <p className="font-semibold text-gray-800">2 days ago</p>
            </div>
          </div>
        </div>

        <div className="pt-6 space-y-3">
          <Link
            to={
              job.type === "Internship"
                ? `/internship-application`
                : `/jobs/${job._id || job.id}/apply`
            }
            state={{ jobData: applicationJobData || job }}
            className="w-full bg-[#ffc12b] text-[#2d1b4e] font-bold py-4 rounded-xl hover:bg-[#ffcd57] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden"
          >
            <span className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/40 to-transparent -skew-x-12 group-hover:animate-shine" />
            <span className="relative flex items-center gap-2">
              Apply Now <ArrowRight className="w-5 h-5" />
            </span>
          </Link>

          <div className="flex gap-3">
            <button
              onClick={onSave}
              className={`flex-1 border font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 ${isSaved ? "bg-red-50 border-red-200 text-red-500" : "border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-[#2d1b4e]"}`}
            >
              <Heart className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />{" "}
              {isSaved ? "Saved" : "Save Job"}
            </button>
            <button
              onClick={onShare}
              className="flex-1 border border-gray-200 text-gray-600 font-bold py-3 rounded-xl hover:bg-gray-50 hover:text-[#2d1b4e] transition-all flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
        </div>

        <div className="text-center pt-2">
          <p className="text-xs text-gray-400">
            <span className="block mb-1">🔒 Secure Application</span>
            You can withdraw your application at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StickyApplyCard;
