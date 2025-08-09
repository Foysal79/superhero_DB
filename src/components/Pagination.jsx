import React from "react";

const Pagination = ({ page, setPage, canPrev, canNext }) => {
  return (
    <div className="flex items-center gap-2 justify-center">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={!canPrev}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      <div className="px-3 py-1 border rounded ">Page {page}</div>

      <button
        onClick={() => setPage((currant_page) => currant_page + 1)}
        disabled={!canNext}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
