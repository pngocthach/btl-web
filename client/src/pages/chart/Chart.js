import LineChart from "../../components/lineChart";
import PieChart from "../../components/pieChart";
import BarChart from "../../components/barChart";
import styles from "./Chart.module.css";

function Chart() {
    return (
        <div className={styles.Chart}>
            <LineChart></LineChart>
            <BarChart></BarChart>
            <PieChart></PieChart>
        </div>
    );
}

export default Chart;