import { useState } from "react";

import './styles.css';

export default function Root(props) {
  const [count, updateCount] = useState(0);
  console.log('Root props:', props);
  function incrementCount() {
    updateCount(count + 1);
  }
   return (
      <div className="container">
        <h1>Navbar</h1>
        <p>{props.name}</p>
        <button onClick={incrementCount}>Increment</button>
        <p>{count}</p>
      </div>
    );
}
