import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  ArrowLeft,
  Mail,
  Calendar,
  Briefcase,
  FileText,
  Download,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Loader2,
  Save,
  Trash2,
  User,
  MessageSquare,
  Eye,
} from "lucide-react";
import api from "../utils/api";

const InternshipApplicationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState("");
  const [interviewDate, setInterviewDate] = useState("");
  const [interviewLink, setInterviewLink] = useState("");

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await api.get(`/internship/${id}`);
        setApplication(response.data);
        setFeedback(response.data.adminFeedback || "");
        setStatus(response.data.status);
        setInterviewDate(
          response.data.interviewDate
            ? new Date(response.data.interviewDate).toISOString().slice(0, 16)
            : "",
        );
        setInterviewLink(response.data.interviewLink || "");
      } catch (err) {
        console.error("Error fetching application:", err);
        setError("Could not find the application details.");
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
    window.scrollTo(0, 0);
  }, [id]);

  const handleUpdate = async (newStatus = status) => {
    setIsSaving(true);
    try {
      await api.patch(`/internship/${id}/status`, {
        status: newStatus,
        adminFeedback: feedback,
        interviewDate: interviewDate || null,
        interviewLink: interviewLink,
      });
      setStatus(newStatus);
      // Show success briefly or just rely on state
      alert("Application updated successfully");
    } catch (err) {
      alert("Failed to update application");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (
      !window.confirm(
        "Are you sure you want to permanently delete this application?",
      )
    )
      return;
    try {
      await api.delete(`/internship/${id}`);
      navigate("/admin/internship");
    } catch (err) {
      alert("Failed to delete application");
    }
  };

  if (loading) {
    return (
      <div className="font-['Outfit'] bg-gray-50 min-h-screen flex flex-col">
        <Navbar />
        <main className="grow flex items-center justify-center p-4">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-12 h-12 text-[#ffc12b] animate-spin" />
            <p className="text-[#2d1b4e] font-bold text-lg">
              Loading Candidate Profile...
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !application) {
    return (
      <div className="font-['Outfit'] bg-gray-50 min-h-screen flex flex-col">
        <Navbar />
        <main className="grow flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white p-12 rounded-[2.5rem] shadow-xl text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-[#2d1b4e] mb-4">Oops!</h2>
            <p className="text-gray-500 mb-8">
              {error || "Application not found"}
            </p>
            <Link
              to="/admin/internship"
              className="bg-[#2d1b4e] text-white px-8 py-3 rounded-xl font-bold"
            >
              Back to Dashboard
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getStatusDisplay = (s) => {
    switch (s) {
      case "accepted":
        return {
          color: "bg-green-100 text-green-700 border-green-200",
          icon: CheckCircle,
          label: "Accepted",
        };
      case "rejected":
        return {
          color: "bg-red-100 text-red-700 border-red-200",
          icon: XCircle,
          label: "Rejected",
        };
      case "interview_scheduled":
        return {
          color: "bg-purple-100 text-purple-700 border-purple-200",
          icon: Calendar,
          label: "Interview Scheduled",
        };
      case "reviewed":
        return {
          color: "bg-blue-100 text-blue-700 border-blue-200",
          icon: Eye,
          label: "Reviewed",
        };
      default:
        return {
          color: "bg-yellow-100 text-yellow-700 border-yellow-200",
          icon: Clock,
          label: "Pending",
        };
    }
  };

  const statusInfo = getStatusDisplay(status);

  return (
    <div className="font-['Outfit'] bg-[#FDFDFD] min-h-screen flex flex-col">
      <Navbar />

      <main className="grow pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Navigation & Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <Link
              to="/admin/internship"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#2d1b4e] font-bold group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Dashboard
            </Link>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDelete}
                className="p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                title="Delete Application"
              >
                <Trash2 className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleUpdate()}
                disabled={isSaving}
                className="inline-flex items-center gap-2 bg-[#2d1b4e] text-white px-8 py-3 rounded-xl font-bold hover:bg-purple-900 transition-all shadow-lg hover:shadow-xl disabled:opacity-70"
              >
                {isSaving ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Save className="w-5 h-5" />
                )}
                Save Changes
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Profile Card */}
            <div className="lg:col-span-2 space-y-8">
              {/* Profile Header Card */}
              <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#ffc12b]/5 rounded-full blur-3xl -mr-10 -mt-10"></div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10 text-center md:text-left">
                  <div className="w-32 h-32 bg-[#2d1b4e] text-[#ffc12b] rounded-[2.5rem] flex items-center justify-center text-4xl font-black shadow-2xl">
                    {application.firstName[0]}
                    {application.lastName[0]}
                  </div>

                  <div className="grow">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <h1 className="text-3xl md:text-4xl font-black text-[#2d1b4e]">
                        {application.firstName}{" "}
                        <span className="text-[#ffc12b]">
                          {application.lastName}
                        </span>
                      </h1>
                      <span
                        className={`inline-flex items-center gap-2 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest border mx-auto md:mx-0 ${statusInfo.color}`}
                      >
                        <statusInfo.icon className="w-4 h-4" />
                        {statusInfo.label}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 text-gray-500 font-medium">
                        <Mail className="w-5 h-5 text-purple-400" />{" "}
                        {application.email}
                      </div>
                      <div className="flex items-center gap-3 text-gray-500 font-medium">
                        <Calendar className="w-5 h-5 text-purple-400" />{" "}
                        {application.age} Years Old
                      </div>
                      <div className="flex items-center gap-3 text-gray-500 font-medium">
                        <Briefcase className="w-5 h-5 text-purple-400" />{" "}
                        {application.program}
                      </div>
                      <div className="flex items-center gap-3 text-gray-500 font-medium">
                        <Clock className="w-5 h-5 text-purple-400" />{" "}
                        {new Date(application.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applicant Notes */}
              <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-100">
                <h3 className="text-xl font-black text-[#2d1b4e] mb-6 flex items-center gap-3 uppercase tracking-wider">
                  <User className="w-6 h-6 text-[#ffc12b]" /> Applicant
                  Statement
                </h3>
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                  <p className="text-gray-600 leading-relaxed italic font-medium">
                    {application.notes
                      ? `"${application.notes}"`
                      : "No additional notes provided by the candidate."}
                  </p>
                </div>
              </div>

              {/* Admin Feedback Section */}
              <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-100 border-l-8 border-l-[#ffc12b]">
                <h3 className="text-xl font-black text-[#2d1b4e] mb-6 flex items-center gap-3 uppercase tracking-wider">
                  <MessageSquare className="w-6 h-6 text-[#ffc12b]" /> Internal
                  Review Feedback
                </h3>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Record internal interview notes, technical assessment results, or hiring manager feedback here..."
                  className="w-full h-48 p-8 rounded-[2rem] bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-[#2d1b4e]/5 focus:border-[#2d1b4e] transition-all resize-none font-medium text-gray-700"
                />
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              {/* CV Preview/Download */}
              <div className="bg-[#2d1b4e] text-white rounded-[3rem] p-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors"></div>

                <h3 className="text-xl font-black mb-8 flex items-center gap-3 uppercase tracking-wider">
                  <FileText className="w-6 h-6 text-[#ffc12b]" /> Candidate CV
                </h3>

                <div className="flex flex-col items-center text-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-red-400 shadow-inner">
                    <FileText className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="font-black text-lg">Curriculum Vitae</p>
                    <p className="text-white/50 text-xs">PDF / DOCX DOCUMENT</p>
                  </div>
                </div>

                <a
                  href={`${import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"}/${application.cvPath.replace(/\\/g, "/")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#ffc12b] text-[#2d1b4e] p-5 rounded-2xl font-black hover:bg-white hover:scale-105 transition-all shadow-xl group/btn"
                >
                  <Download className="w-5 h-5 group-hover/btn:translate-y-0.5 transition-transform" />
                  VIEW RESUME
                </a>
              </div>

              {/* Interview Scheduling Card */}
              <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-100 border-l-8 border-l-purple-500">
                <h3 className="text-xl font-black text-[#2d1b4e] mb-8 uppercase tracking-wider flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-purple-500" /> Schedule
                  Interview
                </h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                      Interview Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      value={interviewDate}
                      onChange={(e) => setInterviewDate(e.target.value)}
                      className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-purple-500/5 focus:border-purple-500 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                      Meeting Link (Zoom/Google Meet)
                    </label>
                    <input
                      type="url"
                      value={interviewLink}
                      onChange={(e) => setInterviewLink(e.target.value)}
                      placeholder="https://zoom.us/j/..."
                      className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-purple-500/5 focus:border-purple-500 transition-all font-medium"
                    />
                  </div>

                  <button
                    onClick={() => handleUpdate("interview_scheduled")}
                    disabled={isSaving || !interviewDate}
                    className="w-full bg-purple-600 text-white font-bold py-4 rounded-2xl hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSaving ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Clock className="w-5 h-5" />
                    )}
                    Confirm & Schedule
                  </button>
                </div>
              </div>

              {/* Status Update Card */}
              <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-100">
                <h3 className="text-xl font-black text-[#2d1b4e] mb-8 uppercase tracking-wider">
                  Decide Outcome
                </h3>

                <div className="space-y-4">
                  <button
                    onClick={() => handleUpdate("accepted")}
                    disabled={isSaving || status === "accepted"}
                    className={`w-full p-5 rounded-2xl border-2 flex items-center justify-between font-bold transition-all ${status === "accepted" ? "bg-green-50 border-green-500 text-green-700" : "bg-white border-gray-100 text-gray-600 hover:border-green-200 hover:bg-green-50/30"}`}
                  >
                    Accept Candidate
                    {status === "accepted" ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : null}
                  </button>

                  <button
                    onClick={() => handleUpdate("reviewed")}
                    disabled={isSaving || status === "reviewed"}
                    className={`w-full p-5 rounded-2xl border-2 flex items-center justify-between font-bold transition-all ${status === "reviewed" ? "bg-blue-50 border-blue-500 text-blue-700" : "bg-white border-gray-100 text-gray-600 hover:border-blue-200 hover:bg-blue-50/30"}`}
                  >
                    Mark as Reviewed
                    {status === "reviewed" ? <Eye className="w-5 h-5" /> : null}
                  </button>

                  <button
                    onClick={() => handleUpdate("rejected")}
                    disabled={isSaving || status === "rejected"}
                    className={`w-full p-5 rounded-2xl border-2 flex items-center justify-between font-bold transition-all ${status === "rejected" ? "bg-red-50 border-red-500 text-red-700" : "bg-white border-gray-100 text-gray-600 hover:border-red-200 hover:bg-red-50/30"}`}
                  >
                    Reject Candidate
                    {status === "rejected" ? (
                      <XCircle className="w-5 h-5" />
                    ) : null}
                  </button>
                </div>

                <p className="text-gray-400 text-[10px] text-center mt-8 font-bold uppercase tracking-widest px-4">
                  Changing status will be visible to other administrators
                  immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InternshipApplicationDetail;
