import React from "react";
import { Copy, AlignLeft } from "lucide-react";

const RichTextSection = ({ title, name, value, handleChange, placeholder }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 border-b border-gray-100 pb-3 md:pb-4">
        <div className="bg-[#ffc12b]/10 p-1.5 md:p-2 rounded-lg">
          <AlignLeft className="w-4 h-4 md:w-5 md:h-5 text-[#d49e18]" />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-[#2d1b4e]">{title}</h3>
      </div>

      <div className="relative group">
        <textarea
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full min-h-[200px] md:min-h-[300px] p-4 md:p-6 rounded-xl border border-gray-200 focus:border-[#2d1b4e] focus:ring-2 focus:ring-[#2d1b4e]/20 outline-none transition-all text-base md:text-lg leading-relaxed text-gray-600 resize-y font-['Outfit'] placeholder:text-gray-300"
        />
        <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 bg-gray-50 text-[10px] md:text-xs font-bold text-gray-400 px-2 md:px-3 py-1 rounded-md border border-gray-100 shadow-sm pointer-events-none">
          Markdown Supported
        </div>
      </div>
    </div>
  );
};

export default RichTextSection;
