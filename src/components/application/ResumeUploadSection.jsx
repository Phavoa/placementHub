import React, { useRef, useState } from "react";
import { FileText, UploadCloud, X } from "lucide-react";

const ResumeUploadSection = ({ file, setFile }) => {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (
      droppedFile &&
      (droppedFile.type === "application/pdf" ||
        droppedFile.type === "application/msword" ||
        droppedFile.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      setFile(droppedFile);
    } else {
      alert("Please upload a PDF or DOC file.");
    }
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6 animate-in slide-in-from-bottom duration-500 delay-300">
      <div className="flex items-center gap-3 mb-2 border-b border-gray-100 pb-4">
        <div className="bg-purple-50 p-2 rounded-lg">
          <FileText className="w-5 h-5 text-purple-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#2d1b4e]">Resume/CV</h3>
          <p className="text-gray-400 text-sm">
            Upload your resume in PDF or DOC format
          </p>
        </div>
      </div>

      {!file ? (
        <div
          className={`border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center transition-all cursor-pointer ${isDragging ? "border-[#2d1b4e] bg-[#2d1b4e]/5" : "border-gray-200 hover:border-[#2d1b4e] hover:bg-gray-50"}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            className="hidden"
            accept=".pdf,.doc,.docx"
          />
          <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4">
            <UploadCloud className="w-8 h-8 text-[#ffc12b]" />
          </div>
          <h4 className="text-lg font-bold text-[#2d1b4e] mb-1">
            Click to upload or drag and drop
          </h4>
          <p className="text-sm text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
        </div>
      ) : (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center justify-between animate-in fade-in zoom-in duration-300">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-red-500">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-[#2d1b4e]">{file.name}</p>
              <p className="text-xs text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
          <button
            onClick={() => setFile(null)}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ResumeUploadSection;
