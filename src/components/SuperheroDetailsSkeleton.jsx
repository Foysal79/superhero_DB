import React from "react";

const SuperheroDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-[#00031C]  p-4 flex flex-col items-center animate-pulse">
      <div className="self-start m-4 px-8 py-2 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md"></div>

      <div
        className="w-full max-w-5xl rounded-2xl bg-white/10 backdrop-blur-xl 
      border border-white/20 shadow-xl p-6 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-64 bg-white/10 border border-white/20 shadow-lg"></div>

        <div className="flex-1 space-y-4">
          <div className="h-8 w-40 bg-white/10 rounded"></div>

          <div className="h-4 w-60 bg-white/10 rounded"></div>

          <div className="space-y-2 mt-4">
            <div className="h-5 w-28 bg-white/10 rounded"></div>
            <div className="h-4 w-full bg-white/10 rounded"></div>
            <div className="h-4 w-5/6 bg-white/10 rounded"></div>
            <div className="h-4 w-2/3 bg-white/10 rounded"></div>
            <div className="h-4 w-3/4 bg-white/10 rounded"></div>
          </div>

          <div className="space-y-2 mt-4">
            <div className="h-5 w-28 bg-white/10 rounded"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 border border-white/20 rounded-lg h-6"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperheroDetailsSkeleton;
