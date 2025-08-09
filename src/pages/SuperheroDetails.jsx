import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSuperheroById } from "../services/superheroesApi";

const SuperheroDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchSuperheroById(id)
      .then((data) => setHero(data?.item || data)) // some APIs return { item: {...} } or just {...}
      .catch((err) => {
        console.error(err);
        setHero(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!hero) return <div className="p-6">Hero not found.</div>;

  return (
    <div className=" p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-3 py-1 border rounded"
      >
        ← Back
      </button>

      <div className=" rounded-lg shadow p-6 flex flex-col md:flex-row gap-6">
        <img src={hero.image?.url} alt={hero.name} className="w-56 h-56 object-cover rounded" />
        <div>
          <h1 className="text-2xl font-bold">{hero.name}</h1>
          <p className="text-sm text-gray-500">{hero.biography?.full-name}</p>

          <section className="mt-4">
            <h3 className="font-semibold">Biography</h3>
            <ul className="text-sm leading-6">
              <li><strong>Publisher:</strong> {hero.biography?.publisher}</li>
              <li><strong>First appearance:</strong> {hero.biography?.["first-appearance"]}</li>
              <li><strong>Place of birth:</strong> {hero.biography?.["place-of-birth"]}</li>
              <li><strong>Aliases:</strong> { (hero.biography?.aliases || []).join(", ") }</li>
            </ul>
          </section>

          <section className="mt-4">
            <h3 className="font-semibold">Powerstats</h3>
            <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
              {Object.entries(hero.powerstats || {}).map(([k, v]) => (
                <div key={k}><strong>{k}:</strong> {v}</div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SuperheroDetails;