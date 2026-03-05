import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import JobCard from "./JobCard";
import FiltersBar from "./FiltersBar";
import { Search, ArrowDown, XCircle, Loader2 } from "lucide-react";
import api from "../utils/api";

const JobListPage = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";

  // Filter States
  const [searchQuery, setSearchQuery] = useState(initialCategory);
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [sortOption, setSortOption] = useState("newest");

  // Data States
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({ status: "Published" });
      if (searchQuery) params.append("search", searchQuery);
      if (locationFilter) params.append("location", locationFilter);
      if (typeFilter) params.append("type", typeFilter);
      if (sortOption) params.append("sort", sortOption);

      const response = await api.get(`/jobs?${params.toString()}`);
      setJobs(response.data);
    } catch (err) {
      console.error("Failed to fetch jobs:", err);
      setError("Failed to load jobs. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery, locationFilter, typeFilter, sortOption]);

  // Re-fetch whenever any filter, sort, or search changes (fetchJobs is the single dep)
  useEffect(() => {
    fetchJobs();
    window.scrollTo(0, 0);
  }, [fetchJobs]);

  // Clear all filters and directly fetch with reset params (avoids stale-state race condition)
  const handleClearFilters = async () => {
    setSearchQuery("");
    setLocationFilter("");
    setTypeFilter("");
    setSortOption("newest");
    // State setters are async — fetch directly with explicit empty params
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.get("/jobs?status=Published&sort=newest");
      setJobs(response.data);
    } catch (err) {
      console.error("Failed to fetch jobs:", err);
      setError("Failed to load jobs. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-['Outfit'] bg-gray-50 text-gray-900 overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#2d1b4e] pt-32 pb-48 px-4 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ffc12b] rounded-full blur-[120px] opacity-10 -translate-y-1/2 translate-x-1/4 pointer-events-none animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/4 pointer-events-none animate-float-delayed"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block py-2 px-4 rounded-full bg-white/10 border border-white/20 text-[#ffc12b] text-sm font-bold tracking-wide uppercase backdrop-blur-sm animate-fade-in-up">
            Opportunities await
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up delay-100">
            Explore <span className="text-[#ffc12b]">Opportunities</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Find your dream internship, placement, or career-starting role with
            top companies. Curated roles for every stage of your career.
          </p>
        </div>
      </section>

      {/* --- FILTERS & CONTENT --- */}
      <section className="px-4 pb-24 relative z-20">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Filters Component - Sticky & Glassmorphic */}
          <div className="sticky top-4 z-50 backdrop-blur-md bg-white/70 rounded-[2rem] shadow-lg border border-white/20 transition-all duration-300">
            <FiltersBar
              search={searchQuery}
              setSearch={setSearchQuery}
              location={locationFilter}
              setLocation={setLocationFilter}
              type={typeFilter}
              setType={setTypeFilter}
              onSearch={fetchJobs}
            />
          </div>

          {/* Results Header */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-gray-200 pb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#2d1b4e]">
                Latest Positions
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Showing{" "}
                <span className="font-bold text-[#2d1b4e]">{jobs.length}</span>{" "}
                available positions
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm font-medium">
                Sort by:
              </span>
              <div className="relative group">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:border-[#2d1b4e] cursor-pointer font-medium"
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="salary_high">Salary: High to Low</option>
                  <option value="salary_low">Salary: Low to High</option>
                </select>
                <ArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Job Grid */}
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-12 h-12 text-[#2d1b4e] animate-spin mb-4" />
              <p className="text-gray-500 font-medium">
                Loading opportunities...
              </p>
            </div>
          ) : error ? (
            <div className="text-center py-20 flex flex-col items-center">
              <div className="bg-red-50 p-6 rounded-full mb-6 text-red-500">
                <XCircle className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-[#2d1b4e] mb-2">
                Oops! Something went wrong
              </h3>
              <p className="text-gray-500 max-w-md mx-auto mb-8">{error}</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-20 flex flex-col items-center">
              <div className="bg-gray-100 p-6 rounded-full mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#2d1b4e] mb-2">
                No opportunities found
              </h3>
              <p className="text-gray-500 max-w-md mx-auto mb-8">
                We couldn't find any opportunities matching your current
                filters. Try adjusting your search criteria.
              </p>
              <button
                onClick={handleClearFilters}
                className="text-[#2d1b4e] font-bold flex items-center gap-2 hover:underline"
              >
                <XCircle className="w-5 h-5" /> Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobs.map((job, index) => (
                <div
                  key={job._id || job.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <JobCard job={{ ...job, id: job._id }} />
                </div>
              ))}
            </div>
          )}

          {/* Pagination / Load More */}
          {jobs.length > 0 && (
            <div className="flex justify-center pt-8">
              <button className="bg-white border-2 border-[#2d1b4e]/10 text-[#2d1b4e] px-10 py-3 rounded-full font-bold hover:bg-[#2d1b4e] hover:text-white transition-all shadow-sm hover:shadow-lg">
                Load More Opportunities
              </button>
            </div>
          )}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto bg-[#2d1b4e] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden text-white shadow-2xl">
          <div className="relative z-10 flex flex-col items-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Can't find your{" "}
              <span className="text-[#ffc12b]">ideal role?</span>
            </h2>
            <p className="text-white/80 text-lg max-w-xl">
              Join our talent network and get notified when new opportunities
              that match your profile become available.
            </p>
            <button className="bg-[#ffc12b] text-[#2d1b4e] px-12 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 shadow-xl transition-transform hover:scale-105">
              Join Talent Network
            </button>
          </div>
          {/* Shapes */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobListPage;
