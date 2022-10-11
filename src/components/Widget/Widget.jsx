import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Widget = ({type}) => {
    let data;

    //temporario
    const quantidade = 100;
    const diferenca = 20;

    switch(type){
        case "usuario":
            data={
                title:"Usuários",
                isMoney: false,
                link: "Ver todos os usuários",
                icon: <PersonOutlineIcon className="icon"
                style={{
                    color: "crimson",
                    backgroundColor: "rgba(255,0,0,0.2)"
                }}/>,
            };
            break;
            
        case "pedido":
            data= {
                title:"Pedidos",
                isMoney: false,
                link: "Ver todos os pedidos",
                icon: <ShoppingCartIcon className="icon"
                style={{
                    color: "goldenrod",
                    backgroundColor: "rgba(218,165,32,0.2)"
                }}/>,
            };
            break;
                
        case "ganhos":
            data= {
                title:"Ganhos",
                isMoney: true,
                link: "Ver todos os ganhos",
                icon: <MonetizationOnIcon className="icon"
                style={{
                    color: "green",
                    backgroundColor: "rgba(0,128,0,0.2)"
                }}/>,
            };
            break;
        
        case "saldo":
            data={
                title:"Saldo",
                isMoney: true,
                link: "Detalhes do saldo",
                icon: <AccountBalanceWalletIcon className="icon" 
                style={{
                    color: "purple",
                    backgroundColor: "rgba(128,0,128,0.2)"
                }}/>,
            };
            break;                
            default:
            break;
    }
    

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$" } {quantidade}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon/>
                {diferenca}%
            </div>
            {data.icon}
        </div>
    </div>
  );
};

export default Widget