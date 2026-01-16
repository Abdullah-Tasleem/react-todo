import { useState } from "react";

export const LiftUp = () => {
   const [count, setCount] = useState("");
  return (
    <>
      <ChildComponent count={count} setCount={setCount} />
      <SecondChildComponent value={count} />
    </>
  );
};
export const ChildComponent = ({ count, setCount }) => {
 
  return (
    <input
      type="text"
      placeholder="Enter Your Name"
      value={count}
      onChange={(e) => setCount(e.target.value)}
    />
  );
};
export const SecondChildComponent = ({ value }) => {
  return (
    <h2>
      Hello, {value} 
    </h2>
  );
};