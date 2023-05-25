
import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);
const[n, st] = useState(0);

const meraFunct = () => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }

  
  useEffect(meraFunct, [count]);

  return (
  <>
  <h1>I have rendered {count} times!</h1>
  <button onClick={()=>st(n+1)}>Click {n}</button>
  </>
  );
}
export default Timer