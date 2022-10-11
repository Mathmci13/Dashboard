import React from 'react'
import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
              <div className="item">
              <img src="https://images.pexels.com/photos/11908917/pexels-photo-11908917.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Shaolin</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">Shaolin@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Celular:</span>
                  <span className="itemValue">12999999999</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Endereço:</span>
                  <span className="itemValue">Rua Legal, 99</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">País:</span>
                  <span className="itemValue">Brasil</span>
                </div>
              </div>
            </div> 
          </div>
          <div className="right">
            <Chart aspect={3/1} title="Gastos do usuário (Nos últimos 6 meses)"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Últimas Transações</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;