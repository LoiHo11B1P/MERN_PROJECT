import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"

function App() {

  const [testData, setTestData] = useState(null)

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setTestData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {testData}
        </p>
      </header>
    </div>
  );
}

export default App;
