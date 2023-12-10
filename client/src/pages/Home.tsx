import { ideas } from "../constants";
import IdeaCard from "../components/IdeaCard";

const Home = () => {
  return (
    <main className="w-full max-w-7xl mx-auto sm:px-8">
      <div role="hero" className="my-12">
        <h1 className="font-bold text-[36px]">
          <span className="text-[#F2BA52]">!dea</span>Pad
        </h1>

        <p className="mt-2 text-[16px]">
          Note down your ideas for future reference and expand upon them!
        </p>
      </div>

      <div>
        {ideas.map((idea, index) => (
          <IdeaCard key={idea.id} index={index} idea={idea} />
        ))}
      </div>
    </main>
  );
};

export default Home;
