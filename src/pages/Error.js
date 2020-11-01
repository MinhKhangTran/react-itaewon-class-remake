import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Error() {
  return (
    <div className="grid place-items-center h-screen w-screen bg-yellow-200">
      <article className="flex flex-col items-center justify-center">
        <div className="" style={{ width: "300px", height: "300px" }}>
          <img
            className="h-full w-full object-cover rounded-xl"
            src="https://www.hellokpop.com/wp-content/uploads/2020/04/itaewonclass14-e1587853696753-1024x502.jpg"
            alt="crazy yiseo"
          />
        </div>
        <h1 className="text-4xl font-semibold text-yellow-600">
          Sorry! Hier gibt es nichts :P
        </h1>
        <motion.button
          className="mt-4 bg-yellow-600 text-yellow-200 rounded px-3 py-1 text-xl font-bold hover:text-yellow-300 hover:bg-yellow-700 transition transition-all duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/">Zurück zur Homepage</Link>
        </motion.button>
      </article>
    </div>
  );
}
