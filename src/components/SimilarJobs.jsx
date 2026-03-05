import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { Loader2 } from "lucide-react";
import api from "../utils/api";

const SimilarJobs = () => {
  const [similarJobs, setSimilarJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSimilarJobs = async () => {
      try {
        const response = await api.get("/jobs?status=Published&limit=3");
        setSimilarJobs(response.data);
      } catch (err) {
        console.error("Failed to fetch similar jobs", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSimilarJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="py-24 bg-gray-50 flex justify-center">
        <Loader2 className="w-8 h-8 text-[#2d1b4e] animate-spin" />
      </section>
    );
  }

  if (similarJobs.length === 0) return null;

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
            <JobCard key={job._id || job.id} job={{ ...job, id: job._id }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarJobs;
