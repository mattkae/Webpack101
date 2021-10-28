import React, { useEffect, useState } from "react"

export function SayHiComponent() {
    const [ counter, setCounter ] = useState(0);

    const incrementCounter = () => {
        setCounter(prevCounter => prevCounter + 1);
    }

    useEffect(() => {
        const interval = setInterval(incrementCounter, 1000);

        return () => clearInterval(interval);
    }, []);

    return <div>
        Number of seconds elapsed: {counter}.
    </div>
}