import './App.css';
import login from './login.js';


// test
fetch("http://localhost:5000/api")
  .then((response) => response.json())
  .then((data) => console.log(data));


function App() {
  return (
    <>
      {login()}
    </>
  );
}

export default App;
