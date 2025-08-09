import { Link } from "react-router-dom";

const SuperheroCard = ({ hero }) => {
  return (
    <Link key={hero.id} to={`/hero/${hero.id}`}>
      <div className="relative w-full max-w-xs aspect-[3/4] rounded-xl overflow-hidden border-2 border-white/20 shadow-lg group mx-auto">
        {/* Image */}
        <img
          src={hero.image?.url}
          alt={hero.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Glass overlay for all text */}
        <div className="absolute bottom-[-25%] md:bottom-[-42%] lg:bottom-[-40%] xl:bottom-[-30%]  left-0 w-full backdrop-blur-xl bg-white/10 p-5 text-white transition-all duration-500 ease-out group-hover:bottom-0">
          <h2 className="text-2xl font-semibold">{hero?.name}</h2>
          <p className="text-sm opacity-80">{hero.biography?.publisher}</p>
          <div className="mt-3 space-y-1 text-sm opacity-90 grid grid-cols-2">
            <div>
              <div>
                <span className="font-semibold">Strength :</span>{" "}
                {hero?.powerstats?.strength}
              </div>
              <div>
                <span className="font-semibold">Intelligence :</span>{" "}
                {hero.powerstats?.intelligence}
              </div>
              <div>
                <span className="font-semibold">Durability : </span>{" "}
                {hero.powerstats?.durability}
              </div>

              <div>
                <span className="font-semibold"> Power : </span>
                {hero.powerstats?.power}
              </div>
            </div>
            <div>
              <div>
                {" "}
                <span className="font-semibold"> Gender : </span>
                {hero.appearance?.gender}
              </div>
              <div>
                {" "}
                <span className="font-semibold"> Height : </span>
                {hero.appearance?.height[1]}
              </div>
              <div>
                <span className="font-semibold">Weight : </span>
                {hero.appearance?.weight[1]} kg
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SuperheroCard;
