import React from "react";

export default function Category({ text }) {
  let farbe;
  if (text === "jangga") {
    farbe = "red";
  } else {
    farbe = "blue";
  }
  return (
    <div>
      <h1
        className={`capitalize bg-${farbe}-500 text-${farbe}-200 text-xl px-3 py-1 rounded-full mt-4 inline-block`}
      >
        {text}
      </h1>
    </div>
  );
}
