import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import List from "./pages/list/List";
import Single from "./pages/single/Single";

import { Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import Products from "./pages/products/Products";
import { useAuth } from "./hooks/useAuth";

export const AppRoutes = () => {
  const { darkMode } = useContext(DarkModeContext);
  // const { isAuthenticated } = useContext(AuthContext);
  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />
  // }
  const Private = ({ children }) => {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route>
          <Route exact path="login" element={<Login />} />
          <Route
            exact
            path="dashboard"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={
                <New inputs={userInputs} title="Adicionar novo Usuário" />
              }
            />
          </Route>
          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":productId" element={<Single />} />
            <Route
              path="new"
              element={
                <New inputs={productInputs} title="Adicionar novo Produto" />
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
