import { useState } from "react";
export const State = () => {

    const [value, setValue] = useState(0);
    const handleButtonClick = () => {
        setValue(value + 1);
    };
    return (
        <>
        <h1>{value}</h1>
        <button onClick={handleButtonClick}>Increament</button>
        </>
    );
}