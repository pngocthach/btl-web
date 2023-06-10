import styles from "./App.module.css";
import MainPage from "./pages/mainpage/Main";
import RegistrationTable from "./components/RegistrationTable";
import Login from "./pages/login/login";

function App() {
  return (
    <div className={styles.App}>
      {/* <MainPage></MainPage> */}
      <Login></Login>
    </div>
  );
}

export default App;
