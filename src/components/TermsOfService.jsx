import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Subscribe from "./Subscribe";

const TermsOfService = () => {
  const sections = [
    {
      title: "Agreement to Terms",
      content: "By accessing or using Placement Hub’s website, platforms, and services, you agree to comply with and be bound by these Terms of Service. These terms govern your relationship with Placement Hub in connection with our recruitment services, Internal Training Academy, and Career Acceleration Program. If you do not agree with any part of these terms, you are advised not to use our services."
    },
    {
      title: "Our Services",
      content: "Placement Hub provides recruitment and talent development solutions designed to connect qualified candidates with employers and to prepare individuals for the job market through structured training and career support programs. Our services are intended to support both candidates seeking employment and organizations looking to hire skilled professionals."
    },
    {
      title: "User Information & Accuracy",
      content: "Users are required to provide accurate, complete, and up-to-date information when submitting applications, registering for training programs, or engaging with any of our services. Placement Hub reserves the right to review, verify, and validate the information provided. Any false, misleading, or incomplete information may result in disqualification, suspension, or termination of access to our services."
    },
    {
      title: "Recruitment & Placement",
      content: "Placement Hub uses the information provided by users to match candidates with relevant job opportunities, recommend suitable career paths, and enroll individuals into appropriate training programs. While we make every effort to ensure accurate matching and meaningful opportunities, we do not guarantee job placement, employment offers, or program admission."
    },
    {
      title: "Training Academy & Career Acceleration",
      content: "Participation in the Internal Training Academy or Career Acceleration Program is designed to enhance employability by equipping candidates with relevant skills and industry exposure. However, participation does not guarantee employment. Users are expected to actively engage and adhere to all program guidelines. Placement Hub reserves the right to suspend or terminate participation in cases of misconduct."
    },
    {
      title: "Employer Responsibilities",
      content: "For employers and client organizations, Placement Hub commits to sourcing and presenting candidates who align with specified job requirements. However, the final hiring decision rests solely with the employer. Placement Hub shall not be held responsible for hiring decisions, employment terms, or outcomes resulting from interactions between clients and candidates."
    },
    {
      title: "Intellectual Property",
      content: "All content, materials, and intellectual property provided by Placement Hub—including training resources, documents, frameworks, and digital content—remain the exclusive property of Placement Hub. Users are not permitted to copy, reproduce, or distribute any of these materials for commercial purposes without prior written consent."
    },
    {
      title: "Ethical Use & Platform Misuse",
      content: "Users agree to use Placement Hub’s website and services for lawful and ethical purposes only. Any misuse of the platform, including attempts to disrupt services or access unauthorized data, may result in immediate suspension or termination of access, as well as potential legal action."
    },
    {
      title: "Service Modifications & Updates",
      content: "Placement Hub reserves the right to modify, suspend, or discontinue any aspect of its services at any time without prior notice. We may also update or revise these Terms of Service periodically. Continued use of our services after such updates constitutes acceptance of the revised terms."
    },
    {
      title: "Limitation of Liability",
      content: "To the fullest extent permitted by applicable law, Placement Hub shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use of our services. This includes loss of employment opportunities, business losses, or any decisions made by users based on our services."
    },
    {
      title: "Acknowledgment",
      content: "By using Placement Hub’s services, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. You also agree to comply with all applicable laws and regulations while using our platform."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FEFEFA] font-['Outfit']">
      <Navbar />

      {/* --- COLORED HERO --- */}
      <section className="pt-40 pb-24 px-6 bg-linear-to-br from-[#3E1D67] to-[#2d1b4e]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-purple-100/80 text-lg md:text-xl font-light leading-relaxed">
            Please read these terms carefully before using Placement Hub's platforms and services.
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
              Questions or Clarifications?
            </h3>
            <p className="text-gray-500 text-lg mb-8 max-w-2xl">
              For any questions regarding these Terms of Service, please contact us through our official communication channels.
            </p>
            <a href="/contact">
              <button className="bg-[#2d1b4e] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#3E1D67] transition-colors">
                Contact Us
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

export default TermsOfService;
