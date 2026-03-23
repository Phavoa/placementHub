import React from "react";
import { SiFacebook, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f0f4f8] pt-24 pb-12 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <p className="text-sm text-gray-600 mb-8 max-w-xs leading-relaxed">
            Placement Hub is your gateway to global career opportunities. We
            connect talent with top companies worldwide.
          </p>
          <div className="flex gap-4">
            <a
              href="https://web.facebook.com/placemhub/?"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] hover:opacity-80 transition-opacity"
            >
              <SiFacebook className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/company/placemhub/posts/?"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] hover:opacity-80 transition-opacity"
            >
              <SiLinkedin className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-[#2d1b4e] mb-6 text-lg">Company</h4>
          <ul className="space-y-4 text-gray-600">
            <li>
              <a href="/about" className="hover:text-[#2d1b4e]">
                About Us
              </a>
            </li>
            <li>
              <a href="/internships" className="hover:text-[#2d1b4e]">
                Careers
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#2d1b4e]">
                Blog
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#2d1b4e]">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#2d1b4e] mb-6 text-lg">Legal</h4>
          <ul className="space-y-4 text-gray-600">
            <li>
              <a href="javascript:void(0)" className="hover:text-[#2d1b4e]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#2d1b4e]">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#2d1b4e]">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#2d1b4e]">
                GDPR
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <p>© 2026 Placement Hub. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 hover:text-[#2d1b4e]">
            Follow Us
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
