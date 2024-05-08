import './login.css'
const Login = () => {
    return (
        <>
        <form className="form">
            <div className="title">
                Welcome,<br />
                <span>sign up to continue</span>
            </div>
            <input type="email" placeholder="Email" name="email" className="input" />
            <input type="password" placeholder="Password" name="password" className="input" />
            <button className="button-confirm">Let's go →</button>
        </form>
        </>
    );
};

export default Login;
