import GlowCard from "../components/GlowCard";
import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8 w-full">
      {abilities.slice(0, 3).map((item, index) => (
        <GlowCard
          key={item.title}
          card={{}}
          index={index}
          className="rounded-xl p-8 flex flex-col gap-4 w-full md:col-span-2 justify-center items-center text-center"
        >
          <h3 className="text-white text-2xl font-semibold">{item.title}</h3>
          <p className="text-white-50 text-lg">{item.desc}</p>
        </GlowCard>
      ))}
      <GlowCard
        key={abilities[3].title}
        card={{}}
        index={3}
        className="rounded-xl p-8 flex flex-col gap-4 w-full md:col-start-2 md:col-end-4 justify-center items-center text-center"
      >
        <h3 className="text-white text-2xl font-semibold">{abilities[3].title}</h3>
        <p className="text-white-50 text-lg">{abilities[3].desc}</p>
      </GlowCard>
      <GlowCard
        key={abilities[4].title}
        card={{}}
        index={4}
        className="rounded-xl p-8 flex flex-col gap-4 w-full md:col-start-4 md:col-end-6 justify-center items-center text-center"
      >
        <h3 className="text-white text-2xl font-semibold">{abilities[4].title}</h3>
        <p className="text-white-50 text-lg">{abilities[4].desc}</p>
      </GlowCard>
    </div>
  </div>
);

export default FeatureCards;
