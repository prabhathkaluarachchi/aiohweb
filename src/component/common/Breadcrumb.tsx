import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  levels: { label: string; path?: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ levels }) => {
  return (
    <div className="absolute z-20">
      <div className="flex items-center space-x-2 lg:space-x-3 mt-2">
        {levels.map((level, idx) => (
          <React.Fragment key={idx}>
            {level.path ? (
              <Link
                to={level.path}
                className={`font-medium transition-colors ${
                  idx === 0
                    ? "text-xs sm:text-sm text-black/30"
                    : idx === 1
                    ? "text-sm sm:text-base text-black/40"
                    : "text-base sm:text-lg lg:text-xl text-black/50"
                } hover:text-black`}
              >
                {level.label}
              </Link>
            ) : (
              <span
                className={`font-medium ${
                  idx === 0
                    ? "text-xs sm:text-sm text-black/30"
                    : idx === 1
                    ? "text-sm sm:text-base text-black/40"
                    : "text-base sm:text-lg lg:text-xl text-black/50"
                }`}
              >
                {level.label}
              </span>
            )}

            {idx < levels.length - 1 && (
              <span
                className={`text-xs sm:text-sm ${
                  idx === 0 ? "text-black/30" : "text-black/40"
                }`}
              >
                →
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
