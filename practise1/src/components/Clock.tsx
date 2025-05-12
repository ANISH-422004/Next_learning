import React, { useEffect, useState } from "react";

const formateTime = (sec: number): string => {
    const hrs = String(Math.floor(sec / 3600)).padStart(2, "0"); // OP Example: 01
    const min = String(Math.floor((sec % 3600) / 60)).padStart(2, "0"); // OP Example: 01
    const secStr = String(sec % 60).padStart(2, "0"); // OP Example: 01
    //Maths : total seconds / 3600 = hours, then round down to get whole number
    //Maths : total seconds % 3600 = remaining seconds, then divide by 60 to get minutes
    //Maths : total seconds % 60 = remaining seconds

    return `${hrs}:${min}:${secStr}`;
}


const Clock: React.FC = (): React.ReactElement => {

    const [seconds, setSeconds] = useState<number>(0);
    const [inRunning, setInRunning] = useState(false);
    const intervalRef = React.useRef<number | null>(null);
    // why we useRef here?
    // because we want to keep track of the interval ID without causing a re-render when it changes.
    // useRef is a mutable object that persists for the full lifetime of the component.
    // It doesn't trigger a re-render when its value changes, unlike useState.

    const startClock = () => {
        if (inRunning) return;
        intervalRef.current = setInterval(() => {
            setSeconds((prev) => { return prev + 1 })
        }, 1000)

        setInRunning(true);
    }

    const stopClock = () => {
        if (inRunning) {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
            intervalRef.current = null;
            setInRunning(false);
        }
    }


    const reset = () => {
        setSeconds(0)
        setInRunning(false)
        clearInterval(intervalRef.current as number)
        intervalRef.current = null;
    }



    return (
        <div className="text-2xl font-mono">
            <h1 className="text-3xl font-bold">Clock</h1>
            <p className="text-2xl font-mono">{formateTime(seconds)}</p>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={startClock}
            >
                Start
            </button>
            <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={stopClock}
            >
                Pause

            </button>
            <button
                className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                onClick={reset}
            >
                Reset

            </button>


        </div>
    );
};

export default Clock;


/*

Yes, you're absolutely right! The reason you're using useRef to store the intervalRef here is to avoid creating a new interval function on every render. When you store the interval ID in useRef, it helps persist the value across renders without triggering unnecessary re-renders.

Here's a breakdown of why useRef is the right choice in this case:

Why useRef is used for intervalRef:
1.useRef creates a mutable object (intervalRef) that persists across renders without causing re-renders when its value changes.

2.You want to keep track of the interval ID across renders, and using useState would cause the component to re-render every time the interval ID changes. This would be inefficient because the setInterval function would be called multiple times unnecessarily.

3.intervalRef.current is mutable, meaning you can assign it the interval ID without causing the component to re-render, and you can also safely access and clear the interval when necessary.

Example of Re-rendering issue:
If you were to use useState for the interval ID, the state would update every time you set the interval, causing a re-render. This could result in new intervals being created each time, which is not ideal.

In short, using useRef for the interval ID prevents your component from creating new intervals on each render while keeping the value of the interval ID across component lifecycles.

Good job! Keep up the great work with the refactor. Let me know if you need help with anything else!



*/