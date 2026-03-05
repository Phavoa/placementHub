import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  Users,
  Search,
  Filter,
  Eye,
  CheckCircle,
  XCircle,
  Trash2,
  Download,
  MoreVertical,
  ChevronDown,
  Mail,
  Calendar,
  Briefcase,
  AlertCircle,
  Loader2,
  RefreshCw,
  Clock,
  ExternalLink,
} from "lucide-react";
import api from "../utils/api";

const InternshipDashboard = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedApp, setSelectedApp] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionLoading, setActionLoading] = useState(null);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const response = await api.get("/internship");
      setApplications(response.data);
      setError("");
    } catch (err) {
      console.error("Fetch error:", err);
      setError(
        "Failed to load applications. Make sure the backend is running.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
    window.scrollTo(0, 0);
  }, []);

  const handleStatusUpdate = async (id, newStatus) => {
    setActionLoading(id);
    try {
      await api.patch(`/internship/${id}/status`, {
        status: newStatus,
      });
      setApplications((apps) =>
        apps.map((app) =>
          app._id === id ? { ...app, status: newStatus } : app,
        ),
      );
      if (selectedApp?._id === id) {
        setSelectedApp({ ...selectedApp, status: newStatus });
      }
    } catch (err) {
      alert("Failed to update status");
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this application?"))
      return;

    setActionLoading(id);
    try {
      await api.delete(`/internship/${id}`);
      setApplications((apps) => apps.filter((app) => app._id !== id));
      setIsModalOpen(false);
    } catch (err) {
      alert("Failed to delete application");
    } finally {
      setActionLoading(null);
    }
  };

  const filteredApplications = applications.filter((app) => {
    const matchesStatus = filterStatus === "all" || app.status === filterStatus;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      (app.firstName + " " + app.lastName)
        .toLowerCase()
        .includes(searchLower) ||
      app.email.toLowerCase().includes(searchLower) ||
      app.program.toLowerCase().includes(searchLower);
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "accepted":
        return "bg-green-100 text-green-700 border-green-200";
      case "rejected":
        return "bg-red-100 text-red-700 border-red-200";
      case "reviewed":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "interview_scheduled":
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
    }
  };

  const openAppDetails = (app) => {
    setSelectedApp(app);
    setIsModalOpen(true);
  };

  return (
    <div className="font-['Outfit'] bg-[#FDFDFD] min-h-screen flex flex-col">
      <Navbar />

      <main className="grow pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#2d1b4e] mb-2">
                Internship <span className="text-[#ffc12b]">Dashboard</span>
              </h1>
              <p className="text-gray-500 font-medium">
                Manage and review candidate applications efficiently.
              </p>
            </div>
            <button
              onClick={fetchApplications}
              className="inline-flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm group"
            >
              <RefreshCw
                className={`w-5 h-5 group-hover:rotate-180 transition-transform duration-500 ${loading ? "animate-spin" : ""}`}
              />
              Refresh Data
            </button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              {
                label: "Total Applications",
                value: applications.length,
                icon: Users,
                color: "bg-purple-50 text-purple-600",
              },
              {
                label: "Pending Review",
                value: applications.filter((a) => a.status === "pending")
                  .length,
                icon: Clock,
                color: "bg-yellow-50 text-yellow-600",
              },
              {
                label: "Accepted",
                value: applications.filter((a) => a.status === "accepted")
                  .length,
                icon: CheckCircle,
                color: "bg-green-50 text-green-600",
              },
              {
                label: "Rejected",
                value: applications.filter((a) => a.status === "rejected")
                  .length,
                icon: XCircle,
                color: "bg-red-50 text-red-600",
              },
              {
                label: "Interviews",
                value: applications.filter(
                  (a) => a.status === "interview_scheduled",
                ).length,
                icon: Calendar,
                color: "bg-purple-50 text-purple-600",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5"
              >
                <div
                  className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center`}
                >
                  <stat.icon className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-[#2d1b4e]">
                    {stat.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Filters & Search */}
          <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm mb-8 flex flex-col lg:flex-row gap-4">
            <div className="relative grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, email, or program..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-100 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-[#2d1b4e]/5 focus:border-[#2d1b4e] transition-all"
              />
            </div>
            <div className="flex gap-4">
              <div className="relative min-w-[180px]">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full pl-10 pr-10 py-3.5 rounded-2xl border border-gray-100 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-[#2d1b4e]/5 transition-all appearance-none font-bold text-gray-700"
                >
                  <option value="all">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="reviewed">Reviewed</option>
                  <option value="interview_scheduled">Interviewing</option>
                  <option value="accepted">Accepted</option>
                  <option value="rejected">Rejected</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden">
            {loading ? (
              <div className="py-24 flex flex-col items-center justify-center gap-4">
                <Loader2 className="w-12 h-12 text-[#ffc12b] animate-spin" />
                <p className="text-gray-500 font-bold">
                  Loading Applications...
                </p>
              </div>
            ) : filteredApplications.length === 0 ? (
              <div className="py-24 text-center">
                <div className="w-20 h-20 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#2d1b4e] mb-2">
                  No applications found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your filters or search query.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50 border-b border-gray-100">
                      <th className="px-8 py-6 text-sm font-bold text-gray-500">
                        CANDIDATE
                      </th>
                      <th className="px-8 py-6 text-sm font-bold text-gray-500">
                        PROGRAM
                      </th>
                      <th className="px-8 py-6 text-sm font-bold text-gray-500">
                        APPLIED ON
                      </th>
                      <th className="px-8 py-6 text-sm font-bold text-gray-500">
                        STATUS
                      </th>
                      <th className="px-8 py-6 text-sm font-bold text-gray-500 text-right">
                        ACTIONS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredApplications.map((app) => (
                      <tr
                        key={app._id}
                        onClick={() => navigate(`/admin/internship/${app._id}`)}
                        className="hover:bg-gray-50/30 transition-colors group cursor-pointer"
                      >
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#2d1b4e] text-[#ffc12b] rounded-2xl flex items-center justify-center font-bold text-lg shadow-inner">
                              {app.firstName[0]}
                              {app.lastName[0]}
                            </div>
                            <div>
                              <p className="font-bold text-[#2d1b4e]">
                                {app.firstName} {app.lastName}
                              </p>
                              <p className="text-gray-400 text-sm">
                                {app.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <span className="font-medium text-gray-600 truncate max-w-[200px] block">
                            {app.program}
                          </span>
                        </td>
                        <td className="px-8 py-6">
                          <p className="text-gray-500 font-medium">
                            {new Date(app.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              },
                            )}
                          </p>
                        </td>
                        <td className="px-8 py-6">
                          <span
                            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${getStatusColor(app.status)}`}
                          >
                            {app.status}
                          </span>
                        </td>
                        <td
                          className="px-8 py-6 text-right"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() =>
                                navigate(`/admin/internship/${app._id}`)
                              }
                              className="p-2.5 text-gray-400 hover:text-[#2d1b4e] hover:bg-white rounded-xl transition-all shadow-sm border border-transparent hover:border-gray-100"
                              title="View Details"
                            >
                              <Eye className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() =>
                                handleStatusUpdate(app._id, "accepted")
                              }
                              className="p-2.5 text-gray-400 hover:text-green-600 hover:bg-white rounded-xl transition-all shadow-sm border border-transparent hover:border-gray-100 disabled:opacity-50"
                              disabled={
                                actionLoading === app._id ||
                                app.status === "accepted"
                              }
                              title="Accept"
                            >
                              {actionLoading === app._id ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                              ) : (
                                <CheckCircle className="w-5 h-5" />
                              )}
                            </button>
                            <button
                              onClick={() =>
                                handleStatusUpdate(app._id, "rejected")
                              }
                              className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-white rounded-xl transition-all shadow-sm border border-transparent hover:border-gray-100 disabled:opacity-50"
                              disabled={
                                actionLoading === app._id ||
                                app.status === "rejected"
                              }
                              title="Reject"
                            >
                              {actionLoading === app._id ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                              ) : (
                                <XCircle className="w-5 h-5" />
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Detail Modal */}
      {isModalOpen && selectedApp && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-[#2d1b4e]/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden animate-scale-up">
            {/* Modal Header */}
            <div className="bg-[#2d1b4e] p-8 md:p-10 text-white relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors"
              >
                <XCircle className="w-8 h-8" />
              </button>
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-[#ffc12b] text-[#2d1b4e] rounded-3xl flex items-center justify-center font-black text-3xl shadow-lg">
                  {selectedApp.firstName[0]}
                  {selectedApp.lastName[0]}
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-1">
                    {selectedApp.firstName} {selectedApp.lastName}
                  </h2>
                  <span
                    className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20 bg-white/10`}
                  >
                    {selectedApp.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 md:p-10 max-h-[60vh] overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                        Email
                      </p>
                      <p className="text-[#2d1b4e] font-bold">
                        {selectedApp.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                        Age
                      </p>
                      <p className="text-[#2d1b4e] font-bold">
                        {selectedApp.age} Years Old
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-yellow-50 text-yellow-600 rounded-2xl">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                        Program
                      </p>
                      <p className="text-[#2d1b4e] font-bold">
                        {selectedApp.program}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-50 text-green-600 rounded-2xl">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                        Applied
                      </p>
                      <p className="text-[#2d1b4e] font-bold">
                        {new Date(selectedApp.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {selectedApp.notes && (
                <div className="bg-gray-50 rounded-[2rem] p-8 mb-10 border border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                    Additional Notes
                  </p>
                  <p className="text-gray-600 leading-relaxed font-medium italic italic-serif">
                    "{selectedApp.notes}"
                  </p>
                </div>
              )}

              {/* CV Section */}
              <div className="bg-[#2d1b4e]/5 rounded-[2rem] p-8 border border-[#2d1b4e]/10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white text-red-500 rounded-2xl flex items-center justify-center shadow-sm">
                      <FileText className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2d1b4e]">
                        Applicant Resume
                      </h4>
                      <p className="text-gray-400 text-xs">PDF/DOCX Document</p>
                    </div>
                  </div>
                  <a
                    href={`${import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"}/${selectedApp.cvPath.replace(/\\/g, "/")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#2d1b4e] font-bold px-8 py-3.5 rounded-xl border border-gray-100 hover:bg-gray-50 transition-all shadow-sm group"
                  >
                    <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                    View CV
                  </a>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-8 md:p-10 border-t border-gray-100 bg-gray-50/50 flex flex-wrap gap-4 items-center justify-between">
              <button
                onClick={() => handleDelete(selectedApp._id)}
                className="inline-flex items-center gap-2 text-red-500 font-bold hover:text-red-700 transition-colors p-2"
              >
                <Trash2 className="w-5 h-5" />
                Delete Application
              </button>

              <div className="flex gap-4">
                <button
                  onClick={() =>
                    handleStatusUpdate(selectedApp._id, "rejected")
                  }
                  className="px-8 py-3.5 rounded-xl font-bold bg-white text-gray-600 border border-gray-200 hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all shadow-sm"
                  disabled={selectedApp.status === "rejected"}
                >
                  Reject
                </button>
                <button
                  onClick={() =>
                    handleStatusUpdate(selectedApp._id, "accepted")
                  }
                  className="px-8 py-3.5 rounded-xl font-bold bg-[#ffc12b] text-[#2d1b4e] hover:bg-[#ffb000] transition-all shadow-lg hover:shadow-xl"
                  disabled={selectedApp.status === "accepted"}
                >
                  Accept Applicant
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-scale-up {
          animation: scale-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8fafc;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `,
        }}
      />
    </div>
  );
};

export default InternshipDashboard;
