import { State } from "./components/hooks/State";
import { Todo } from "./projects/Todo/Todo";
// import { LiftUp } from "./components/LiftStateUp";
// import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch";
// import { DericedState } from "./components/DericedState";
// import "./components/EV.css";
// import { EventPropagation } from "./components/EventPropagation";
// import { EventProps } from "./components/EventProps";
// import { EventHandling } from "./components/EventHandling";
// import NetflixSeries from "./components/NetflixSeries";
// import "./components/Netflix.css"
// import Profile from "./components/Profile";
// import { Fragment } from "react";

export const App = () => {
  return (
    <section className="container">
      {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
      {/* <NetflixSeries /> */}
      {/* <EventHandling /> */}
      {/* <EventProps /> */}
      {/* <EventPropagation /> */}
      {/* <State /> */}
      {/* <DericedState /> */}
      {/* <LiftUp /> */}
      {/* <ToggleSwitch /> */}
      <Todo />
    </section>
  );
};
