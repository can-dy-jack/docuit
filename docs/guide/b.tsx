import { useState } from "react";

function B() {
    const [count, set] = useState(0);

    return (
        <div>
            <p>{ count }</p>
            <button onClick={() => set(count + 1)}>count</button>
        </div>
    );
}

export default B;