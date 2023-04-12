import './App.css';
import signup from './signup/signup';

// test
fetch("http://localhost:5000/api")
  .then((response) => response.json())
  .then((data) => console.log(data));


function App() {
  return (
    // <div className="App">
    // </div>
    <>
      {signup()}
    </>
    
  );
}

export default App;
