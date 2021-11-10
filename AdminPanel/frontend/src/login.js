import './login.css';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { login } from "./actions/userActions";
import Loading from './Components/Loading';
import ErrorMessage from './Components/ErrorMessage';


const Login = () => {
    const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            history.push("/home");
            window.localStorage.clear();
        }
    }, [history,userInfo]);

    const submitHandler = async(e) => {
        e.preventDefault()

        dispatch(login(username, password));
    };

    return (
        <div>
            <div className="bodyL"></div>
            <div className="grad"></div>
            <div className="header">
                <div>Med @ <span>Home</span></div>
            </div>
            <br/>
            <div className="login">
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {loading && <Loading/>}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId = "formBasicUsername">
                        <Form.Control type="username" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId = "formBasicPassword">
                        <Form.Control type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    
                </Form>
                
            </div>
        </div>
    );
}

export default Login;