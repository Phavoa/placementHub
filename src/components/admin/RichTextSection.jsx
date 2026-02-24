import React from "react";
import { Copy, AlignLeft } from "lucide-react";

const RichTextSection = ({ title, name, value, handleChange, placeholder }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
        <div className="bg-[#ffc12b]/10 p-2 rounded-lg">
          <AlignLeft className="w-5 h-5 text-[#d49e18]" />
        </div>
        <h3 className="text-xl font-bold text-[#2d1b4e]">{title}</h3>
      </div>

      <div className="relative group">
        <textarea
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full min-h-[300px] p-6 rounded-xl border border-gray-200 focus:border-[#2d1b4e] focus:ring-2 focus:ring-[#2d1b4e]/20 outline-none transition-all text-lg leading-relaxed text-gray-600 resize-y font-['Outfit'] placeholder:text-gray-300"
        />
        <div className="absolute bottom-4 right-4 bg-gray-50 text-xs font-bold text-gray-400 px-3 py-1 rounded-md border border-gray-100">
          Markdown Supported
        </div>
      </div>
    </div>
  );
};

export default RichTextSection;
