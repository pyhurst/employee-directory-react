import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Form from "./components/Form";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <>
      <Jumbotron />
      <Form>
        <Dropdown />
      </Form>
    </>
  );
}

export default App;
