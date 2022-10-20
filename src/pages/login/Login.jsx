import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

const auth = useAuth()

 const onSubmit = () => {
  const response = auth.login({email,senha})
  console.log(response)
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
        <input value='Enviar'type="button" onClick={onSubmit}></input>
      </form>
    </div>
  );
}


export default Login;
