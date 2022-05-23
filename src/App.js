import React from "react";
import ConverterCmToInch from "./components/ConverterCmToInch";
import ConverterInchToCm from "./components/ConverterInchToCm";


function App() {
  return (
    <div className="App">
      <h1>Below are two useful converters: </h1>
      <ConverterCmToInch />
      <ConverterInchToCm />
    </div>
  );
}

export default App;
