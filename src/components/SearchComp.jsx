import React from "react";
import { useState } from "react";


function SearchComp() {
 
    return (  
      <div className="flex items-center w-1/3 m-2">
      <div className="relative w-full">
        {/* Search Icon */}
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z"
            />
          </svg>
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 h-10 rounded-lg shadow-sm border border-gray-300 bg-neutral-800 text-white 
          focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition duration-300 ease-in-out"
        />
      </div>
    </div>
    );
}

export default SearchComp;