import React, { useEffect } from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  CreditCard,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Lock,
  ArrowRight,
} from "lucide-react";

const InternshipPaymentPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const job = location.state?.jobData || {
    title: "Software Engineering Intern",
    companyName: "Hubtel",
    location: "Lagos, Nigeria",
  };

  const isGeneric = !id || id === "general" || !location.state?.jobData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment successful! Redirecting to application...");
    // In a real app, logic would go here
    if (isGeneric) {
      navigate("/jobs");
    } else {
      navigate(`/jobs/${id}/apply`, {
        state: { jobData: job, paymentConfirmed: true },
      });
    }
  };

  return (
    <div className="font-['Outfit'] bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="grow pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-10 text-center">
            <Link
              to={isGeneric ? "/jobs" : `/jobs/${id}`}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#2d1b4e] transition-colors mb-6 font-medium group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              {isGeneric ? "Explore Jobs" : "Back to Job Details"}
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-[#2d1b4e] mb-4">
              Complete Your <span className="text-[#ffc12b]">Registration</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              {isGeneric ? (
                "Secure your spot in our placement program and gain access to premium internship opportunities."
              ) : (
                <>
                  To apply for the{" "}
                  <span className="font-bold text-[#2d1b4e]">{job.title}</span>{" "}
                  at{" "}
                  <span className="font-bold text-[#2d1b4e]">
                    {job.companyName}
                  </span>
                  , a one-time registration fee is required.
                </>
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-50">
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-[#2d1b4e]">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-[#2d1b4e]">
                    Payment Details
                  </h2>
                </div>

                <form onSubmit={handlePayment} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2d1b4e]/20 focus:border-[#2d1b4e] transition-all"
                    />
                  </div>

                  <div className="space-y-2 relative">
                    <label className="text-sm font-bold text-gray-700">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2d1b4e]/20 focus:border-[#2d1b4e] transition-all"
                      />
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="MM / YY"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2d1b4e]/20 focus:border-[#2d1b4e] transition-all"
                      />
                    </div>
                    <div className="space-y-2 relative">
                      <label className="text-sm font-bold text-gray-700">
                        CVV
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          required
                          placeholder="***"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2d1b4e]/20 focus:border-[#2d1b4e] transition-all"
                        />
                        <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-[#2d1b4e] text-white font-bold py-4 rounded-xl hover:bg-[#3E1D67] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group"
                    >
                      <span className="relative flex items-center gap-2">
                        Pay ₦5,000 Now{" "}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                    <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-400">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      Your payment is secured with industry-standard encryption.
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column: Order Summary & Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#2d1b4e] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-6 text-white/90">
                    Summary
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/60 text-xs font-bold uppercase tracking-wider">
                        Registration Fee
                      </span>
                      <span className="font-bold">₦5,000</span>
                    </div>
                    <div className="h-px bg-white/10"></div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">Total</span>
                      <span className="text-2xl font-bold text-[#ffc12b]">
                        ₦5,000
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <p className="text-sm text-white/70 font-medium">
                      Why the fee?
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#ffc12b] shrink-0" />
                        <span className="text-sm text-white/80">
                          Guaranteed review within 48 hours
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#ffc12b] shrink-0" />
                        <span className="text-sm text-white/80">
                          Tailored career roadmap & resources
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#ffc12b] shrink-0" />
                        <span className="text-sm text-white/80">
                          Personal interview scheduling access
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shapes */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-2 text-[#2d1b4e]">
                  <Calendar className="w-5 h-5" />
                  <p className="font-bold">Important Info</p>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  The registration fee is one-time. If you haven't been
                  successfully placed in a job after 1 month, you are eligible
                  for a full refund.
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

export default InternshipPaymentPage;
