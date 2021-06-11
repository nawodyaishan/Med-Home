import './login.css';
import React from 'react';
import { useHistory } from 'react-router-dom';


const Login = (props) => {
    const history = useHistory();  
    return (
        <div>
            <div className="body"></div>
            <div className="grad"></div>
            <div className="header">
                <div>Med @ <span>Home</span></div>
            </div>
            <br/>
            <div class="login">
                    <input type="text" placeholder=" Username" name="user"/> <br/>
                    <input type="password" placeholder=" Password" name="password"/> <br/>
                    <input type="button" value="Login" onClick={() => history.push('/home')} />
            </div>
        </div>
    );
}

export default Login;