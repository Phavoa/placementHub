import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  ArrowLeft,
  CheckCircle2,
  FileText,
  Upload,
  User,
  Mail,
  Calendar,
  Briefcase,
  AlertCircle,
  Loader2,
} from "lucide-react";
import api, { apiFormData } from "../utils/api";

const InternshipApplicationPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [programs, setPrograms] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    program: "",
    notes: "",
  });

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await api.get("/internship/programs/all");
        const activePrograms = response.data.filter((p) => p.isActive);
        setPrograms(activePrograms);
        if (activePrograms.length > 0) {
          setFormData((prev) => ({
            ...prev,
            program: activePrograms[0].title,
          }));
        }
      } catch (err) {
        console.error("Error fetching programs:", err);
      }
    };
    fetchPrograms();
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("File size must be less than 5MB");
        setCvFile(null);
        return;
      }
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (
        !allowedTypes.includes(file.mimetype) &&
        !file.name.match(/\.(pdf|doc|docx)$/i)
      ) {
        setError("Only PDF, DOC, or DOCX files are allowed");
        setCvFile(null);
        return;
      }
      setCvFile(file);
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!cvFile) {
      setError("Please upload your CV");
      return;
    }

    setIsSubmitting(true);

    const data = new FormData();
    data.append("firstName", formData.firstName);
    data.append("lastName", formData.lastName);
    data.append("email", formData.email);
    data.append("age", formData.age);
    data.append("program", formData.program);
    data.append("notes", formData.notes);
    data.append("cv", cvFile);

    try {
      const response = await apiFormData.post("/internship/apply", data);

      if (response.status === 201) {
        setIsSuccess(true);
        window.scrollTo(0, 0);
        // Redirect to Paystack after 5 seconds to allow the user to see the success message
        setTimeout(() => {
          window.location.href =
            "https://paystack.com/buy/internship-registration-fee-mztcpa";
        }, 5000);
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError(
        err.response?.data?.error || "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="font-['Outfit'] bg-gray-50 min-h-screen flex flex-col">
        <Navbar />
        <main className="grow flex items-center justify-center p-4 pt-32 pb-24">
          <div className="max-w-xl w-full bg-white rounded-[2.5rem] p-12 shadow-xl border border-gray-100 text-center animate-fade-in">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#2d1b4e] mb-4">
              Details <span className="text-[#ffc12b]">received</span>
            </h1>
            <p className="text-gray-500 text-lg mb-6 leading-relaxed">
              pay your registration fee and book an interview to complete your
              application.
            </p>
            <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-2xl mb-8 flex items-center gap-3 justify-center text-yellow-800">
              <Loader2 className="w-5 h-5 animate-spin" />
              <p className="font-bold">
                Redirecting you to complete your registration payment...
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-['Outfit'] bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="grow pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#2d1b4e] transition-colors mb-6 font-medium group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-[#2d1b4e] mb-4">
              Internship <span className="text-[#ffc12b]">Application</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Ready to kickstart your career? Fill out the form below to apply
              for our premium placement program.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden relative">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffc12b]/5 rounded-full blur-3xl -mr-20 -mt-20"></div>

            <div className="p-8 md:p-12 relative z-10">
              {error && (
                <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 animate-shake">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p className="font-medium">{error}</p>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Name Group */}
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <User className="w-4 h-4 text-purple-400" /> First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="e.g. John"
                      disabled={isSubmitting}
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#2d1b4e]/5 focus:border-[#2d1b4e] transition-all disabled:opacity-50"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <User className="w-4 h-4 text-purple-400" /> Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="e.g. Doe"
                      disabled={isSubmitting}
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#2d1b4e]/5 focus:border-[#2d1b4e] transition-all disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-purple-400" /> Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#2d1b4e]/5 focus:border-[#2d1b4e] transition-all disabled:opacity-50"
                  />
                </div>

                {/* Age */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-400" /> Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    required
                    min="16"
                    max="100"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Enter your age"
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#2d1b4e]/5 focus:border-[#2d1b4e] transition-all disabled:opacity-50"
                  />
                </div>

                {/* Internship Program */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-purple-400" /> Interested
                    Program
                  </label>
                  <select
                    name="program"
                    required
                    value={formData.program}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#2d1b4e]/5 focus:border-[#2d1b4e] transition-all disabled:opacity-50 appearance-none bg-white"
                  >
                    <option value="" disabled>
                      Select a program
                    </option>
                    {programs.map((p) => (
                      <option key={p._id || p.title} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* CV Upload */}
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-purple-400" /> Curriculum
                    Vitae (CV)
                  </label>
                  <div
                    className={`relative group transition-all ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      disabled={isSubmitting}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20 disabled:cursor-not-allowed"
                    />
                    <div
                      className={`w-full p-8 md:p-12 bg-gray-50 border-2 border-dashed rounded-[2rem] flex flex-col items-center justify-center gap-4 transition-all ${cvFile ? "border-green-400 bg-green-50/50" : "border-gray-200 group-hover:border-purple-400 group-hover:bg-purple-50/30"}`}
                    >
                      <div
                        className={`w-16 h-16 rounded-3xl flex items-center justify-center transition-all ${cvFile ? "bg-green-100 text-green-600" : "bg-white text-gray-400 group-hover:bg-purple-100 group-hover:text-purple-600 shadow-sm"}`}
                      >
                        {cvFile ? (
                          <CheckCircle2 className="w-8 h-8" />
                        ) : (
                          <Upload className="w-8 h-8" />
                        )}
                      </div>
                      <div className="text-center">
                        <p
                          className={`font-bold text-lg ${cvFile ? "text-green-700" : "text-gray-700"}`}
                        >
                          {cvFile ? cvFile.name : "Upload CV"}
                        </p>
                        <p className="text-gray-400 text-sm mt-1">
                          {cvFile
                            ? `${(cvFile.size / 1024 / 1024).toFixed(2)} MB`
                            : "Max size 5MB. PDF, DOC, DOCX only."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Tell us anything else you'd like us to know..."
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#2d1b4e]/5 focus:border-[#2d1b4e] transition-all min-h-[120px] resize-y disabled:opacity-50"
                  />
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || !!error}
                    className="w-full bg-[#2d1b4e] text-white font-bold py-5 rounded-[1.5rem] hover:bg-purple-900 transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden group disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />{" "}
                        Proceeding...
                      </>
                    ) : (
                      <>Proceed</>
                    )}
                  </button>
                  <p className="text-center text-gray-400 text-xs mt-6 px-12">
                    By submitting, you agree to our Terms of Service and Privacy
                    Policy regarding data handling.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InternshipApplicationPage;
