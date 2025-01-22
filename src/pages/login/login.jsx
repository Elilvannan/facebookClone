import "./login.css";

export default function login() {
  return (
    <div>
      <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <div className="loginLogo">aj Social</div>
                    <div className="loginDesc">
                        connect with the friends and the world!!!
                    </div>
            </div>

        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Email" className="loginInput" />
                <input type="Password" className="loginInput" />
                <button className="loginButton">Log In</button>
                <span className="loginForget">Forget Password</span>
                <button className="loginRegister">Register</button>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}
