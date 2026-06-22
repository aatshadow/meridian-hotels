import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { useSmoothScroll, scrollToTop } from "@/lib/useLenis";
import { Cursor } from "@/components/Cursor";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";

import Home from "@/pages/Home";
import Summer2026 from "@/pages/Summer2026";
import About from "@/pages/About";
import SuccessCases from "@/pages/SuccessCases";
import Contact from "@/pages/Contact";

function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [pathname]);
  return null;
}

export default function App() {
  useSmoothScroll();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>{loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}</AnimatePresence>

      <Cursor />
      <ScrollManager />
      <Nav />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/summer-2026" element={<Summer2026 />} />
          <Route path="/about" element={<About />} />
          <Route path="/success-cases" element={<SuccessCases />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}
