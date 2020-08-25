import React from "react";
import "./Display.css";

function Display(props) {
  if (props.data.selected) {
    return (
      <div className="Display">
        <button onClick={props.handleSelect}>
          Category: {props.data.category.title}
        </button>
        <h3>{props.data.question}</h3>
        <p>${props.data.value}</p>
        <input type="text" value={props.guess} onChange={props.handleChange} />
        <button onClick={props.handleSubmit}>Answer</button>
      </div>
    );
  }
  return (
    <div className="Display">
      <button onClick={props.handleSelect}>
        Category: {props.data.category.title}
      </button>
    </div>
  );
}

export default Display;
