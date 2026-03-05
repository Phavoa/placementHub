import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  Plus,
  Trash2,
  CheckCircle,
  XCircle,
  Briefcase,
  Loader2,
  AlertCircle,
  Save,
} from "lucide-react";
import api from "../utils/api";

const InternshipProgramManager = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newProgram, setNewProgram] = useState({
    title: "",
    description: "",
    category: "",
    isActive: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchPrograms = async () => {
    try {
      const response = await api.get("/internship/programs/all");
      setPrograms(response.data);
    } catch (err) {
      setError("Failed to load programs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrograms();
    window.scrollTo(0, 0);
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!newProgram.title) return;
    setIsSubmitting(true);
    try {
      await api.post("/internship/programs", newProgram);
      setNewProgram({
        title: "",
        description: "",
        category: "",
        isActive: true,
      });
      fetchPrograms();
    } catch (err) {
      alert(err.response?.data?.error || "Failed to create program");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggleStatus = async (program) => {
    try {
      await api.patch(`/internship/programs/${program._id}`, {
        isActive: !program.isActive,
      });
      fetchPrograms();
    } catch (err) {
      alert("Failed to update status");
    }
  };

  const handleDelete = async (id) => {
    if (
      !window.confirm(
        "Delete this internship program? Candidates won't be able to select it anymore.",
      )
    )
      return;
    try {
      await api.delete(`/internship/programs/${id}`);
      fetchPrograms();
    } catch (err) {
      alert("Failed to delete program");
    }
  };

  return (
    <div className="font-['Outfit'] bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="grow pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-3xl font-bold text-[#2d1b4e]">
                Program <span className="text-[#ffc12b]">Manager</span>
              </h1>
              <p className="text-gray-500">
                Manage available internship programs for applicants.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Create Form */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 sticky top-32">
                <h3 className="text-xl font-bold text-[#2d1b4e] mb-6 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-[#ffc12b]" /> Add New Program
                </h3>
                <form onSubmit={handleCreate} className="space-y-4">
                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      required
                      value={newProgram.title}
                      onChange={(e) =>
                        setNewProgram({ ...newProgram, title: e.target.value })
                      }
                      placeholder="e.g. UX Design Intern"
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-yellow-500/5 focus:border-[#ffc12b] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
                      Category
                    </label>
                    <input
                      type="text"
                      value={newProgram.category}
                      onChange={(e) =>
                        setNewProgram({
                          ...newProgram,
                          category: e.target.value,
                        })
                      }
                      placeholder="e.g. Creative"
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-yellow-500/5 focus:border-[#ffc12b] transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2d1b4e] text-white font-bold py-4 rounded-xl hover:bg-purple-900 transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Save className="w-5 h-5" />
                    )}
                    Create Program
                  </button>
                </form>
              </div>
            </div>

            {/* List */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
                {loading ? (
                  <div className="p-20 text-center">
                    <Loader2 className="w-10 h-10 animate-spin mx-auto text-[#ffc12b]" />
                  </div>
                ) : programs.length === 0 ? (
                  <div className="p-20 text-center text-gray-400">
                    No programs created yet.
                  </div>
                ) : (
                  <div className="divide-y divide-gray-50">
                    {programs.map((p) => (
                      <div
                        key={p._id}
                        className="p-8 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                      >
                        <div className="flex items-center gap-5">
                          <div
                            className={`w-14 h-14 rounded-2xl flex items-center justify-center ${p.isActive ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-400"}`}
                          >
                            <Briefcase className="w-7 h-7" />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#2d1b4e] text-lg">
                              {p.title}
                            </h4>
                            <p className="text-sm text-gray-400 font-medium">
                              {p.category || "No Category"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleToggleStatus(p)}
                            className={`px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all border ${p.isActive ? "bg-green-50 text-green-700 border-green-100 hover:bg-green-100" : "bg-gray-50 text-gray-400 border-gray-100 hover:bg-gray-100"}`}
                          >
                            {p.isActive ? "Active" : "Inactive"}
                          </button>
                          <button
                            onClick={() => handleDelete(p._id)}
                            className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InternshipProgramManager;
