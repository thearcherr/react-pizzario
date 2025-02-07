"use client"

import Image from "next/image";
import Main from "@/pages/main";
import About from "@/pages/about";
import { useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Menu from "@/pages/menu";
import Reservation from "@/pages/reserve";
import Footer from "@/pages/footer";

export default function Home() {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.65], ["100%", "0%"]);

  const [hasEntered, setEntered] = useState(false);

  const [activeIndx, setIndx] = useState(0);

  return (
    <div className="relative">
      {(hasEntered && <Navbar activeIndex={activeIndx} setIndex={setIndx} />)}
      <div className="relative">
        <motion.div layout ref={ref} className="relative h-[200vh]">
          <Main opacity={opacity} />
          <motion.div className="">
            <About utility={setEntered} />
          </motion.div>
        </motion.div>
        <Menu />
        <Reservation />
        <Footer />
    </div>
    </div>
  )
}
