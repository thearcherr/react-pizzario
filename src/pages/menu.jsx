import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

  
const variants = {
    hidden: {
        opacity: 0,
        y: 10
    },

    show: {
        opacity: 1,
        y: 0
    }
}


const Item = (props) => {
    return (
        <motion.div variants={variants} className="col-span-1 grid md:grid-cols-2">
            <Image src={props.url} width={200} height={200} alt={props.title} className="rounded-md border-2 border-amber-400 max-sm:mx-auto" />
            <div className="max-sm:text-center">
                <h3 className="text-2xl font-pf mb-4 mt-4">{props.title}</h3>
              <p className="font-thin">
                {props.desc}
              </p>
            </div>
          </motion.div>
    )
}

export default function Menu() {
    function renderItems(item) {
        return (
          <Item key={item.title} title={item.title} desc={item.desc} url={item.url} />
      )
    }
  
  return (
    <div className="min-h-screen">
      <div className="mx-auto w-11/12 md:mt-[3.7rem]">
        <h1 id="Menu" className="mx-auto text-4xl font-pf font-semibold text-center mb-10">
          Explore Menu
        </h1>
        <motion.div variants={variants} initial="hidden" whileInView="show" transition={{duration: 1.25, staggerChildren: 0.35}} className="mx-auto grid grid-cols-1 md:grid-cols-2 h-full gap-10">
          {items.map(renderItems)} 
        </motion.div>
      </div>
    </div>
  );
}

const items = [
  {
    title: "Margherita Classica",
    desc: "A true Italian classic with San Marzano tomatoes, fresh mozzarella di bufala, basil, and a drizzle of extra virgin olive oil on a crispy, hand-stretched Neapolitan crust.",
    url: "/menu-1.jpeg",
  },
  {
    title: "Diavola Inferno",
    desc: "A spicy delight featuring spicy salami, crushed red pepper, chili oil, and fior di latte mozzarella on a thin, wood-fired crust.",
    url: "/menu-2.jpeg",
  },
  {
    title: "Truffle Fettuccine Alfredo",
    desc: "Silky fettuccine pasta tossed in a creamy parmesan sauce, infused with black truffle shavings, and topped with fresh parsley.",
    url: "/menu-3.jpeg",
  },
  {
    title: "Sicilian Seafood Linguine",
    desc: "A seafood lover’s dream with linguine pasta, fresh mussels, clams, shrimp, cherry tomatoes, and a light garlic white wine sauce.",
    url: "/menu-4.jpeg",
  },
  {
    title: "Tuscan Herb-Crusted Steak",
    desc: "A tender, grilled ribeye steak, crusted with Tuscan herbs and served with garlic-roasted potatoes and balsamic-glazed asparagus.",
    url: "/menu-5.jpeg",
  },
  {
    title: "Chicken Parmigiana",
    desc: "Crispy breaded chicken cutlet topped with marinara sauce, melted mozzarella, and fresh basil, served with spaghetti pomodoro.",
    url: "/menu-6.jpeg",
  },
];
