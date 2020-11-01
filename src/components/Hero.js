import React from "react";
import { hero } from "../assets/data";

export default function Hero() {
  return (
    <article className="w-screen h-screen">
      <img
        className="w-full h-full object-cover object-right"
        src={hero}
        alt="hero"
      />
    </article>
  );
}
