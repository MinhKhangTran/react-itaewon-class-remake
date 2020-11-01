import React from "react";
import { useParams } from "react-router-dom";
import { character } from "../assets/data";
import Category from "../components/Category";
import styled from "styled-components";
export default function SingleCharacter() {
  const { id } = useParams();
  const person = parseInt(id) - 1;
  const { name, desc, category, img } = character[person];
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="h-screen bg-gray-200 grid place-items-center py-8">
        <div className="flex w-11/12 mx-auto flex-wrap md:flex-no-wrap justify-center">
          <Wrapper>
            <article className="md:mr-4">
              <img
                className="h-full w-full object-cover object-top rounded-xl"
                src={img}
                alt={name}
              />
            </article>
          </Wrapper>
          <div className="md:w-1/2 flex flex-col justify-center md:ml-4 mt-8 mb:mt-0">
            <h1>
              <span className="bg-gray-600 text-gray-100 rounded px-1">
                Name:
              </span>{" "}
              {name}
            </h1>
            <h1>
              <span className="bg-gray-600 text-gray-100 rounded px-1">
                Description: <br></br>
              </span>{" "}
              {desc}
            </h1>
            <Category text={category}></Category>
          </div>
        </div>
      </section>
    </>
  );
}

const Wrapper = styled.article`
  article {
    width: 500px;
    height: 700px;
  }
  @media (max-width: 768px) {
    article {
      width: 300px;
      height: 500px;
    }
  }
`;
