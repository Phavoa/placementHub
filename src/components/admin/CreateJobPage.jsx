import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, LayoutDashboard, Eye } from "lucide-react";
import JobHeaderFormSection from "./JobHeaderFormSection";
import RichTextSection from "./RichTextSection";
import DynamicListSection from "./DynamicListSection";
import MetadataPanel from "./MetadataPanel";
import Navbar from "../Navbar";

const CreateJobPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    location: "Lagos, Nigeria",
    type: "Full Time",
    experienceLevel: "Mid Level",
    salary: "",
    overview: "",
    aboutCompany: "",
    responsibilities: [""],
    requirements: [""],
    benefits: [""],
    status: "Draft",
    featured: false,
    remote: false,
    deadline: "",
  });

  // Load draft on mount
  useEffect(() => {
    const savedDraft = localStorage.getItem("jobDraft");
    if (savedDraft) {
      try {
        setFormData(JSON.parse(savedDraft));
        console.log("Draft loaded from storage");
      } catch (e) {
        console.error("Failed to load draft", e);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleListChange = (listName, index, value) => {
    const newList = [...formData[listName]];
    newList[index] = value;
    setFormData((prev) => ({ ...prev, [listName]: newList }));
  };

  const handleAddItem = (listName) => {
    setFormData((prev) => ({
      ...prev,
      [listName]: [...prev[listName], ""],
    }));
  };

  const handleRemoveItem = (listName, index) => {
    setFormData((prev) => ({
      ...prev,
      [listName]: prev[listName].filter((_, i) => i !== index),
    }));
  };

  const handlePublish = () => {
    // Determine status logic (e.g. valid fields)
    const publishedData = { ...formData, status: "Published" };
    setFormData(publishedData);
    alert("Job Published! (Console log for data)");
    console.log("Published Data:", publishedData);
    // Optional: Clear draft after publish
    localStorage.removeItem("jobDraft");
  };

  const handleSaveDraft = () => {
    const draftData = { ...formData, status: "Draft" };
    setFormData(draftData);
    localStorage.setItem("jobDraft", JSON.stringify(draftData));
    alert("Draft Saved to Browser Storage!");
    console.log("Draft Data Saved:", draftData);
  };

  const handlePreview = () => {
    navigate("/jobs/preview", { state: { jobData: formData } });
  };

  return (
    <div className="font-['Outfit'] bg-[#F9FAFB] min-h-screen pb-32">
      <Navbar />
      {/* 1. Page Header */}
      <div className="pt-28 pb-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-start justify-between">
            <div>
              <Link
                to="/jobs"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-[#2d1b4e] transition-colors font-medium mb-4 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />{" "}
                Back to Job Listing
              </Link>
              <h1 className="text-4xl font-bold text-[#2d1b4e] mb-2">
                Create New Job
              </h1>
              <p className="text-lg text-gray-500">
                Craft a premium job listing for the marketplace.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handlePreview}
                className="flex items-center gap-2 text-gray-500 font-bold px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all"
              >
                <Eye className="w-5 h-5" /> Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Layout */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT COLUMN (Forms) - 70% ish */}
          <div className="lg:col-span-8 space-y-10">
            {/* Section 1: Header Info */}
            <JobHeaderFormSection
              formData={formData}
              handleChange={handleChange}
            />

            {/* Section 2: Job Overview */}
            <RichTextSection
              title="Job Overview"
              name="overview"
              value={formData.overview}
              handleChange={handleChange}
              placeholder="Describe the role and its impact..."
            />

            {/* Section 3: Responsibilities */}
            <DynamicListSection
              title="Key Responsibilities"
              items={formData.responsibilities}
              onItemChange={(idx, val) =>
                handleListChange("responsibilities", idx, val)
              }
              onAddItem={() => handleAddItem("responsibilities")}
              onRemoveItem={(idx) => handleRemoveItem("responsibilities", idx)}
              placeholder="e.g. Lead the design team..."
            />

            {/* Section 4: Requirements */}
            <DynamicListSection
              title="Requirements"
              items={formData.requirements}
              onItemChange={(idx, val) =>
                handleListChange("requirements", idx, val)
              }
              onAddItem={() => handleAddItem("requirements")}
              onRemoveItem={(idx) => handleRemoveItem("requirements", idx)}
              placeholder="e.g. 5+ years experience in..."
            />

            {/* Section 5: Benefits */}
            <DynamicListSection
              title="Benefits & Perks"
              items={formData.benefits}
              onItemChange={(idx, val) =>
                handleListChange("benefits", idx, val)
              }
              onAddItem={() => handleAddItem("benefits")}
              onRemoveItem={(idx) => handleRemoveItem("benefits", idx)}
              placeholder="e.g. Health insurance..."
            />

            {/* Section 6: About Company */}
            <RichTextSection
              title="About Company"
              name="aboutCompany"
              value={formData.aboutCompany}
              handleChange={handleChange}
              placeholder="Briefly describe the company culture and mission..."
            />
          </div>

          {/* RIGHT COLUMN (Metadata & Actions) - 30% ish */}
          <div className="lg:col-span-4 relative">
            <MetadataPanel
              formData={formData}
              handleChange={handleChange}
              onPublish={handlePublish}
              onSaveDraft={handleSaveDraft}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateJobPage;
