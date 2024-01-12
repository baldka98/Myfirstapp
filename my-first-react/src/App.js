import React from "react";
import "./App.css";
import Movie from "./components/Movie";
import Gutal from "./components/Gutal";
const App = () => {
  return (
    <div>
      <h1 className="title">Таньд санал болгох фүүзний жагсаалт</h1>;
      <div className="title"> заалны гутал </div>
      <div className="hevtee">
        <Gutal> gutal div </Gutal>
        <Gutal> gutal div </Gutal>
        <Gutal> gutal div </Gutal>
      </div>
    </div>
  );
};

export default App;
