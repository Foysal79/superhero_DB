import { FaSortAlphaDown, FaSortAlphaUpAlt } from "react-icons/fa";



const  SortToggle = ({ sortAsc, setSortAsc }) => {
  return (
    <button
      onClick={() => setSortAsc((s) => !s)}
      className="w-full px-3 py-2 gap-2 flex items-center"
      title="Toggle sort by name"
    >Sort {sortAsc ? <FaSortAlphaDown /> : <FaSortAlphaUpAlt />}
    </button>
  );
}

export default SortToggle;