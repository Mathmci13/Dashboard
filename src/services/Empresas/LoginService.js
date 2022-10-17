import { Environment } from "../../configs/environment";
import { API } from "../axios-config";

const loginRoute = "/Empresas/Login";

const login = async (email, senha) => {
  try {
    const { status, data } = await API.post(loginRoute, { email, senha });
    if (status >= 200 && status < 400) {
      return data;
    }
    return new Error("Erro ao efetuar o login");
  } catch (error) {
    console(error);

    return new Error(error || "Erro ao efetuar o login");
  }
};

const getToken = async () => {
  try {
    const token = await window.localStorage.getItem(
      Environment.STORAGE_TOKEN_KEY_NAME
    );
    if (token) {
      return token;
    }

    return new Error("Erro ao obter o token");
  } catch (error) {
    console.error(error);

    return new Error(error || "Erro ao obter o token");
  }
};

const setToken = async (token) => {
  try {
    await window.localStorage.setItem(
      Environment.STORAGE_TOKEN_KEY_NAME,
      token === undefined ? "" : token
    );
  } catch (error) {
    console.error(error);

    return new Error(error || "Erro ao definir o token");
  }
};

const clearToken = async () => {
  try {
    await window.localStorage.removeItem(Environment.STORAGE_TOKEN_KEY_NAME);
  } catch (error) {
    console.error(error);

    return new Error(error || "Erro ao limpar o token");
  }
};

const getUser = async () => {
  try {
    return (await window.localStorage.getItem("userData")) === null
      ? null
      : // : (JSON.parse(window.localStorage.getItem('userData')!) as UserLogged)
        JSON.parse(window.localStorage.getItem("userData"));
  } catch (error) {
    console.error(error);

    return new Error(error || "Erro ao obter informações do usuário");
  }
};

const setUser = async (user) => {
  // const setUser = async (user: UserLogged) => {
  try {
    await window.localStorage.setItem("userData", JSON.stringify(user));
  } catch (error) {
    console.error(error);

    return new Error(error || "Erro ao definir o usuário");
  }
};

const clearUser = async () => {
  try {
    await window.localStorage.removeItem("userData");
  } catch (error) {
    console.error(error);

    return new Error(error || "Erro ao limpar informações do usuário");
  }
};

// const getUserData = async (): Promise<AxiosResponse<UserLogged, any> | Error> => {
const getUserData = async () => {
  try {
    const data = await API.get(loginRoute, {
      headers: {
        "api-gsoft-token": window.localStorage.getItem(
          Environment.STORAGE_TOKEN_KEY_NAME
        ),
      },
    });
    if (data) {
      return data;
    }

    return new Error("Erro ao obter dados do usuário");
  } catch (error) {
    console.error(error);

    return new Error(error || "Erro ao obter dados do usuário");
  }
};

export const LoginService = {
  login,
  getToken,
  setToken,
  clearToken,
  getUser,
  setUser,
  clearUser,
  getUserData,
};
