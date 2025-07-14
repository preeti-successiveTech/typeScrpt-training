import { useCallback, useState } from "react";
import Child from "./Child";

export default function Parent() {
    const [count, setCount] = useState<number>(0);

    const incrementCount = useCallback((): void => {
        setCount(prev => prev + 1);
    }, []);

    const resetCount = useCallback((): void => {
        setCount(0);
    }, []);

    return (
        <div>
            <h1>Parent component</h1>
            <h2>Current count: {count}</h2>
            <Child
                count={count} 
                incrementCount={incrementCount} 
                resetCount={resetCount} 
            />
        </div>
    );
}
