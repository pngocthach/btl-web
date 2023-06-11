import styles from "./App.module.css";
import MainPage from "./pages/mainpage/Main";
import RegistrationTable from "./components/RegistrationTable";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";

function App() {
  return (
    <div className={styles.App}>
      <MainPage></MainPage>
      {/* <Signup></Signup>
      <Login></Login> */}
    </div>
  );
}

export default App;
