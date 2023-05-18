import './App.css';
import Signup from './pages/signup/signup';
import Login from './pages/login/login';
import BarChart from './components/barChart';
import LineChart from './components/lineChart';
import PieChart from './components/pieChart';

import { useState } from "react";
import { registeredCarData, registrationCenterData } from './sampleData/sampleData';


function App() {

  const [carData, setCarData] = useState({
    labels: registeredCarData.map((data) => data.date),
    datasets: [
      {
        label: "Số lượng xe đăng kiểm",
        data: registeredCarData.map((data) => data.registeredCar),
        backgroundColor: ['green',],
        borderColor: "black",
        borderWidth: 1,

      },
      {
        label: "Số lượng xe hết hạn",
        data: registeredCarData.map((data) => data.expiredCar),
        backgroundColor: ['red'],
        borderColor: "black",
        borderWidth: 1,

      },
    ],
  });

  const [centerData, setCenterData] = useState({
    labels: registrationCenterData.map((data) => data.name),
    datasets: [
      {
        label: "Số lượng khách hàng",
        data: registrationCenterData.map((data) => data.customer),
        backgroundColor: ['#12CBC4', '#1289A7', '#0652DD', '#1B1464'],
        borderColor: "black",
        borderWidth: 1,

      }
    ],
  });

  return (
    <div className="App"> 
      <BarChart data={carData}></BarChart>
      <LineChart data={carData}></LineChart>
      <PieChart data={centerData}></PieChart>
    </div>
);
}

export default App;
