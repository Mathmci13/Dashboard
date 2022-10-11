import React from 'react'
import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Receita Total</h1>
            <MoreVertIcon fontSize="small"/>
        </div>    
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={7}/>
            </div>
            <p className="title">Vendas diárias totais</p>
            <p className="amount">R$420</p>
            <p className="desc">Transações anteriores em processo. Últimos pagamentos podem nao estar incluídos.</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Última Semana</div>
                    <div className="itemResult negative">
                        <ArrowDropDownIcon fontSize="small"/>
                        <div className="resultAmount">R$13.400</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Último Mês</div>
                    <div className="itemResult positive">
                        <ArrowDropUpIcon fontSize="small"/>
                        <div className="resultAmount">R$13.400</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Meta</div>
                    <div className="itemResult positive">
                        <ArrowDropUpIcon fontSize="small"/>
                        <div className="resultAmount">R$13.400</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured