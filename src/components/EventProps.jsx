import "./EV.css"
export const EventProps = () => {
    const HandleWelcomeUser = (name) => {
        alert(`Welcome ${name} to our website`);
    };

    const handleHover = () => {
        alert("Mouse hovered over the component");
    };
  return (
    <>
      <WelcomeUser
        onClick={() => HandleWelcomeUser("abdullah")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
    const handleGreeting = () => {
        alert("Hello User! Hope you are having a great day!");
    };
    return (
     <> 
     <button onClick={props.onClick}>Click</button>
     <button onMouseEnter={props.onMouseEnter}>Hover me</button>
     <button onClick={handleGreeting}>Greeting</button>
     </>   
    )};