import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="d-flex align-items-center flex-column">
      <div className="d-flex flex-column align-items-center">
        <h1>Increment/Decrement Counter</h1>
        <h4>React-Redux</h4>
      </div>
      <div className="d-flex">
        <button className="btn-primary" onClick={() => dispatch(decNumber())}>
          -
        </button>
        <input type="text" className="col-xs-1" value={myState}></input>
        <button className="btn-primary" onClick={() => dispatch(incNumber())}>
          +
        </button>
      </div>
    </div>
  );
};

export default App;
