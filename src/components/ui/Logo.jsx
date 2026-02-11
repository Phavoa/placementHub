import React from "react";

const Logo = ({ className = "" }) => {
  return (
    <div
      className={`flex items-center justify-center font-bold text-xl uppercase tracking-wider text-[#3E1D67] ${className}`}
    >
      {/* Placeholder Container */}
      <div className="flex items-center gap-1">
        <span className="text-2xl font-black">Placement</span>
        <span className="text-[#FFC12B] text-2xl font-black">Hub</span>
      </div>
    </div>
  );
};

export default Logo;
