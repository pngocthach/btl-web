import "./App.css";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";
import BarChart from "./components/barChart";
import LineChart from "./components/lineChart";
import PieChart from "./components/pieChart";

function App() {
  return (
    <div className="App">
      <BarChart></BarChart>
      <LineChart></LineChart>
      <PieChart></PieChart>
    </div>
  );
}

export default App;
