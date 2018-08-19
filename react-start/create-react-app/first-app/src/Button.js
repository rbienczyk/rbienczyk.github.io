import React, {Component} from "react";

class Button extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			buttonCount: 1,	
		}
	}
	
	render() {
		return (
		 <button onClick={()=>this.update()} className={this.props.cn}>{this.props.text} {this.state.buttonCount}</button>
		);
	}
	
	update() {
		this.setState( ( currentValue ) => {
			return {
				buttonCount: currentValue.buttonCount + 1,
			}
		} );
	}
	
}

export default Button;