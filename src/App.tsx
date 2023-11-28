import { Route, Routes, useLocation } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import NotFound from "./_root/pages/NotFound";
import { AnimatePresence } from "framer-motion";
import Search from "./_root/pages/Search";
import Recipe from "./_root/pages/Recipe";

export default function App() {
  const location = useLocation();
  return (
    <main className="flex">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/searched/:search" element={<Search/>} />
            <Route path="/recipe/:id" element={<Recipe/>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </main>
  );
}
