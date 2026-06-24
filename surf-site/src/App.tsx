import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";

import { useSmoothScroll, scrollToTop } from "@/lib/useLenis";
import { Cursor } from "@/components/Cursor";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";

import Home from "@/pages/Home";
import Rooms from "@/pages/Rooms";
import Amenities from "@/pages/Amenities";
import Gallery from "@/pages/Gallery";
import Book from "@/pages/Book";

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
    // reducedMotion="never" guarantees reveal animations always complete —
    // so content is never left stuck in a hidden (clipped/translated) state.
    <MotionConfig reducedMotion="never">
      <AnimatePresence>{loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}</AnimatePresence>

      <Cursor />
      <ScrollManager />
      <Nav />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/book" element={<Book />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </MotionConfig>
  );
}
