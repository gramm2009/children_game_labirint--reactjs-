
import './App.css';
import { Link } from 'react-router-dom';

// один главный индекс =  у него роутер
// индекс рендерит общий апп у которого много линков
// я просто в их апп должен отдать свою линку у которой лики дальше в игру
// в одной моей линке вход в мою игру

// мой апп это просто оболочка,  я им должен отдать линку в их апп моя линка это TitlePage
// она переходит в меню а та в игру
function App () {
  return (
    <div className="App">
      App
      <Link to='/menupage'  className="App-link">
        <div className="App-title">
          Игра ЛАБИРИНТ
          </div>
      </Link>
    </div>
  );
}

export default App;
