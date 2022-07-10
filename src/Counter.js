import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./features/counterSlice";


function Counter() {
    const count = useSelector((state) => state.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button onClick={ () => dispatch(decrement())}>
                Decrement
            </button>
        </div>
    )

}

export default Counter