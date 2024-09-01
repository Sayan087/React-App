import { useState } from "react";
import Home from "./home";
import About from "./About";


function App() {
  const [count,setcount]=useState(5)
  const countElement=()=>{
  setcount(count+1)
  
  }
  console.log("count values",count)

  return (
    <>
      <p>count {count}</p>
      <button onClick={countElement}>click me</button>
      <Home/>
      <About/>
    
    </>
  
  );
}

export default App;
