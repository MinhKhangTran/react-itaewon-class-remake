import React from "react";
import { motion, useCycle } from "framer-motion";
import Navigation from "./Navigation";
import MenuToggle from "./MenuToggle";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Navbar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <motion.nav
      className="absolute top-0 left-0 bottom-0 w-screen md:w-1/3"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div
        className="absolute top-0 left-0 bottom-0 w-screen md:w-full bg-yellow-100 z-10"
        variants={sidebar}
      ></motion.div>
      <Navigation></Navigation>
      <MenuToggle toggle={() => toggleOpen()}></MenuToggle>
    </motion.nav>
  );
}
