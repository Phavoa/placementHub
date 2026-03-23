import React from "react";
import { Plus, Trash2, CheckCircle2, List } from "lucide-react";

const DynamicListSection = ({
  title,
  items,
  onAddItem,
  onRemoveItem,
  onItemChange,
  placeholder,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
      <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="bg-[#2d1b4e]/5 p-1.5 md:p-2 rounded-lg">
            <List className="w-4 h-4 md:w-5 md:h-5 text-[#2d1b4e]" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-[#2d1b4e]">{title}</h3>
        </div>
        <span className="text-sm font-medium text-gray-400">
          {items.length} items
        </span>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 group animate-in slide-in-from-left-2 duration-300"
          >
            <div className="mt-4 shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#ffc12b]"></div>
            </div>
            <input
              type="text"
              value={item}
              onChange={(e) => onItemChange(index, e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-5 py-3 rounded-xl border border-gray-200 focus:border-[#2d1b4e] focus:ring-2 focus:ring-[#2d1b4e]/20 outline-none transition-all text-gray-700 font-medium"
            />
            <button
              onClick={() => onRemoveItem(index)}
              className="p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all opacity-0 group-hover:opacity-100"
              title="Remove item"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={onAddItem}
        className="mt-6 flex items-center gap-2 text-[#2d1b4e] font-bold text-sm bg-[#2d1b4e]/5 hover:bg-[#2d1b4e]/10 px-5 py-3 rounded-xl transition-all"
      >
        <Plus className="w-4 h-4" /> Add New Item
      </button>
    </div>
  );
};

export default DynamicListSection;
