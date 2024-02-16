import { useState } from "react";
import { Box } from "@mui/material";
import "./app.scss";

import useCounter from "./hooks/useCounter";
import useLocalStorage from "./hooks/useLocalStorage";
const App = () => {

    const [ count, setCount ] = useState(0);

    const decrement = () => {
        setCount(count - 1);
    };

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <Box>
            <h1>Custom Hooks</h1>
            <h2>Implementación de Contador</h2>
            <h2>Implementación de LocalStorage</h2>

            <p>{count}</p>
            <button onClick={() => decrement()}>-</button>
            <button onClick={() => increment()}>+</button>
        </Box>

        <Box>
            <button onClick={()=> localStorage.removeItem()}></button>
        </Box>
    );
};

export default App;