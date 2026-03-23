import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, LayoutDashboard, Eye } from "lucide-react";
import JobHeaderFormSection from "./JobHeaderFormSection";
import RichTextSection from "./RichTextSection";
import DynamicListSection from "./DynamicListSection";
import MetadataPanel from "./MetadataPanel";
import AdminNavbar from "./AdminNavbar";
import api from "../../utils/api";

const CreateJobPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    location: "Lagos, Nigeria",
    type: "Internship",
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handlePublish = async () => {
    setIsSubmitting(true);
    setError(null);
    console.log(formData);
    try {
      // Filter out empty strings from array lists
      const payload = {
        ...formData,
        status: "Published",
        responsibilities: formData.responsibilities.filter(
          (i) => i.trim() !== "",
        ),
        requirements: formData.requirements.filter((i) => i.trim() !== ""),
        benefits: formData.benefits.filter((i) => i.trim() !== ""),
      };

      const response = await api.post("/jobs", payload);

      if (response.status === 201) {
        alert("Internship Published Successfully!");
        localStorage.removeItem("jobDraft");
        navigate("/internships"); // Or wherever you want to redirect
      }
    } catch (err) {
      console.error("Failed to publish internship:", err);
      setError(err.response?.data?.error || "Failed to publish internship");
      alert(err.response?.data?.error || "Failed to publish internship");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveDraft = () => {
    const draftData = { ...formData, status: "Draft" };
    setFormData(draftData);
    localStorage.setItem("jobDraft", JSON.stringify(draftData));
    alert("Draft Saved to Browser Storage!");
    console.log("Draft Data Saved:", draftData);
  };

  const handlePreview = () => {
    navigate("/internships/preview", { state: { jobData: formData } });
  };

  return (
    <div className="font-['Outfit'] bg-[#F9FAFB] min-h-screen pb-24 md:pb-32">
      <AdminNavbar />
      {/* 1. Page Header */}
      <div className="pt-24 md:pt-28 pb-8 md:pb-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-0">
            <div>
              <Link
                to="/admin/internship"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-[#2d1b4e] transition-colors font-medium mb-3 md:mb-4 group text-sm md:text-base"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />{" "}
                Back to Dashboard
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-[#2d1b4e] mb-2">
                Create New Internship
              </h1>
              <p className="text-base md:text-lg text-gray-500">
                Craft a premium internship listing for the marketplace.
              </p>
            </div>

            <div className="flex w-full md:w-auto">
              <button
                onClick={handlePreview}
                className="flex flex-1 md:flex-none justify-center items-center gap-2 text-gray-500 font-bold px-6 py-3.5 md:py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all text-sm md:text-base"
              >
                <Eye className="w-4 h-4 md:w-5 md:h-5" /> Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* LEFT COLUMN (Forms) - 70% ish */}
          <div className="lg:col-span-8 space-y-8 md:space-y-10">
            {/* Section 1: Header Info */}
            <JobHeaderFormSection
              formData={formData}
              handleChange={handleChange}
            />

            {/* Section 2: Internship Overview */}
            <RichTextSection
              title="Internship Overview"
              name="overview"
              value={formData.overview}
              handleChange={handleChange}
              placeholder="Describe the internship role and its impact..."
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
