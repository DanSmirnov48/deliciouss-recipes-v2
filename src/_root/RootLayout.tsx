import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <section className="flex flex-1 min-h-screen">
        <Outlet />
      </section>
    </div>
    //   <div className="flex min-h-screen flex-col">
    //   <div className="bg-red-50 container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
    //     <main className="flex w-full flex-col overflow-hidden">

    //     </main>
    //   </div>
    // </div>
  );
};

export default RootLayout;
