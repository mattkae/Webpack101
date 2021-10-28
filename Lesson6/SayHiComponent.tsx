import { useEffect, useState } from "react"
import * as React from 'react';

interface SayHiComponentProps {
    counterStart: number;
    mode: SayHiMode;
}

export enum SayHiMode {
    Counter,
    SayHi
}

export function SayHiComponent(props: SayHiComponentProps) {
    const [ counter, setCounter ] = useState(props.counterStart);

    const incrementCounter = () => {
        setCounter(prevCounter => prevCounter + 1);
    }

    useEffect(() => {
        const interval = setInterval(incrementCounter, 1000);

        return () => clearInterval(interval);
    }, []);
    
    switch (props.mode) {
        case SayHiMode.Counter: 
            return <div>
                Number of seconds elapsed: {counter}.
            </div>
        case SayHiMode.SayHi:
            return <div>
                Hello, I am saying hi!
            </div>
    }

}