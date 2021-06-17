
import './App.css';
import { Link } from 'react-router-dom';

function App () {
  return (
    <div className="App">
      App
      <Link to='/menupage' className="App-link">
        <div className="App-title">
          Игра ЛАБИРИНТ
        </div>
      </Link>
    </div>
  );
}

export default App;
