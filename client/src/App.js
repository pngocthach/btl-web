import './App.css';
import Signup from './signup/signup';
import Login from './login/login';

// // test
// fetch("http://localhost:5000/api")
//   .then((response) => response.json())
//   .then((data) => console.log(data));


function App() {
  return (
    <div className="App">
      <Signup></Signup>
    </div>
);
}

export default App;
