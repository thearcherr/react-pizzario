"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Main(props) {
  const [isHovered, setHovered] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  return (
    <motion.div className="sticky top-0" style={{opacity: props.opacity}}>
      <motion.div
        layout
        className="hero min-h-screen"
        id="Home"
        style={{
          backgroundImage: "url(/hero-img.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <motion.div layout className="hero-content text-neutral-content text-center">
          <motion.div
            layout
            className="max-w-md max-sm:mt-[5em] md:mt-[14em]"
            variants={variants}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              layout
              variants={variants}
              className="mb-5 text-7xl font-semibold font-yt text-amber-200"
            >
              Pizzario
            </motion.h1>
            <motion.p layout variants={variants} className="mb-5">
              Pizzario is an authentic Italian eatery serving handcrafted
              pizzas, fresh ingredients, and traditional recipes. With
              wood-fired pizzas, homemade pasta, and fine wines, Pizzario offers
              a taste of Italy in every bite.
            </motion.p>
            <motion.button
              layout
              variants={variants}
              className="relative p-3 border btn-reserve-main rounded-sm"
              whileHover={() => {
                document
                  .querySelector(".btn-reserve-main")
                  ?.classList.add("text-black");
                setHovered(true);
              }}
              onHoverEnd={() => {
                document
                  .querySelector(".btn-reserve-main")
                  ?.classList.remove("text-black");
                setHovered(false);
              }}
            >
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    className="bg-amber-100 absolute inset-0 origin-bottom"
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{
                      scaleY: 0,
                      opacity: 0,
                      transition: { duration: 0.3 },
                    }}
                    transition={{ duration: 0.3 }}
                  ></motion.span>
                )}
              </AnimatePresence>

              <Link href="#" className="relative z-10 font-semibold">
                Reserve Spot
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
