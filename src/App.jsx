// Backend API endpoint: https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes
import "./App.css";
import React from 'react';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import CafeList from "./components/CafeList/CafeList";

export default function App() {
  // const cafes = [];

  // React hooks for states
  const [cafes, setCafes] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");

  // react hooks effect: make sure that its code is executed JUST at the first render
  React.useEffect(() => {
    const url = "http://localhost:3000/api/v1/cafes";
    const params = (keyword !== "") ? `?title=${keyword}` : "";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCafes(data)
        // data.each( (cafeData) => {
        //   console.log("Cafe is coming!");
        //   cafes.push(cafeData);
        //   setCafes();
        // });
      });

  }, [keyword]);

  // Cafes is the state
  // setCafes is a function that cahnges the states for example : ([..., ...])


  console.log("App gets rendered");
  return(
    <div className="app-frame">
      <Navbar setKeyword={setKeyword} />

    <div className="app-body">
      <Sidebar setCafes={setCafes} />
      <CafeList cafes={cafes} />
    </div>
    </div>
  );
}
