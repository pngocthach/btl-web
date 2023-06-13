import styles from './App.module.css';
import MainPage from './pages/mainpage/Main'
import Login from './pages/login/login'

function App() {
  return (
    <div className={styles.App}>
      <MainPage/>
    </div>
  );
}

export default App;
