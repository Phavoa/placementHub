import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  PlusCircle,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import Logo from "../../assets/placehub_logo.png";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Applicants", href: "/admin/internship", icon: LayoutDashboard },
    { name: "Programs", href: "/admin/programs", icon: Briefcase },
    { name: "Create Internship", href: "/admin/create-job", icon: PlusCircle },
  ];

  const close = () => setIsOpen(false);

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-[45] bg-black/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
      />

      {/* Nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/admin/internship" className="flex items-center shrink-0">
              <img
                src={Logo}
                alt="Placement Hub Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl font-bold text-sm transition-all ${
                      isActive
                        ? "text-[#2d1b4e] bg-[#2d1b4e]/5"
                        : "text-gray-500 hover:text-[#2d1b4e] hover:bg-gray-50"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-[#ffc12b]" : ""}`} />
                    {link.name}
                  </Link>
                );
              })}
              <div className="w-px h-6 bg-gray-200 mx-2" />
              <Link
                to="/"
                className="flex items-center gap-2 bg-red-50 text-red-600 px-5 py-2.5 rounded-xl font-bold hover:bg-red-100 transition-all text-sm shadow-sm"
              >
                <LogOut className="w-4 h-4" />
                Exit Admin
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-2xl text-[#2d1b4e] hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[80vh] opacity-100 border-t" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="px-4 py-6 space-y-2 overflow-y-auto max-h-[calc(70vh)]">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={close}
                  className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold text-base transition-all ${
                    isActive
                      ? "bg-[#2d1b4e] text-white shadow-lg shadow-[#2d1b4e]/20"
                      : "text-[#2d1b4e] hover:bg-gray-50"
                  }`}
                >
                  <div className={`p-2 rounded-xl ${isActive ? "bg-white/10" : "bg-gray-100 text-gray-500"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {link.name}
                  {isActive && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-[#ffc12b]" />
                  )}
                </Link>
              );
            })}

            <div className="pt-4 mt-4 border-t border-gray-100">
              <Link
                to="/"
                onClick={close}
                className="flex items-center justify-center gap-3 w-full p-4 rounded-2xl font-bold text-base bg-red-50 text-red-600 hover:bg-red-100 transition-all"
              >
                <LogOut className="w-5 h-5" />
                Exit Admin
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlapping */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default AdminNavbar;
