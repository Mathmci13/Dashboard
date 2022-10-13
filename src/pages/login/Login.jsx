import React, { useState } from "react";
import { LoginService } from "../../services/Empresas/LoginService";

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

 async function login(email, senha) {
    const response = await LoginService.login(email, senha);
    console.log(response);
  }

  return (
    <div>
      <div>login</div>
      <form >
        <label htmlFor="email">Email</label>
        <input
          id="email"
          title="email"
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          title="password"
          type={"password"}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        ></input>
        <input value='Enviar'type="button" onClick={() => login(email, senha)}></input>
      </form>
    </div>
  );
}

export default Login;
