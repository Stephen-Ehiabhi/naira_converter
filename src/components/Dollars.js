import React, {
  useState,
  useEffect
} from "react"


function Dollars() {
  //learning use effect which is use to create sideEffects
  //By default useEffect will run after every render
  //side effects are works outside the component
  //can be used in fetching, looking for events, signing up for subscriptions




  console.log("component render");

  const [nairaValue, setNairaValue] = useState(0)


  //has a second parameter i.e an Array of dependency
  useEffect(() => {
    //hooks can't be placed as far as conditionals. so when declaring conditionals do it inside the hook function
    //when the array is empty, it means itll run on the initial render
    // whenever we update the state, the useEffect gets run because its passed in the useeffect dependacy
    //if no dependacy array the useeffect hook would run everytime the page is rendered
    //if theres a senond parameter, it'll run only after a component is rendered
    //you can have many use effect as possible
    if (nairaValue >= 1) {
      console.log("Effect will run after every render");
      document.title = `Naira ₦${nairaValue}`
    }

  }, [nairaValue])


  //because the use effect function has an empty array as a second param the code would not run when a side effect is passed or done

  useEffect(() => {
    console.log("hello world!");
  }, [])

/*
  //cleanup function
  const [size, setSize] = useState(window.innerWidth)
  console.log(size);

  const checkSize = () => {
     setSize(window.innerWidth)
  }

  useEffect(() => {
    console.log("use effect");
    
    window.addEventListener("resize", checkSize)
    // cleanup function, is used to cleanup stored events to free up space
    // return () => {
    //   console.log("cleanup");
    //   window.removeEventListener("resize", checkSize)
      
    // }
  })*/

  //FUNCTION TO CONVERT TO Dollars
  function convertToDollars(e) {
    const equ = (Number(e.target.value) * 480).toFixed(2)
    setNairaValue(equ)

  }

  //   function showState() {
  //     return 
  //  }

  return ( <
    div className = "rates"
    style = {
      {
        display: "flex",
        flexDirection: "row"
      }
    } >

    <
    div >
    <
    input onChange = {
      convertToDollars
    }
    type = "text"
    placeholder = "Dollars to Naira" / > {
      /* <button >to Naira</button> */ } <
    p > {
      "₦" + nairaValue
    } < /p> <
    /div>

    <
    /div>
  );
}

export default Dollars;