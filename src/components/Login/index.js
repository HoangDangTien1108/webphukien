import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faSnowflake, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Login = ({ openLogin, closeLogin }) => {
  const [typeLogin, setTypeLogin] = useState(false);
  const handleCreateAcount = () => {
    setTypeLogin(!typeLogin);
  };

  return (
    <>
      {openLogin ? (
        <div className="login">
          <button className="login-close" onClick={closeLogin}>
            <FontAwesomeIcon icon={faXmark} size="2x" />
          </button>
          <div className="login-content flex flex-col items-center gap-3">
            <div className="flex flex-col gap-4">
              <FontAwesomeIcon icon={faSnowflake} color="" size="3x" />
              <span>
                {typeLogin
                  ? "Create account to Skibidi Snow"
                  : "Sign in to Skibidi Snow"}
              </span>
            </div>
            <div className="w-full flex flex-col items-center gap-5">
              <div className="login-info">
                <p>Name</p>
                <input></input>
              </div>
              <div className="login-info">
                <div className="flex justify-between items-center">
                  <p>Password</p>
                  <button>{typeLogin ? "" : "Forgot password?"}</button>
                </div>
                <input></input>
              </div>
              <div className="login-signin">
                <button>{typeLogin ? "Create account" : "Sign in"}</button>
              </div>
              <div className="login-create">
                <button onClick={handleCreateAcount}>
                  {typeLogin ? "Sign in" : "Create an account"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Login;
