import { useState } from "react";
import "./login.css";

function Login() {
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
    <div className="container">
      <p className={sucesso ? "msg-sucesso" : "msg-erro"}>{texto}</p>

      <div className="box">
        <div className="login">
          <h1 style={{ color: "white" }}>Login</h1>

          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            type="text"
            placeholder="Username"
          />

          <input
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="input"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="checkForgot">
          <div className="checkbox">
            <input id="inputBox" className="inputCheck" type="checkbox" />
            <p>remember me</p>
          </div>

          <a className="forgot" href="#">
            Forgot password?
          </a>
        </div>

        <button onClick={verificar} className="button">
          Login
        </button>

        <div className="register">
          <p className="p">Don't have an account?</p>
          <a className="href" href="">
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
