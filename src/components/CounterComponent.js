import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";


function CounterComponent() {
    const count = useSelector((state) => state.counter.value); // Access counter value from Redux store
    const dispatch = useDispatch(); // Dispatch actions to the store

    return (
        <div>
            <h2>Count: {count}</h2>
            <div className="counter-buttons">
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </div>
    );
}

export default CounterComponent;
