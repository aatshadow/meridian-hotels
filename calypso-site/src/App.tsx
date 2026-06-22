import { useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";

import { useSmoothScroll } from "@/lib/useLenis";
import { Cursor } from "@/components/Cursor";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";

import { Hero, FeatureStrip } from "@/sections/Hero";
import About from "@/sections/About";
import Rooms from "@/sections/Rooms";
import Prices from "@/sections/Prices";
import Amenities from "@/sections/Amenities";
import Gallery from "@/sections/Gallery";
import Location from "@/sections/Location";
import Contact from "@/sections/Contact";

export default function App() {
  useSmoothScroll();
  const [loading, setLoading] = useState(true);

  return (
    // reducedMotion="never" guarantees reveal animations always complete —
    // so content is never left stuck in a hidden state.
    <MotionConfig reducedMotion="never">
      <AnimatePresence>{loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}</AnimatePresence>

      <Cursor />
      <Nav />

      <main>
        <Hero />
        <FeatureStrip />
        <About />
        <Rooms />
        <Prices />
        <Amenities />
        <Gallery />
        <Location />
        <Contact />
      </main>

      <Footer />
    </MotionConfig>
  );
}
