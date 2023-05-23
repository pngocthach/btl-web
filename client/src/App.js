import styles from "./App.module.css";
import MainPage from "./pages/mainpage/Main";
import EditCustomers from "./pages/editUsers/EditCustomers";

function App() {
  return (
    <div className={styles.App}>
      {/* <MainPage></MainPage> */}
      <EditCustomers></EditCustomers>
    </div>
  );
}

export default App;
