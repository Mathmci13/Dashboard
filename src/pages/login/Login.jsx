import { LoadingButton } from "@mui/lab";
import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import './login.scss'

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const {login, loading, token} = useAuth();

  const onSubmit = async () => {
    console.log('token vindo do contexto',token)
    const response = await login( email, senha );
    console.log("response login: ", response);
  };

  return (
    <div className="login">
      <h1 className="title">Login</h1>
      <form className="form">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            title="email"
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="field">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            title="password"
            type={"password"}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          ></input>
        </div>
        <div className="actions">
          <LoadingButton 
            loading={loading}
            variant='outlined'
            onClick={onSubmit}
          >
            Enviar
          </LoadingButton>
        </div>
      </form>
    </div>
  );
}

export default Login;
