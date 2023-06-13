import styles from "./App.module.css";
import MainPage from "./pages/mainpage/Main";
import Login from "./pages/login/login";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
      <MainPage/>
      <Login></Login>
    </div>
  );
}

export default App;
