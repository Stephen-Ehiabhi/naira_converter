import React, {useState} from "react"


function Pounds() {

  const [nairaValue, setNairaValue] = useState(0)
//FUNCTION TO CONVERT TO Pounds
  function convertToPounds(e) {
     const equ = (Number(e.target.value) * 610).toFixed(2) 
    setNairaValue(equ)
   
  }

//   function showState() {
//     return 
//  }

      return (
        <div className="rates" style={{ display: "flex", flexDirection: "row"}}>
            
          <div>
            <input onChange={convertToPounds} type="text" placeholder="Pounds to Naira" />
            {/* <button >to Naira</button> */}
            <p>{"₦" + nairaValue}</p>
          </div>
            
    </div>
  );
}

export default Pounds;
