import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSuperheroById } from "../services/superheroesApi";
import SuperheroDetailsSkeleton from "../components/SuperheroDetailsSkeleton";

const SuperheroDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchSuperheroById(id)
      .then((data) => setHero(data?.item || data))
      .catch((err) => {
        console.error(err);
        setHero(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <SuperheroDetailsSkeleton />;
  if (!hero) return <div className="p-6 text-white">Hero is Not found.</div>;

  return (
    <div className="min-h-screen bg-[#00031C] text-white p-6 flex flex-col items-center">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="self-start m-4 px-4 py-2 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
      >
        ← Back
      </button>

      {/* Main Card */}
      <div
        className="w-full max-w-5xl rounded-2xl bg-white/10 backdrop-blur-xl 
      border border-white/20 shadow-xl p-6 flex flex-col md:flex-row items-center gap-8"
      >
        {/* Hero Image */}
        <img
          src={hero.image?.url}
          alt={hero.name}
          className="rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 object-cover shadow-lg"
        />

        {/* Hero Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{hero.name}</h1>
          <p className="text-sm text-gray-300">
            {hero?.biography?.["full-name"]}
          </p>

          {/* Biography */}
          <section className="mt-4">
            <h3 className="font-semibold text-lg">Biography</h3>
            <ul className="text-sm leading-6">
              <li>
                <strong>Publisher : </strong> {hero.biography?.publisher}
              </li>
              <li>
                <strong>First appearance : </strong>{" "}
                {hero.biography?.["first-appearance"]}
              </li>
              <li>
                <strong>Place of birth : </strong>{" "}
                {hero.biography?.["place-of-birth"]}
              </li>
              <li>
                <strong>Aliases : </strong>{" "}
                {(hero.biography?.aliases || []).join(", ")}
              </li>
            </ul>
          </section>

          {/* Powerstats */}
          <section className="mt-4">
            <h3 className="font-semibold text-lg">Powerstats</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2 text-sm">
              {Object.entries(hero.powerstats || {}).map(([k, v]) => (
                <div
                  key={k}
                  className="bg-white/10 border border-white/20 rounded-lg px-2 py-1 text-center backdrop-blur-md"
                >
                  <strong className="capitalize">{k}:</strong> {v}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SuperheroDetails;
