import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const PartnershipContact = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    company_name: "",
    contact_name: "",
    contact_email: "",
    contact_phone: "",
    message: "",
  });

  // EmailJS configuration
  const EMAILJS_CONFIG = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    recipients: [
      "inquiries@bigfixtech.com",
      "folashade.ojo@bigfixtech.com",
      "adijat.mustapha@bigfixtech.com",
      "efemiayafavour@gmail.com",
    ],
    recipientSeparator: ",",
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    if (!formData.company_name.trim()) {
      newErrors.company_name = "Company name is required";
    }

    if (!formData.contact_name.trim()) {
      newErrors.contact_name = "Contact name is required";
    }

    if (!formData.contact_email.trim()) {
      newErrors.contact_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.contact_email)) {
      newErrors.contact_email = "Email is invalid";
    }

    if (!formData.contact_phone.trim()) {
      newErrors.contact_phone = "Phone number is required";
    } else if (
      !/^\+?[1-9][\d]{0,15}$/.test(formData.contact_phone.replace(/\s/g, ""))
    ) {
      newErrors.contact_phone = "Phone number is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (
      !EMAILJS_CONFIG.serviceId ||
      !EMAILJS_CONFIG.templateId ||
      !EMAILJS_CONFIG.publicKey
    ) {
      setErrors({
        submit:
          "Email service is not configured correctly. Please contact support or try again later.",
      });
      return;
    }

    setLoading(true);

    let emailSuccess = false;
    let apiSuccess = false;

    // Send to Google Sheets API
    try {
      const apiResponse = await fetch(
        "https://script.google.com/macros/s/AKfycbx8RRWxsDepaUB3ZcelS4-QEJsLSuomg6ZkZMS8MK0Gbd3C_0v8q4wnAhmT95ifyyVf/exec",
        {
          method: "POST",
          mode: "cors",
          body: JSON.stringify({
            Name: `${formData.contact_name} - ${formData.company_name}`,
            Email: formData.contact_email,
            Phone: formData.contact_phone,
            Course: "Partnership Inquiry",
            Message: formData.message,
          }),
        },
      );
      if (apiResponse.ok) {
        apiSuccess = true;
      }
    } catch (error) {
      console.error("API error:", error);
    }

    // Send email via EmailJS
    try {
      const emailData = {
        user_name: `${formData.contact_name} - ${formData.company_name}`,
        user_email: formData.contact_email,
        user_phone: formData.contact_phone,
        selected_course: "Partnership Inquiry",
        message: formData.message,
        request_type: "general",
        course_title: "Partnership Inquiry",
        to_email: EMAILJS_CONFIG.recipients[0],
        to_emails: EMAILJS_CONFIG.recipients.join(
          EMAILJS_CONFIG.recipientSeparator,
        ),
        recipient_1: EMAILJS_CONFIG.recipients[0],
        recipient_2: EMAILJS_CONFIG.recipients[1] || "",
        recipient_3: EMAILJS_CONFIG.recipients[2] || "",
        subject: `Partnership Inquiry - ${formData.company_name}`,
        submission_time: new Date().toISOString(),
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        emailData,
        EMAILJS_CONFIG.publicKey,
      );

      emailSuccess = true;
    } catch (error) {
      console.error("Email send error:", error);
    }

    setLoading(false);

    if (emailSuccess && apiSuccess) {
      setSubmitted(true);
      setFormData({
        company_name: "",
        contact_name: "",
        contact_email: "",
        contact_phone: "",
        message: "",
      });
    } else if (emailSuccess && !apiSuccess) {
      setErrors({
        submit:
          "Email sent successfully, but data could not be saved to the sheet. Please try again or contact support.",
      });
    } else if (!emailSuccess && apiSuccess) {
      setErrors({
        submit:
          "Data saved to sheet, but email could not be sent. Please contact support if needed.",
      });
    } else {
      setErrors({ submit: "Something went wrong. Please try again." });
    }
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="font-['Outfit'] bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="grow pt-28 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto w-full">
          {/* Header */}
          <div className="mb-10 md:mb-12 text-center md:text-left">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#2d1b4e] transition-colors mb-6 font-medium group text-sm md:text-base cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
              Back
            </button>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d1b4e] mb-3 md:mb-4">
              Contact Us for Partnership
            </h1>
            <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto md:mx-0">
              Fill out the form below to inquire about partnership opportunities.
              We'll get back to you shortly.
            </p>
          </div>

          <div className="bg-white rounded-2xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-sm border border-gray-100">
            {submitted ? (
              <div className="text-center py-10 md:py-16">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                  <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-green-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2d1b4e] mb-4">
                  Inquiry Submitted Successfully!
                </h2>
                <p className="text-gray-500 text-base md:text-lg mb-8 md:mb-10 max-w-md mx-auto">
                  Thank you for your interest in partnering with us. We'll contact
                  you shortly to discuss opportunities.
                </p>
                <button
                  onClick={handleBackToHome}
                  className="bg-[#2d1b4e] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-purple-900 transition-all shadow-md w-full sm:w-auto cursor-pointer"
                >
                  Back to Home
                </button>
              </div>
            ) : (
              <form onSubmit={sendEmail} className="space-y-5 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                  <div className="space-y-2 text-left">
                    <label className="block text-sm font-bold text-[#2d1b4e]">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleInputChange}
                      className={`w-full px-4 md:px-5 py-3.5 md:py-4 bg-gray-50 border ${
                        errors.company_name ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-gray-200 focus:border-[#2d1b4e] focus:ring-[#2d1b4e]/20"
                      } rounded-xl focus:ring-4 focus:outline-none transition-all text-sm md:text-base text-gray-800 placeholder-gray-400`}
                      required
                    />
                    {errors.company_name && (
                      <p className="text-red-500 text-xs font-medium mt-1">{errors.company_name}</p>
                    )}
                  </div>

                  <div className="space-y-2 text-left">
                    <label className="block text-sm font-bold text-[#2d1b4e]">
                      Company Contact's Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contact_name"
                      value={formData.contact_name}
                      onChange={handleInputChange}
                      className={`w-full px-4 md:px-5 py-3.5 md:py-4 bg-gray-50 border ${
                        errors.contact_name ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-gray-200 focus:border-[#2d1b4e] focus:ring-[#2d1b4e]/20"
                      } rounded-xl focus:ring-4 focus:outline-none transition-all text-sm md:text-base text-gray-800 placeholder-gray-400`}
                      required
                    />
                    {errors.contact_name && (
                      <p className="text-red-500 text-xs font-medium mt-1">{errors.contact_name}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                  <div className="space-y-2 text-left">
                    <label className="block text-sm font-bold text-[#2d1b4e]">
                      Contact Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="contact_email"
                      value={formData.contact_email}
                      onChange={handleInputChange}
                      className={`w-full px-4 md:px-5 py-3.5 md:py-4 bg-gray-50 border ${
                        errors.contact_email ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-gray-200 focus:border-[#2d1b4e] focus:ring-[#2d1b4e]/20"
                      } rounded-xl focus:ring-4 focus:outline-none transition-all text-sm md:text-base text-gray-800 placeholder-gray-400`}
                      required
                    />
                    {errors.contact_email && (
                      <p className="text-red-500 text-xs font-medium mt-1">{errors.contact_email}</p>
                    )}
                  </div>

                  <div className="space-y-2 text-left">
                    <label className="block text-sm font-bold text-[#2d1b4e]">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="contact_phone"
                      value={formData.contact_phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className={`w-full px-4 md:px-5 py-3.5 md:py-4 bg-gray-50 border ${
                        errors.contact_phone ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-gray-200 focus:border-[#2d1b4e] focus:ring-[#2d1b4e]/20"
                      } rounded-xl focus:ring-4 focus:outline-none transition-all text-sm md:text-base text-gray-800 placeholder-gray-400`}
                      required
                    />
                    {errors.contact_phone && (
                      <p className="text-red-500 text-xs font-medium mt-1">{errors.contact_phone}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <label className="block text-sm font-bold text-[#2d1b4e]">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Tell us about your company and the partnership you have in mind..."
                    className={`w-full px-4 md:px-5 py-4 bg-gray-50 border ${
                      errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-gray-200 focus:border-[#2d1b4e] focus:ring-[#2d1b4e]/20"
                    } rounded-xl focus:ring-4 focus:outline-none transition-all text-sm md:text-base text-gray-800 placeholder-gray-400 resize-none`}
                    required
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs font-medium mt-1">{errors.message}</p>
                  )}
                </div>

                {errors.submit && (
                  <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm md:text-base">
                    {errors.submit}
                  </div>
                )}

                <div className="pt-2 md:pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#ffc12b] text-[#2d1b4e] py-4 rounded-xl font-bold text-base md:text-lg hover:bg-[#ffcd57] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[#2d1b4e]/30 border-t-[#2d1b4e] rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PartnershipContact;
