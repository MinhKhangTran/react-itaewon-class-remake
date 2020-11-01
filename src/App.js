import { motion, AnimatePresence } from "framer-motion";
import { Home, About, Error, Characters, SingleCharacter } from "./pages";
import { Route, Switch } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";

// const ContainerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: {type:"spring",stiffness:300} },
// };

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route exact path="/characters">
          <Characters></Characters>
        </Route>
        <Route path="/characters/:id">
          <SingleCharacter></SingleCharacter>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </>
  );
}

export default App;
