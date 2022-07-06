import { useState } from "react";
const Controls = () => {
    const [count, setCount] = useState(0);
   
  
    return (
      <div>
        <h4>Counter</h4>
        <p>You clicked {count} times</p>
        <button onClick={() =>setCount(count +1)}>Sumar</button>
        <button onClick={() =>setCount(count -1)}>Restar</button>
      </div>
    );
  };
  export default Controls;