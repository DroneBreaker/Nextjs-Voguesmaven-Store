'use client';

import Button from "../components/Button"
import Card from "../components/Card";
import { LazyMotion, motion, domAnimation } from "framer-motion";
// import HomeLayout from "../layouts";

export default function Home() {
  return (
      <motion.div initial={{opacity: 0, scale: 0.2}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.9}}>
        <div className="bg-neutral-300 h-[22rem] mb-4">
          <div className="grid grid-cols-2">
            <div>
              <h2 className="md:mx-24 mx-10 md:text-5xl text-3xl font-medium md:mt-16 mt-10 md:w-[24rem] w-[15rem] mb-4">Shop from us and get amazing deals</h2>

              <Button text="Shop Now" route="/shop"/>
            </div>

            <div className="relative bg-neutral-300">
              <img style={{top: '3%', left: '5%'}} className="absolute h-[18rem] w-[17rem]" src="/home.png"/>
            </div>
          </div>
        </div>

          <div className="md:mx-24 mx-10 mt-2">
            <Card/>
          </div>
      </motion.div>
  )
}
