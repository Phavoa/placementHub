import React from "react";
import JobCard from "./JobCard";
import Hubtel from "../assets/hubtel.png"; // Reusing mock image

const SimilarJobs = () => {
  // Mock data for similar jobs
  const similarJobs = Array(3)
    .fill({
      id: 101,
      companyName: "Hubtel",
      companyLogo: Hubtel,
      title: "Product Designer",
      description:
        "Join our design team to create amazing user experiences for our fintech products.",
      location: "Abuja, Nigeria",
      type: "Full Time",
      salary: "₦150k - ₦250k/mo",
      tags: ["Design", "Figma"],
    })
    .map((job, i) => ({
      ...job,
      id: 101 + i,
      title: i === 1 ? "UX Researcher" : "Product Designer",
    }));

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d1b4e] mb-4">
              Similar Opportunities
            </h2>
            <p className="text-gray-500 text-lg">
              Based on your profile and recent searches.
            </p>
          </div>
          <button className="text-[#2d1b4e] font-bold border-b-2 border-[#ffc12b] pb-1 hover:text-purple-800 transition-colors">
            View all related jobs
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {similarJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarJobs;
