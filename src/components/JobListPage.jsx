import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"; // Assuming Footer is exported as default from Footer.jsx based on index.css analysis, but file list showed Footer.jsx exists.
import JobCard from "./JobCard";
import FiltersBar from "./FiltersBar";
import { Search, SlidersHorizontal, ArrowDown, XCircle } from "lucide-react";
import Hubtel from "../assets/hubtel.png"; // Reusing for mock data

const JobListPage = () => {
  // Mock Data
  const mockJobs = Array(12)
    .fill({
      id: 1,
      companyName: "Hubtel",
      companyLogo: Hubtel,
      title: "Senior Product Designer",
      description:
        "We are looking for an experienced Product Designer to join our team and help shape the future of our financial products.",
      location: "Accra, Ghana",
      type: "Full Time",
      salary: "₦150k - ₦250k/mo",
      tags: ["Design", "UI/UX", "Figma"],
    })
    .map((job, i) => ({
      ...job,
      id: i + 1,
      title: i % 2 === 0 ? "Senior Product Designer" : "Frontend Developer",
      location:
        i % 3 === 0
          ? "Lagos, Nigeria"
          : i % 3 === 1
            ? "Abuja, Nigeria"
            : "Port Harcourt, Nigeria",
    }));

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
            Find your dream job, internship, or placement with top companies.
            Curated roles for every stage of your career.
          </p>
        </div>
      </section>

      {/* --- FILTERS & CONTENT --- */}
      <section className="px-4 pb-24 relative z-20">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Filters Component - Sticky & Glassmorphic */}
          <div className="sticky top-4 z-50 backdrop-blur-md bg-white/70 rounded-[2rem] shadow-lg border border-white/20 transition-all duration-300">
            <FiltersBar />
          </div>

          {/* Results Header */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-gray-200 pb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#2d1b4e]">Latest Jobs</h2>
              <p className="text-gray-500 text-sm mt-1">
                Showing <span className="font-bold text-[#2d1b4e]">24</span>{" "}
                available positions
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm font-medium">
                Sort by:
              </span>
              <div className="relative group">
                <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:border-[#2d1b4e] cursor-pointer font-medium">
                  <option>Newest</option>
                  <option>Relevance</option>
                  <option>Salary: High to Low</option>
                </select>
                <ArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Job Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockJobs.map((job, index) => (
              <div
                key={job.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <JobCard job={job} />
              </div>
            ))}
          </div>

          {/* Empty State (Hidden by default for now, can be conditionally rendered) */}
          {/* 
             <div className="text-center py-20 flex flex-col items-center">
                <div className="bg-gray-100 p-6 rounded-full mb-6">
                    <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-[#2d1b4e] mb-2">No jobs found</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-8">We couldn't find any jobs matching your current filters. Try adjusting your search criteria.</p>
                <button className="text-[#2d1b4e] font-bold flex items-center gap-2 hover:underline">
                    <XCircle className="w-5 h-5" /> Clear all filters
                </button>
             </div>
             */}

          {/* Pagination / Load More */}
          <div className="flex justify-center pt-8">
            <button className="bg-white border-2 border-[#2d1b4e]/10 text-[#2d1b4e] px-10 py-3 rounded-full font-bold hover:bg-[#2d1b4e] hover:text-white transition-all shadow-sm hover:shadow-lg">
              Load More Jobs
            </button>
          </div>
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

      {/* Reuse existingFooter - Assuming one exists or placeholder */}
      <Footer />
    </div>
  );
};

export default JobListPage;
