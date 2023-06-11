import { useState } from "react";

export function Layout() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Docuit</h1>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Add Count</button>
      </div>
    </div>
  );
}
