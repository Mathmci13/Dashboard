import { API } from "../axios-config";

const loginRoute = "/Empresas/Login";

const login = async (email, senha) => {
  try {
    const { status, data } = await API.post(loginRoute, null, { params: { email, senha } });
    if (status >= 200 && status < 400) {
      return data;
    }
    return new Error("Erro ao efetuar o login");
  } catch (error) {
    console(error);

    return new Error(error || "Erro ao efetuar o login");
  }
};

export const LoginService = {
  login,
};
