import "./App.css";
import SidebarContainer from "./container/SidebarContainer";
import MainContent from "./container/MainContent";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

// test
// fetch("http://localhost:5000/api")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

function App() {
  return (
    <div className="App">
      <SidebarContainer />
      <MainContent />
    </div>
  );
}

export default App;
