import React from "react";

interface BreadcrumbProps {
  levels: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ levels }) => {
  return (
    <div className="absolute z-20">
      <div className="flex items-center space-x-2 lg:space-x-3 mt-2">
        {levels.map((label, idx) => (
          <React.Fragment key={idx}>
            <span
              className={
                idx === 0
                  ? "text-sm text-black/30 font-medium"
                  : idx === 1
                  ? "text-base text-black/40 font-medium"
                  : "text-lg lg:text-xl text-black/50 font-medium"
              }
            >
              {label}
            </span>
            {idx < levels.length - 1 && (
              <span
                className={`text-sm ${
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


