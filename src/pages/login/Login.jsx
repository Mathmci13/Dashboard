import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useAuth } from "../../hooks/useAuth";
import { LoginService } from "../../services/Empresas/LoginService";

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


// const auth = useContext(AuthContext)
const auth = useAuth()

 const onSubmit = () => {
  const response = auth.login({email,senha})
  // const response = await LoginService.login(email, senha)
  console.log(response)
}
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
        <input value='Enviar'type="button" onClick={onSubmit}></input>
      </form>
    </div>
  );
}


export default Login;
