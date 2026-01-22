import { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  const [chooseUsername, setChooseUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [texto, setTexto] = useState("");
  const [check, setCheck] = useState(false)
  const [sucesso, setSucesso] = useState(null);

  function verificar() {
    if (chooseUsername === "" || senha === "" || confirmSenha === "") {
      setTexto("Todos os campos devem estar preenchidos");
      setSucesso(false);
    } else if(!check) {
      setTexto("Aceite os termos de serviço");
      setSucesso(false);
    } else if (senha !== confirmSenha) {
      setTexto("As senhas devem ser iguais");
      setSucesso(false);
    } else {
      setTexto("Conta criada com sucesso!");
      setSucesso(true);
    }
  }
  return (
    <div className="register-container">
      <p className={sucesso ? "register-msg-sucesso" : "register-msg-erro"}>
        {texto}
      </p>

      <div className="register-box">
        <div className="register-login">
          <h1 style={{ color: "white" }}>Create an account</h1>

          <input
            value={chooseUsername}
            onChange={(e) => setChooseUsername(e.target.value)}
            className="register-input"
            type="text"
            placeholder="Choose an username"
          />

          <input
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="register-input"
            type="password"
            placeholder="Password"
          />

          <input
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
            className="register-input"
            type="password"
            placeholder="Confirm your password"
          />
        </div>

        <div className="register-checkForgot">
          <div className="register-checkbox">
            <input
              value={check}
              onChange={(e) => setCheck(e.target.value)}
              id="inputBox"
              className="register-inputCheck"
              type="checkbox"
            />
            <p>I agree to the</p>
          </div>

          <a
            className="register-agree"
            href="https://youtube.com/shorts/V5aWViYX9vo?si=sLNqAGF5P3hNTE0F"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms & Services and Privacy Policy
          </a>
        </div>

        <button onClick={verificar} className="register-button">
          Register
        </button>

        <div className="register-register">
          <p className="register-p">Already have an account?</p>
          <Link className="register-href" to="/">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
