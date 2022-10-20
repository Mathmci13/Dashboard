
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import List from "./pages/list/List";
import Single from "./pages/single/Single";

import {BrowserRouter,Routes,Route, Navigate,} from "react-router-dom";
import { produtctInputs, userInputs } from "./formSource";
import "./style/dark.scss"
import { useContext, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";



function App() {

  const{darkMode} = useContext(DarkModeContext)
  const{ token } = useContext(AuthContext)
  // const [token, setToken] = useState();
  
  // if (!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
      <Routes>
        <Route>
          {console.log('AQUI: ',token)}
          {token ?  <Route path="dashboard" element={<Home/>}/> : <Route path="login" index element={<Login/>}/> }
          {/* <Route index element={<Home/>}/> */}
          <Route path="dashboard" element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="users">
            <Route index element = {<List/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<New inputs = {userInputs} title = "Adicionar novo Usuário" />}/>
          </Route>
          <Route path="products">
            <Route index element = {<List/>}/>
            <Route path=":productId" element={<Single/>}/>
            <Route path="new" element={<New inputs = {produtctInputs} title = "Adicionar novo Produto"/>}/>
          </Route>
        </Route>
        <Route path="*" element={<Navigate to ="/login" />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
