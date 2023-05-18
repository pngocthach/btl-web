import {Line} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'

function LineChart({data}) {
    return (
        <div style={{width: 600}}>
            <Line data={data}></Line>
        </div>
    )
}

export default LineChart;