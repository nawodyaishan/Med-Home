import React, {Component} from 'react';
import './App.css';

export default class LoginSc extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
    }

    handleClick() {
        const container = this.wrapperRef.current;
        container.classList.add("sign-up-mode")
    }

    render() {
        return(
            <div ref={this.wrapperRef} className="container">
                <div className="sign_in_btn" type="button" onClick={() => this.handleClick()} />
            </div>
        );
    }
}