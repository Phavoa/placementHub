import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Subscribe from "./Subscribe";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Data Collection",
      content: "We collect relevant personal information such as your name, contact details, curriculum vitae (CV), educational background, skills, work experience, and any other information necessary to effectively support your career growth and recruitment opportunities. This information may be collected through our website, application forms, direct communication, or during interviews and assessments."
    },
    {
      title: "How We Use Your Data",
      content: "The information we collect is primarily used to match candidates with suitable job opportunities, connect employers with qualified talent, and facilitate participation in our Career Acceleration Program and training initiatives where applicable. We may also use your information to communicate with you regarding job openings, career resources, program updates, and other relevant opportunities that align with your professional interests."
    },
    {
      title: "Data Sharing",
      content: "Placement Hub may share candidate information with prospective employers strictly for recruitment and placement purposes. We ensure that such sharing is done responsibly and only with organizations that align with our professional standards. We do not sell, rent, or trade your personal information to third parties for marketing or unrelated purposes."
    },
    {
      title: "Security Measures",
      content: "We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, loss, misuse, or alteration. Your information is handled with a high level of confidentiality, and access is restricted to authorized personnel who require it to perform their duties."
    },
    {
      title: "Your Consent & Rights",
      content: "By using our services, you consent to the collection, processing, and use of your personal data as described in this Privacy Policy. You also have the right to request access to your personal information, request corrections, or withdraw your consent where applicable, subject to legal and operational requirements."
    },
    {
      title: "Policy Updates",
      content: "Placement Hub reserves the right to update or modify this Privacy Policy at any time to reflect changes in our practices or regulatory requirements. We encourage you to review this policy periodically to stay informed about how we are protecting your information."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FEFEFA] font-['Outfit']">
      <Navbar />

      {/* --- COLORED HERO --- */}
      <section className="pt-40 pb-24 px-6 bg-linear-to-br from-[#3E1D67] to-[#2d1b4e]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-purple-100/80 text-lg md:text-xl font-light leading-relaxed">
            At Placement Hub, we are committed to protecting the privacy and confidentiality of your personal information.
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-2xl font-bold text-[#2d1b4e]">
                  {section.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed font-light">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* --- CONTACT CTA --- */}
          <div className="mt-24 pt-12 border-t border-gray-100">
            <h3 className="text-2xl font-bold text-[#2d1b4e] mb-4">
              Questions or Concerns?
            </h3>
            <p className="text-gray-500 text-lg mb-8 max-w-2xl">
              For any questions regarding your personal data or this Privacy Policy, please contact us through our official communication channels.
            </p>
            <a href="/contact">
              <button className="bg-[#2d1b4e] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#3E1D67] transition-colors">
                Contact Support
              </button>
            </a>
          </div>
        </div>
      </section>

      <Subscribe />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
