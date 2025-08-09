import { useEffect, useState } from "react";
import { fetchSuperheroes } from "../services/superheroesApi";
import SortToggle from "../components/SortToggle";
import SkeletonCard from "../components/SkeletonCard";
import SuperheroCard from "../components/SuperheroCard";
import Pagination from "../components/Pagination";


const SuperheroList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
const [perPage, setPerPage] = useState(5);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);

  
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query.trim()), 500);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const sort = sortAsc ? "name" : "-name";
    fetchSuperheroes({ page, perPage, query: debouncedQuery || undefined, sort })
      .then((data) => {
        const arr = Array.isArray(data?.items) ? data.items : [];
        setItems(arr);
        setHasNext(arr.length === perPage);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setItems([]);
        setHasNext(false);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [page, perPage, debouncedQuery, sortAsc]);

  return (
    <div className=" mx-auto p-1 md:p-4 text-white bg-[#00031C] min-h-screen">
      {/* header session */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between  my-6 mx-4 md:mx-8 lg:mb-20">
        {/* super hero Logo */}
        <h1 className="text-4xl font-bold text-center mb-8 md:mb-0">Super<span className="text-[#6A60F1]">Hero</span>  DB</h1>

        <div className="flex gap-7 items-center">
          <input
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(1); }}
            placeholder="Search by name..."
            className=" px-3 py-2 border rounded-md"
          />
          <SortToggle sortAsc={sortAsc} setSortAsc={setSortAsc} />
          
        </div>
      </header>

      {loading ? (
        <div className="grid gap-4 md:gap-6
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5
  ">
    {Array(5).fill().map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
      ) : (
        <div className="grid gap-4 md:gap-6
  grid-cols-1          
  sm:grid-cols-2       
  md:grid-cols-3       
  lg:grid-cols-4       
  xl:grid-cols-5       
">
  {items.map((hero) => (
    <SuperheroCard key={hero.id} hero={hero} />
  ))}
</div>
      )}

<div className="flex items-center justify-center gap-6">
{/* Pagination session */}
      <div className="my-10 md:my-12">
            <Pagination
              page={page}
              setPage={setPage}
              canPrev={page > 1}
              canNext={hasNext}
            />
          </div>
          {/* per page card */}
          <select
            value={perPage}
            onChange={(e) => { setPerPage(Number(e.target.value)); setPage(1); }}
            className="px-2 py-1 border rounded-md bg-[#00031C] text-white"
          >
            <option  value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
</div>
      
    </div>
  );
}


export default SuperheroList;