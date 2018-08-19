import React, {Component} from "react";
import "./Counter.css";

const Counter = (props) => {
	console.log(props);
	return (
		<div id="counter">{props.label}</div>
	);
};

export default Counter;