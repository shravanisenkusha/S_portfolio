import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";


const Dropdown = ({ type, items, onClose }) => {
  return (
    <div className="dropdown-scroll-container absolute top-full left-0 mt-2 w-64 max-h-64 overflow-y-auto bg-white shadow-lg rounded-xl z-50 border border-purple-200 animate-slide-down">
      <ul className="divide-y divide-gray-100">
        {items.map((item) => (
          <li key={item.id}>
            {item.id === "3" ? ( // Resume Analyzer special case
              <a
                href="https://resume-analyzer-app-351747392494.asia-south1.run.app"
                className="flex items-center gap-3 px-4 py-2 hover:bg-purple-50 hover:text-purple-700 transition-all duration-200"
                onClick={onClose} // This will close the dropdown
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-6 h-6 object-cover rounded"
                />
                <span className="flex-1 text-sm font-medium">{item.name}</span>
                <ChevronRight size={14} />
              </a>
            ) : (
              // Normal product items
              <Link
                to={`/${type}/${item.id}`}
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-2 hover:bg-purple-50 hover:text-purple-700 transition-all duration-200"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-6 h-6 object-cover rounded"
                />
                <span className="flex-1 text-sm font-medium">{item.name}</span>
                <ChevronRight size={14} />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;