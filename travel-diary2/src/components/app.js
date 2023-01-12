import React from "react";
import Main from "./main";
import Hero from "./hero";
import Grid from "./photogrid";
import Intro from "./intro";
import Add from "./add";
import "../styles.css";

const App = () => {
  return (
    <div>
      <Hero />
      <Grid />
      <Intro />
      <Main />
      <Add />
    </div>
  );
};

export default App;
