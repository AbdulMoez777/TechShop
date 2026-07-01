import React from "react";
import { Search } from "lucide-react";

function SearchFilter() {
  return (
    <>
      <div className="mb-5 p-5 bg-gray-900 rounded-2xl border border-gray-800">
        <div className="flex items-center  border border-gray-700 rounded-xl overflow-hidden bg-gray-800">
          <Search className="w-5 h-5 text-gray-600 ml-4" />
          <input
            type="text"
            placeholder="Search Products"
            className="w-full p-4 outline-none text-white bg-gray-800 placeholder-gray-500font-medium"
          />
        </div>
      </div>
    </>
  );
}

export default SearchFilter;
