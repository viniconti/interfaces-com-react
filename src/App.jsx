import { useState } from "react";
import "./App.css";

function App() {
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
      setTexto("senha ou username incorreto!");
      setSucesso(false);
    }
  }
  return (
    <>
      <div className="container">
        <p className={sucesso ? "msg-sucesso" : "msg-erro"}>{texto}</p>

        {/* TODA A BOX */}
        <div className="box">
          {/* LOGIN, USER E SENHA */}
          <div className="login">
            <h1 style={{ color: "white" }}>Login</h1>

            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="inputUsername"
              className="input"
              type="text"
              placeholder="Username"
            />

            <input
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              id="inputSenha"
              className="input"
              type="password"
              placeholder="Password"
            />
          </div>

          {/* REMEMBER ME, FORGOT PASSWORD */}
          <div className="checkForgot">
            <div className="checkbox">
              <input type="checkbox" />
              <p>remember me</p>
            </div>

            <div>
              <a className="forgot" href="#">
                Forgot password?
              </a>
            </div>
          </div>

          {/* BOTÃO LOGIN */}
          <button onClick={verificar} className="button">
            Login
          </button>

          {/* AINDA NÃO TEM UMA CONTA? */}
          <div className="register">
            <p className="p">Don't have an account?</p>
            <a className="href" href="#">
              Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
