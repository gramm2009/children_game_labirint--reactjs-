
import './App.scss';
import { Link } from 'react-router-dom';

function App () {
  return (
    <div className="App">
      <div className="App-container">
        <Link to='/menupage' className="App-link">
          <div className="App-title">
            <span>Игра ЛАБИРИНТ</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default App;
