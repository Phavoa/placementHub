import React from "react";
import { CheckCircle2 } from "lucide-react";

const SectionBlock = ({ title, children, listItems }) => {
  return (
    <div className="mb-16 last:mb-0">
      <h3 className="text-2xl md:text-3xl font-bold text-[#2d1b4e] mb-6">
        {title}
      </h3>

      {children && (
        <div className="text-gray-600 text-lg leading-relaxed space-y-4">
          {children}
        </div>
      )}

      {listItems && listItems.length > 0 && (
        <ul className="space-y-4 mt-6">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-[#ffc12b] shrink-0 mt-1" />
              <span className="text-gray-600 text-lg leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SectionBlock;
