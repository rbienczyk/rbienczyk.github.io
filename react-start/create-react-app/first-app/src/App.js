import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter.js";
import Button from "./Button.js";

const appTitle = "first components in React";

class App extends Component {
	render() {
		return ( 
			<div className="App">
			<header className="App-header">
			<h1 className="App-title">{appTitle}</h1>
			</header>
			<Counter label="licznik 1" /> 
			<Counter label="licznik 2" />
			<Counter label="licznik 3" /> 
			<Counter label="licznik 4" />
			
			
			<Button cn="btn" text="Przycisk" />
			<Button cn="btn btn-primary" text="Przycisk" />
			<Button cn="btn btn-default" text="Przycisk" />
			<Button cn="btn btn-ahhh" text="Przycisk" />
			
			</div>
		);
	}
}

export default App;
