import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Jumbotron />
      <Form />
    </>
  );
}

export default App;
