import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { loginDemoAdmin, loginUser } from "../../redux/actions/authActions";
import { ToastContainer, toast } from "react-toastify";

import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageLogin, setMessageLogin] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loggedUsername = useSelector((state) => state.auth.username);

  let handleSumbit = async (e) => {
    e.preventDefault();

    const login = await loginUser(dispatch, { email, password })
      .then()
      .then(navigate("/"));
    if (!login) {
      setMessageLogin(true);
    }
  };

  const navigateDemo = () => {
    notifyError();
    dispatch(loginDemoAdmin());
  };


  /**
   * Popup Error
   * 
   */

  const notifyError = () =>
    toast.info("Some of the Buttons are Disabled due to: Security issues", {
      position: "top-center",
      autoClose: 8000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });



  useEffect(() => {
    if (loggedUsername) navigate("/");
  }, [loggedUsername]);

  return (
    <div className="login">
      <div className="loginWrapperContainer">
        <div className="loginWrapper">
          <h1 className="loginTitle">Login</h1>
          <div className="loginTitleUnderline"></div>

          <form className="formLogin" onSubmit={handleSumbit}>
            <input
              className="inputLogin"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="inputLogin"
              type="password"
              min="6"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="buttonLogin" type="submit">
              Log In
            </button>
          </form>
        </div>
        {messageLogin ? (
          <div className="messageLogin">
            <h1>
              You are Not allowed to be here.
              <br />
              Admin Zone <br /> <br />
              But you can access
              <br /> Demo Admin
              <br />
              (click on "Demo Admin" down below)
            </h1>
            <button
              onClick={() => setMessageLogin((messageLogin) => !messageLogin)}
              className="messageLoginButton"
            >
              Understood
            </button>
          </div>
        ) : null}
      </div>

      <button className="buttonDemo" onClick={navigateDemo}>
        Demo Admin
      </button>
    </div>
  );
}
