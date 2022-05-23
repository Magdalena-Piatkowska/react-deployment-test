import React, { useState } from "react";


function ConverterCmToInch() {
    const [cm, setCm] = useState(0);
  
    function handleChange(e) {
      setCm(e.target.value);
    }
    function convert(cm) {
      return (cm/2.54).toFixed(2);
    }
  
    return <div>
    <input type="text" value={cm} onChange={handleChange} />
    <p> {cm} cm is {convert(cm)} inches </p>
    </div>;
  }


  export default ConverterCmToInch;