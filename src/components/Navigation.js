import React from "react";
import { navbar } from "../assets/data";
import MenuItem from "./MenuItem";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
export default function Navigation() {
  const style = {
    padding: "25px",
    top: "75px",
    width: "230px",
  };
  return (
    <motion.ul variants={variants} className="absolute z-20" style={style}>
      {navbar.map((link) => {
        return <MenuItem {...link} key={link.id}></MenuItem>;
      })}
    </motion.ul>
  );
}
