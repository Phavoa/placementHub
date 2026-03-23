import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  // EmailJS configuration - RECIPIENTS ARE ALREADY CONFIGURED
  const EMAILJS_CONFIG = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    // These are the exact recipients that will receive the emails
    recipients: [
      "inquiries@bigfixtech.com",
      "folashade.ojo@bigfixtech.com",
      "adijat.mustapha@bigfixtech.com",
      "efemiayafavour@gmail.com",
    ],
    // Ensure multiple recipients are handled correctly
    recipientSeparator: ",", // Comma separator for multiple emails
  };

  // Get course data from navigation state
  const { selectedCourse, isEnrollment } = location.state || {};

  // Initialize form data when component mounts or course data changes
  useEffect(() => {
    if (selectedCourse) {
      setFormData((prevData) => ({
        ...prevData,
        message: `I am interested in enrolling in the ${selectedCourse} course. Please provide me with more information about enrollment requirements, schedule, and fees.`,
      }));
    }
  }, [selectedCourse]);

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    if (!formData.user_name.trim()) {
      newErrors.user_name = "Name is required";
    }

    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = "Email is invalid";
    }

    if (!formData.user_phone.trim()) {
      newErrors.user_phone = "Phone number is required";
    } else if (
      !/^\+?[1-9][\d]{0,15}$/.test(formData.user_phone.replace(/\s/g, ""))
    ) {
      newErrors.user_phone = "Phone number is invalid";
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

    // Ensure EmailJS is correctly configured
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
            Name: formData.user_name,
            Email: formData.user_email,
            Phone: formData.user_phone,
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
      // Prepare email data with all recipients
      const emailData = {
        user_name: formData.user_name,
        user_email: formData.user_email,
        user_phone: formData.user_phone,
        message: formData.message,
        request_type: isEnrollment ? "enrollment" : "general",
        // PRIMARY RECIPIENT - This will be the main "To" field in your EmailJS template
        to_email: EMAILJS_CONFIG.recipients[0], // First recipient as primary
        // ALL RECIPIENTS - Comma-separated list for templates that support multiple recipients
        to_emails: EMAILJS_CONFIG.recipients.join(
          EMAILJS_CONFIG.recipientSeparator,
        ),
        // INDIVIDUAL RECIPIENTS - For maximum compatibility, send to each recipient separately
        recipient_1: EMAILJS_CONFIG.recipients[0],
        recipient_2: EMAILJS_CONFIG.recipients[1] || "",
        recipient_3: EMAILJS_CONFIG.recipients[2] || "",
        // Email subject with context
        subject: `${isEnrollment ? `Enrollment Request - ${selectedCourse}` : "Contact Form Inquiry"}`,
        // Timestamp for tracking
        submission_time: new Date().toISOString(),
      };

      console.log("Sending email to recipients:", EMAILJS_CONFIG.recipients);
      console.log("Email data prepared:", emailData);

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
      // Reset form after successful submission
      setFormData({
        user_name: "",
        user_email: "",
        user_phone: "",
        message: "",
      });
      // Clear navigation state to prevent re-population on page refresh
      window.history.replaceState({}, document.title);
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

  const handleBackToCourses = () => {
    navigate("/courses");
  };



  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-header">
          <h2>
            {isEnrollment
              ? `Enroll in ${selectedCourse}`
              : "We'd Love to Hear From You."}
          </h2>
          {isEnrollment && (
            <p className="enrollment-subtitle">
              Fill out the form below to enroll in the {selectedCourse} course.
              We'll contact you with enrollment details and next steps.
            </p>
          )}
        </div>

        {submitted ? (
          <div className="success-message">
            <h3>Enrollment Request Submitted Successfully!</h3>
            <p>
              Thank you for your interest in our {selectedCourse || ""} course.
              We'll contact you within 24 hours with enrollment details and next
              steps.
            </p>
            <button
              className="back-to-courses-btn"
              onClick={handleBackToCourses}
            >
              Back to Courses
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="form-row">
              <label>
                Full Name *
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  className={errors.user_name ? "error" : ""}
                  required
                />
                {errors.user_name && (
                  <span className="error-message">{errors.user_name}</span>
                )}
              </label>

              <label>
                Email Address *
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  className={errors.user_email ? "error" : ""}
                  required
                />
                {errors.user_email && (
                  <span className="error-message">{errors.user_email}</span>
                )}
              </label>
            </div>

            <div className="form-row">
              <label>
                Phone Number *
                <input
                  type="tel"
                  name="user_phone"
                  value={formData.user_phone}
                  onChange={handleInputChange}
                  className={errors.user_phone ? "error" : ""}
                  placeholder="+234 812 345 6789"
                  required
                />
                {errors.user_phone && (
                  <span className="error-message">{errors.user_phone}</span>
                )}
              </label>

            </div>

            <label>
              Message *
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={errors.message ? "error" : ""}
                rows="4"
                placeholder="Tell us how we can help you."
                required
              />
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </label>

            {/* Hidden field to identify this as an enrollment request */}
            <input
              type="hidden"
              name="request_type"
              value={isEnrollment ? "enrollment" : "general"}
            />


            {errors.submit && (
              <div className="submit-error">{errors.submit}</div>
            )}

            <div className="form-actions">
              <button className="contact-btn" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Submitting...
                  </>
                ) : isEnrollment ? (
                  "Submit Enrollment Request"
                ) : (
                  "Send Message"
                )}
              </button>

              {isEnrollment && (
                <button
                  type="button"
                  className="back-btn"
                  onClick={handleBackToCourses}
                  disabled={loading}
                >
                  Back to Courses
                </button>
              )}
            </div>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
