import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [texto, setTexto] = useState("");
  const [sucesso, setSucesso] = useState(null);

  function verificar() {
    const senhaCorreta = "123456";
    const usernameCorreto = "Conti";

    if (senha === "" || username === "") {
      setTexto("Todos os campos precisam estar preenchidos!");
      setSucesso(false);
    } else if (senha === senhaCorreta && username === usernameCorreto) {
      setTexto("Login efetuado com sucesso!");
      setSucesso(true);
    } else {
      setTexto("Senha ou username incorreto!");
      setSucesso(false);
    }
  }
  return (
    <div className="login-page">
    <div className="login-container">
      <p className={sucesso ? "login-msg-sucesso" : "login-msg-erro"}>{texto}</p>

      <div className="login-box">
        <div className="login-login">
          <h1 style={{ color: "white" }}>Login</h1>

          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            type="text"
            placeholder="Username"
          />

          <input
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="login-input"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="login-checkForgot">
          <div className="login-checkbox">
            <input id="inputBox" className="login-inputCheck" type="checkbox" />
            <p>remember me</p>
          </div>

          <a className="login-forgot" href="#">
            Forgot password?
          </a>
        </div>

        <button onClick={verificar} className="login-button">
          Login
        </button>

        <div className="login-register">
          <p className="login-p">Don't have an account?</p>
          <a className="login-href" href="/register">
            Register
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
