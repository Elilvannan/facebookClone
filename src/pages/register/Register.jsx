import "./register.css";

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
              <input placeholder="username" className="loginInput" />
              <input placeholder="Email" className="loginInput" />
              <input placeholder="Password" className="loginInput" />
              <input placeholder="Password Again" className="loginInput" />

              <button className="loginButton">Sign Up</button>
              <button className="loginRegister">Log into account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
