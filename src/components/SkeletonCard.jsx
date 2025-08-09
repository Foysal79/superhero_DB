import React from "react";

const SkeletonCard = () => {
  return (
    <div className="relative w-full max-w-xs aspect-[3/4] rounded-xl overflow-hidden border-2 border-white/20 shadow-lg group mx-auto">
      {/* Image placeholder */}
      <div className="absolute inset-0 w-full h-full object-cover"></div>

      <div className="absolute bottom-0 left-0 w-full backdrop-blur-xl bg-white/10 p-5 text-white">
        <div className="h-8 bg-gray-400 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-400 rounded w-1/2 mb-4"></div>

        <div className="grid grid-cols-2 gap-x-4 text-sm">
          <div className="space-y-2">
            <div className="h-3 bg-gray-400 rounded w-5/6"></div>
            <div className="h-3 bg-gray-400 rounded w-4/6"></div>
            <div className="h-3 bg-gray-400 rounded w-3/6"></div>
            <div className="h-3 bg-gray-400 rounded w-4/6"></div>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-400 rounded w-5/6"></div>
            <div className="h-3 bg-gray-400 rounded w-4/6"></div>
            <div className="h-3 bg-gray-400 rounded w-3/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
