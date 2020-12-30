import React from "react"
//import components
import Dollars from "./components/Dollars"
import Euros from "./components/Euros"
import Pounds from "./components/Pounds"
import Rupies from "./components/Rupies"


function App() {
 
  return (
    <div className="container">
      <h1>Naira Converter</h1>
      <Dollars />
      <Euros />
      <Pounds />
      <Rupies />
    </div>
  );
}

export default App;
