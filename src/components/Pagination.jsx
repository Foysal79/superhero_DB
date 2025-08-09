import React from "react";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";

const Pagination = ({ page, setPage, Prev, Next }) => {
  return (
    <div className="flex items-center ">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={!Prev}
        className="px-5  py-2 border  rounded-l-xl disabled:opacity-50"
      >
        <SlArrowLeftCircle className="text-xl" />
      </button>

      <div className="px-5  py-1 border  ">
        <span className="text-lg font-sans">Page : {page}</span>
      </div>

      <button
        onClick={() => setPage((currant_page) => currant_page + 1)}
        disabled={!Next}
        className="px-5  py-2 border  rounded-r-xl disabled:opacity-50"
      >
        <SlArrowRightCircle className="text-xl" />
      </button>
    </div>
  );
};

export default Pagination;
