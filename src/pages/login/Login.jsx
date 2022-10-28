import { Send } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import "./login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  // const [teste, setTeste] = useState(false);

  const { login, loading } = useAuth();

  const onSubmit = async () => {
    await login(email, senha);
  };


  return (
    <Box className="login" color={"purple"}>
      <Typography variant="h4">WaveDash</Typography>
      <Typography variant="h6">Login</Typography>
      <form className="form">
        <Box className="field">
          <TextField
            label="E-mail"
            id="email"
            type={"email"}
            value={email}
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box className="field">
          <TextField
            label="Senha"
            id="senha"
            type={"password"}
            value={senha}
            fullWidth
            onChange={(e) => setSenha(e.target.value)}
          />
        </Box>
        <div className="actions">
          <LoadingButton
            style={{ color: "purple", borderColor: "purple" }}
            loading={loading}
            loadingPosition={"end"}
            endIcon={<Send />}
            variant="outlined"
            onClick={onSubmit}
          >
            Entrar
          </LoadingButton>
        </div>
      </form>
    </Box>
  );
}

export default Login;
