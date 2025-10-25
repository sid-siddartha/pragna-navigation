import React from "react";
import { BookOpen, Globe, FileText, File } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <h1 className="text-blue-950 text-4xl font-extrabold">Algomindss</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
                {/* Website Button */}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-white shadow-md hover:shadow-xl transition-shadow rounded-lg px-6 py-4 text-gray-800 font-medium hover:bg-gray-50"
        >
          <Globe className="w-5 h-5" />
          Website
        </a>

        {/* Documentation Button */}
        <a
          href="https://drive.google.com/file/d/1RFxEnccf704Uue5t5aQzGSdasdKODBwY/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-white shadow-md hover:shadow-xl transition-shadow rounded-lg px-6 py-4 text-gray-800 font-medium hover:bg-gray-50"
        >
          <BookOpen className="w-5 h-5" />
          Documentation
        </a>

        {/* Reference 1 Button */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-white shadow-md hover:shadow-xl transition-shadow rounded-lg px-6 py-4 text-gray-800 font-medium hover:bg-gray-50"
        >
          <FileText className="w-5 h-5" />
          Reference 1
        </a>

        {/* Reference 2 Button */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-white shadow-md hover:shadow-xl transition-shadow rounded-lg px-6 py-4 text-gray-800 font-medium hover:bg-gray-50"
        >
          <FileText className="w-5 h-5" />
          Reference 2
        </a>
      </div>
    </div>
  );
};

export default Page;

