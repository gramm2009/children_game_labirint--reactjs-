import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/rootReducer"
// import { levelGameDownAction, levelGameUpAction, speedGameDownAction, speedGameUpAction } from "../../redux/menuPage/menuPageActions"

import { Link } from 'react-router-dom';

import "./style.scss"
import  useChange  from "../../hooks/useChange";

export const MenuPage: React.FC = () => {

    const dispatch = useDispatch()
    const change=useChange()

    const levelGame = useSelector( ( state: RootState ) => state.menuPageReducer.levelGame )
    const speedGame = useSelector( ( state: RootState ) => state.menuPageReducer.speedGame )

    return (
        <div className="MenuPage">
            
            <div className="MenuPage-container">
                
                <div>Задача игры:   Найти выход из лабиринта</div>
                <div>Как играть:   Следите за подсказками ( стрелки )</div>

                <div>
                    <span>Всего уровней сложности в игре:  От 3 - 9</span>
                    <br />
                    <span>Возможная скорость в игре: От 1 - 10</span>
                </div>

                <div>
                    <span>Выбрать начальный уровень сложности: </span>
                    <button onClick={()=>change.levelDown()  }>-</button>
                    <span> { levelGame } </span>
                    <button onClick={()=>change.levelUp() }>+</button>
                </div>

                <div>
                    <span>Выбрать начальную скорость игры: </span>
                    <button onClick={()=>change.speedDown() }>-</button>
                    <span> { speedGame } </span>
                    <button onClick={()=>change.speedUp() }>+</button>
                </div>

                <div>
                    <Link to="/gamepage"> <button>Перейти к игре</button></Link>
                </div>

            </div>

        </div>
    )
}