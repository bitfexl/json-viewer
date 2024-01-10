import { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <button className="border-8 w-80" onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </>
    );
}
