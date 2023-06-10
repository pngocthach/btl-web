import {Pie} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

import { useState } from "react";
import { registrationCenterData } from '../sampleData/sampleData';

function PieChart() {

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
        <div style={{width: 400}}>
            <Pie data={centerData}></Pie>
        </div>
    )
}

export default PieChart;