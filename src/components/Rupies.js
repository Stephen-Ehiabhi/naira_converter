import React,{useState} from "react"


function Rupies() {

  const [nairaValue, setNairaValue] = useState(0)
//FUNCTION TO CONVERT TO Rupies
  function convertToRupies(e) {
     const equ = (Number(e.target.value) * 610).toFixed(2) 
    setNairaValue(equ)
   
  }

//   function showState() {
//     return 
//  }

      return (
        <div className="rates" style={{ display: "flex", flexDirection: "row"}}>
            
          <div>
            <input onChange={convertToRupies} type="text" placeholder="Rupies to Naira" />
            {/* <button >to Naira</button> */}
            <p>{"₦" + nairaValue}</p>
          </div>
            
    </div>
  );
}

export default Rupies;
