import './App.css';
//import './test1';
import './script';
import logo from './img/log.svg';
import register from './img/register.svg';



function Login () {    
    return (
        <div>
            <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                <form action="/" className="sign-in-form">
                    <h2 className="title">Sign in</h2>
                    <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" />
                    </div>
                    <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" value="Login" className="btn solid" />
                    <p className="social-text">Or Sign in with social platforms</p>
                    <div className="social-media">
                    <a href="/" className="social-icon">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" className="social-icon">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/" className="social-icon">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="/" className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    </div>
                </form>
                <form action="/" className="sign-up-form">
                    <h2 className="title">Sign up</h2>
                    <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" />
                    </div>
                    <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="Email" />
                    </div>
                    <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" className="btn" value="Sign up" />
                    <p className="social-text">Or Sign up with social platforms</p>
                    <div className="social-media">
                    <a href="/" className="social-icon">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" className="social-icon">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/" className="social-icon">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="/" className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    </div>
                </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                <div className="content">
                    <h3>Admin Login</h3>
                    <p>
                    Are you an Admin? Enter to Admin Login from here..
                    </p>
                    <button className="btn transparent" id="sign-up-btn">
                    Sign in
                    </button>
                </div>
                <img src= {logo} className="image" alt="" />
                </div>
                <div className="panel right-panel">
                <div className="content">
                    <h3>Company Login</h3>
                    <p>
                    Not an Admin? Go back to the Company Login from here..
                    </p>
                    <button className="btn transparent" id="sign-in-btn" onClick=''>
                    Sign in
                    </button>
                </div>
                <img src={register} className="image" alt="" />
                </div>
            </div>
            </div>
        </div>
    );
}

export default Login;