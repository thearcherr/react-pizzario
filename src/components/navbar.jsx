import { motion, useMotionValue } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar(props) {
    
    const variants = {
        hidden: {
            opacity: 0,
            y: -10
        },

        visible: {
            opacity: 1,
            y: 0,
        }
    }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1}}} className="sticky top-0 bg-slate-700 max-sm:bg-slate-800 z-50">
      <div>
        <div className="grid grid-cols-3 p-4">
          <h2 className="max-sm:text-2xl md:text-4xl font-yt font-semibold text-start col-span-1 bg-amber-100 text-transparent bg-clip-text italic">
            Pizzario
          </h2>
          <motion.div
            layout
            className="text-start font-rd font-bold col-span-2 flex items-center gap-2 md:gap-6 "
          >
            <Link
              href="#"
              alt="Homepage"
              className="relative max-sm:p-[2px] md:p-[6px] text-white"
              onClick={() => {
                props.setIndex(0);
              }}
            >
              {props.activeIndex === 0 && (
                <motion.span
                  layoutId="active"
                  className="absolute inset-0 z-[-10] bg-amber-600 rounded-md"
                />
              )}
              Home
            </Link>
            <Link
              href="#About"
              alt="Our Story"
              className="relative max-sm:p-[2px] md:p-[6px] text-white"
              onClick={() => {
                props.setIndex(1);
              }}
            >
              {props.activeIndex === 1 && (
                <motion.span
                  layoutId="active"
                  className="absolute inset-0 z-[-10] bg-amber-600 rounded-md"
                />
              )}
              Story
            </Link>
            <Link
              href="#Menu"
              alt="Menu"
              className="relative max-sm:p-[2px] md:p-[6px] text-white"
              onClick={() => {
                props.setIndex(2);
              }}
            >
              {props.activeIndex === 2 && (
                <motion.span
                  layoutId="active"
                  className="absolute inset-0 z-[-10] bg-amber-600 rounded-md"
                />
              )}
              Menu
            </Link>
            <Link
              href="#"
              alt="Reservations and Booking"
              className="relative max-sm:p-[2px] md:p-[6px] text-white"
              onClick={() => {
                props.setIndex(3);
              }}
            >
              {props.activeIndex === 3 && (
                <motion.span
                  layoutId="active"
                  className="absolute inset-0 z-[-10] bg-amber-600 rounded-md"
                />
              )}
              Reserve
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
