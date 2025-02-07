import Image from "next/image"
import { motion } from "framer-motion";

export default function About(props) {
    return (
      <motion.div id="About" initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.9, staggerChildren: 0.3}}>
        <div className="flex h-screen items-center">
          <div className="mx-auto w-11/12 h-[83.333%] grid max-sm:grid-flow-row md:grid-cols-2">
            <div className="max-sm:order-2 col-span-1 flex items-center">
              <motion.div className="max-w-md mx-auto" onViewportEnter={() => { props.utility(true); }} >
                <h1 className="text-4xl text-center mb-[2rem] font-anton">
                  Our Story
                </h1>
                <p className="text-center text-md italic"> 
                  Nestled in the heart of Naples, <span className="font-bold">Pizzario</span> was born from a
                  simple yet passionate dream&mdash;to bring the warmth, flavors, and
                  traditions of an authentic Italian kitchen to life. Founded by
                  Chef <span className="font-bold">Lorenzo Romano</span>, a second-generation pizzaiolo from
                  Naples, Pizzario is more than just a restaurant; it&rsquo;s a love
                  letter to Italy&rsquo;s rich culinary heritage. With recipes passed
                  down through generations, every dish at Pizzario is crafted
                  with the finest ingredients&mdash;hand-stretched dough, vine-ripened
                  San Marzano tomatoes, fresh basil, and creamy mozzarella di
                  bufala. From our signature wood-fired Neapolitan pizzas to
                  homemade pasta infused with tradition, each bite transports
                  you straight to the cobblestone streets of Italy.
                </p>
              </motion.div>
            </div>
            <div className="max-sm:order-1 col-span-1 flex items-center">
              <Image
                src="/pizzario.webp"
                width={450}
                height={450}
                alt="Pizzario Restaurant"
                className="rounded-xl mx-auto max-sm:mb-10 max-sm:mt-10"
              />
            </div>
          </div>
        </div>
      </motion.div>
    );
}