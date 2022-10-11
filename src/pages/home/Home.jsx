import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/Widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'
import "./home.scss"

const Home = () => {
  return (
    <div className = "home">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
          <Widget type="usuario"/>
          <Widget type="pedido"/>
          <Widget type="ganhos"/>
          <Widget type="saldo"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart title="Ultimos 6 meses (Receita)" aspect={2/1}/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Lista</div>
            <Table/>
          </div>
        </div>
    </div>
  )
}

export default Home
