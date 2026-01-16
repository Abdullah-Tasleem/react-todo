import "./EV.css";
export const EventPropagation = () => {
    const grandParent = () => {
        console.log("Grand Parent Clicked");
    };
    const parent = () => {
        console.log("Parent Clicked");
    };
    const child = (event) => {
        console.log(event);
        console.log("Child Clicked");
    }
  return (
    <>
      <div className="main">
        <div onClick={grandParent}>Grand Parent</div>
        <div onClick={parent}>Parent</div>
        <button onClick={child}>Child</button>
      </div>
    </>
  );
};
