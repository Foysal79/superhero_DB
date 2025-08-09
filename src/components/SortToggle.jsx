import { FaSortAlphaDown, FaSortAlphaUpAlt } from "react-icons/fa";

const SortToggle = ({ sortAsc, setSortAsc }) => {
  return (
    <button
      onClick={() => setSortAsc((p) => !p)}
      className="w-full px-4 py-2 gap-2 flex items-center justify-center 
             rounded-lg bg-white/10 border border-white/20 
             backdrop-blur-md shadow-lg 
             hover:bg-white/20 hover:scale-105 transition-all duration-300"
      title="Toggle sort by name"
    >
      <strong>Sort</strong>{" "}
      {sortAsc ? <FaSortAlphaDown /> : <FaSortAlphaUpAlt />}
    </button>
  );
};

export default SortToggle;
