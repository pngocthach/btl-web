import './App.css';
import SidebarContainer from './container/SidebarContainer'
import MainContent from './container/MainContent'
import Login from './pages/login/login'
import Signup from './pages/signup/signup';
import BarChart from './components/barChart';
import PieChart from './components/pieChart';
import LineChart from './components/lineChart';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function App() {
  return (
    <div className="App">
      <SidebarContainer/>
      <MainContent/>
      {/* <BarChart></BarChart>
      <LineChart></LineChart> */}
    </div>
);
}

export default App;
