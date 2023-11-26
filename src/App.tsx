import { Route, Routes, useLocation } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import NotFound from "./_root/pages/NotFound";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation();
  return (
    <main className="flex">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </main>
  );
}
