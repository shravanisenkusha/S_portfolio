import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Dropdown = ({ type, items, onClose }) => {
  return (
    <div className="dropdown-scroll-container absolute top-full left-0 mt-2 w-64 max-h-64 overflow-y-auto bg-white shadow-lg rounded-xl z-50 border border-purple-200 animate-slide-down">
      <ul className="divide-y divide-gray-100">
        {items.map((item) => (
          <li key={item.id}>
            {item.id === "2" ? (
              // ✅ Nutrigen (working product)
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
            ) : (
              // ❌ All others (id 1 & 3) → Coming Soon
              <Link
                to="/coming-soon"
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
