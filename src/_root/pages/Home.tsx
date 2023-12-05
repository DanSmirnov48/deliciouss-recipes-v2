import Banner from "@/components/Banner";
import DesertRecipes from "@/components/DesertRecipes";
import RandomRecipies from "@/components/RandomRecipies";
import Search from "@/components/Search";

const Home = () => {
  return (
    <section className="container pb-8 pt-6 md:py-10">
      <div className="flex max-w-full flex-col items-start gap-2 mb-10">
        <Banner/>
        <Search/>
        <RandomRecipies/>
        <DesertRecipes/>
      </div>
    </section>
  );
};

export default Home;
