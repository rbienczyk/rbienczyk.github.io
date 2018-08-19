import React from "react";
import "./Counter.css";
import Display from "./Display.js";
import Button from "./Button.js";

class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: this.props.init,
            start: false,
        }
    }

addOne = () => {
    this.setState( ( oldCounter ) => {
        return {
            counter: oldCounter.counter +1,
        }
    } );
}

countdown = () => {
    var self = this;

    self.setState( ( oldCounter ) => {
        return {
            start: true,
        }
    } );


    var sti = setInterval(function(){
        if( self.state.counter === 1) {
            clearInterval(sti);

            self.setState( ( oldCounter ) => {
                return {
                    start: false,
                }
            } );
        }

        self.setState( ( oldCounter ) => {
            return {
                counter: oldCounter.counter -1,
                start: true,
            }
        } )
    },1000);
}


    render() {
        return (
            <div id="counter">
                <div className="output">
                    <Display currentCount={this.state.counter} />
                </div>
                <div className="btns">
                    <Button start={false} updateCounter={this.addOne} text="+1" />
                    {this.state.counter > 0 ? <Button start={this.state.start} updateCounter={this.countdown} text="Odliczaj" />
                </div>
            </div>
        );
    }

}

export default Counter;