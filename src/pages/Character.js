import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Character({ id, name, img }) {
  return (
    <Wrapper>
      <Link to={`/characters/${id}`}>
        <motion.section
          className="flex justify-center "
          variants={listVariants}
        >
          <div
            style={{ width: "300px", height: "300px" }}
            className="relative overflow-hidden bild cursor-pointer hover:shadow-xl rounded-lg"
          >
            <img
              className="h-full w-full object-cover object-top"
              src={img}
              alt={name}
            />
            <h1 className="beschreibung text-white text-center text-xl h-16 w-full flex items-center justify-center transition transition-all duration-300 ease-in-out">
              {name}
            </h1>
          </div>
        </motion.section>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .beschreibung {
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    transform: translateY(100%);
  }
  .bild:hover .beschreibung {
    transform: translateY(0);
  }
`;
