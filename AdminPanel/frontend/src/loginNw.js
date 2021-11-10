import './new.css';
import React from 'react';
import { useHistory } from 'react-router-dom';


const LoginNw = (props) => {
    const history = useHistory();  
    return (
        <div>
            <div className="login-wrap">
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">Doctors' Login</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab">Admin Panel</label>
                    <div className="login-form">
                        <div className="sign-in-htm" >
                            <div className="group">
                                <label for="user" className="label">Username</label>
                                <input id="user" type="text" className="input" placeholder="Enter your Username" />
                            </div>
                            <div className="group">
                                <label for="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input" placeholder="Enter your Password" data-type="password"/>
                            </div>
                        
                            <div className="group">
                                <button onClick={() => history.push('/home')} className="button" value="Sign In" > Sign In </button>
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <a href="#forgot">Forgot Password?</a>
                            </div>
                        </div>
                        <div className="sign-up-htm">
                            <div className="group">
                                <label for="user" className="label">Username</label>
                                <input id="user" type="text" className="input" placeholder="Enter your Username"/>
                            </div>
                            <div className="group">
                                <label for="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input" placeholder="Enter your Password" data-type="password"/>
                            </div>
                            <div className="group">
                                <button onClick={() => history.push('/home')} className="button" value="Sign In" > Sign In </button>
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <a href="#forgot">Forgot Password?</a>
                            </div>
                        </div>
                        <input type="text" placeholder=" Username" name="user"/> <br/>
                        <input type="password" placeholder=" Password" name="password"/> <br/>
                        <input type="button" value="Login" onClick={() => history.push('/home')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginNw;        