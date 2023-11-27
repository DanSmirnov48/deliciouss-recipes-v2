import Banner from "@/components/Banner";
import DesertRecipes from "@/components/DesertRecipes";
import RandomRecipies from "@/components/RandomRecipies";
import Search from "@/components/Search";

const Home = () => {
  return (
    <section className="container pb-8 pt-6 md:py-10">
      <div className="flex max-w-full flex-col items-start gap-2 h-[450px]">
        <Banner/>
        <Search/>
        <RandomRecipies/>
        <DesertRecipes/>

        {/* <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p> */}
      </div>
      {/* <div className="flex gap-4">
        <Link to="/signin" className={buttonVariants()}>
          Sign in
        </Link>
        <Link to="signup" className={buttonVariants({ variant: "outline" })}>
          Sign up
        </Link>
      </div> */}
    </section>
  );
};

export default Home;
