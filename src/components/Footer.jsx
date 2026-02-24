import React from "react";
import { Globe, Monitor, Briefcase, Megaphone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f0f4f8] pt-24 pb-12 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <p className="text-sm text-gray-600 mb-8 max-w-xs leading-relaxed">
            Placement Plus is your gateway to global career opportunities. We
            connect talent with top companies worldwide.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full text-white flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-colors shadow-sm">
              <Globe className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 bg-sky-500 rounded-full text-white flex items-center justify-center hover:bg-sky-600 cursor-pointer transition-colors shadow-sm">
              <Monitor className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 bg-blue-800 rounded-full text-white flex items-center justify-center hover:bg-blue-900 cursor-pointer transition-colors shadow-sm">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 bg-pink-600 rounded-full text-white flex items-center justify-center hover:bg-pink-700 cursor-pointer transition-colors shadow-sm">
              <Megaphone className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-[#2d1b4e] mb-6 text-lg">Company</h4>
          <ul className="space-y-4 text-gray-600">
            <li>
              <a href="#" className="hover:text-[#2d1b4e]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2d1b4e]">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2d1b4e]">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2d1b4e]">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#2d1b4e] mb-6 text-lg">Resources</h4>
          <ul className="space-y-4 text-gray-600">
            <li>
              <a href="#" className="hover:text-[#2d1b4e]">
                Templates
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2d1b4e]">
                Tutorials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2d1b4e]">
                Free Resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2d1b4e]">
                Contract Templates
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#2d1b4e] mb-6 text-lg">Legal</h4>
          <ul className="space-y-4 text-gray-600">
            <li>
              <a href="#" className="hover:text-[#2d1b4e]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2d1b4e]">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2d1b4e]">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2d1b4e]">
                GDPR
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <p>© 2026 Placement Plus. All rights reserved.</p>
        <button className="flex items-center gap-2 hover:text-[#2d1b4e]">
          Follow Us
        </button>
      </div>
    </footer>
  );
};

export default Footer;
