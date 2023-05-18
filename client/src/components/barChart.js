import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'

function BarChart({data}) {
    return (
        <div style={{width: 600}}>
            <Bar data={data}></Bar>
        </div>
    )
}

export default BarChart;