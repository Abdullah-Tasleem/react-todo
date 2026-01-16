import "./EV.css";
export const EventHandling = () => {
    const handleButtonClick = (name) => {
        // alert("Button clicked!");
        console.log(`My name is ${name}`);
    };
  return <>
    {/* <button onClick={handleButtonClick}>Click me</button> */}
    <button onClick={() => handleButtonClick('abdullah')}>Click me</button>
  </>;
};
