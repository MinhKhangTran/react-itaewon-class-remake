import React from "react";
import { motion } from "framer-motion";
import { character } from "../assets/data";
import Character from "./Character";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

export default function Characters() {
  return (
    <div className="bg-gray-200 h-screen py-8">
      <motion.section
        className="w-11/12 mx-auto grid md:grid-cols-2 gap-1 h-full grid-cols-1 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {character.map((item) => {
          return <Character key={item.id} {...item}></Character>;
        })}
      </motion.section>
    </div>
  );
}
