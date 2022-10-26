import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BarChartIcon from "@mui/icons-material/BarChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { useAuth } from "../../hooks/useAuth";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  const auth = useAuth()

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <span className="logo">WaveDash</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">HOME</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTAS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PeopleIcon className="icon" />
              <span>Usuários</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Produtos</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Vendas</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USABILIDADE</p>
          <li>
            <BarChartIcon className="icon" />
            <span>Status</span>
          </li>
          {/* <li>
            <NotificationsIcon className="icon" />
            <span>Notificações</span>
          </li> */}
          <p className="title">SERVIÇOS</p>
          <li>
            <AssignmentIcon className="icon" />
            <span>Relatórios</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Configurações</span>
          </li>
          <p className="title">USUÁRIO</p>
          <li>
            <AccountBoxIcon className="icon" />
            <span>Perfil</span>
          </li>
          <li onClick={auth.logout}>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
