import {Pie} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'

function PieChart({data}) {
    return (
        <div style={{width: 500}}>
            <Pie data={data}></Pie>
        </div>
    )
}

export default PieChart;