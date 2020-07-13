import React from "react";
import { Router }  from "@reach/router";
import House from "./House.js"

let storageLike = localStorage.getItem("likeP");
let storageHunger = localStorage.getItem("hungerP");
let storageExcitement = localStorage.getItem("excitementP");
let storageSleep = localStorage.getItem("sleepP");

if(!storageLike){
  localStorage.setItem("likeP", JSON.stringify(30));
}
if(!storageHunger){
  localStorage.setItem("hungerP", JSON.stringify(30));
}
if(!storageExcitement){
  localStorage.setItem("excitementP", JSON.stringify(30));
}
if(!storageSleep){
  localStorage.setItem("sleepP", JSON.stringify(30));
}

const App = () => {
  return (
    <div className="app--div">
        <Router>
          <House path="/" />
        </Router>
    </div>
  );
};

export default App;