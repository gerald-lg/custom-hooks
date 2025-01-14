import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        setCounter((current) => current + value);
    }

    const decrement = (value = 1) => {
        setCounter( (current) => current - value);
    }

    const resetCounter = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        resetCounter
    }

}