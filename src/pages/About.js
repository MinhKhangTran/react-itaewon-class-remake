import React from "react";
import { about } from "../assets/data";

export default function About() {
  const [more, setMore] = React.useState(true);
  return (
    <section className=" md:h-screen w-screen py-8 md:py-0">
      <article className="grid place-items-center md:h-full">
        {about.map((item, index) => {
          const { img, desc } = item;
          return (
            <div
              key={index}
              className="flex md:w-2/3 w-11/12 mx-auto flex-wrap md:flex-no-wrap justify-center"
            >
              <img className="md:mr-4" src={img} alt="about" />
              <p className="md:ml-4">
                {`${more ? desc : desc.substring(0, 500) + "..."}`}
                <button
                  className="bg-gray-500 text-gray-100 rounded px-1 hover:bg-gray-700 hover:text-gray-300 transition transition-all duration-300 ease-in-out"
                  onClick={() => {
                    setMore(!more);
                  }}
                >{`${more ? "show less" : "show more"}`}</button>
              </p>
            </div>
          );
        })}
      </article>
    </section>
  );
}
