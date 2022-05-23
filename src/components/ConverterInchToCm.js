import React, { useState } from "react";


function ConverterInchToCm() {
    const [inch, setInch] = useState(0);
  
    function handleChange(e) {
      setInch(e.target.value);
    }
    function convert(inch) {
      return (inch/0.394).toFixed(2);
    }
  
    return <div>
    <input type="text" value={inch} onChange={handleChange} />
    <p> {inch} inches is {convert(inch)} cm </p>
    </div>;
  }


  export default ConverterInchToCm;