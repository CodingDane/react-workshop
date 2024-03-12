import './index.css';

import React from "react";
import * as ReactDOM from "react-dom/client";

import App from "./App";

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

// Arrow Function
// const Hello = () => {
// }

// function Hello({name, age}) {
  // props destructuring
  // console.log(props);
  //const name = props.name;
  // const age = props.age;
  // const {name, age} = props;

//  return (
//    // Return only one HTML Element
//    <div className="container">
//      <h1>Hello {name}, {age} years old!!!</h1>;
//    </div>
//  );
// }
