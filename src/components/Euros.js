import React,{useState} from "react"


function Euros() {

  const [nairaValue, setNairaValue] = useState(0)
//FUNCTION TO CONVERT TO Euros
  function convertToEuros(e) {
     const equ = (Number(e.target.value) * 570).toFixed(2) 
    setNairaValue(equ)
   
  }

//   function showState() {
//     return 
//  }

      return (
        <div className="rates" style={{ display: "flex", flexDirection: "row"}}>
            
          <div>
            <input onChange={convertToEuros} type="text" placeholder="Euros to Naira" />
            {/* <button >to Naira</button> */}
            <p>{"₦" + nairaValue}</p>
          </div>
            
    </div>
  );
}

export default Euros;