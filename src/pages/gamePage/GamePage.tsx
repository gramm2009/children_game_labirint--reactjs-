import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { GameField } from "./components/gameField/GameField";
import { StepsField } from "./components/stepsField/StepsField";
import "./style.scss";
import { ArrowEffect } from "./utils/arrowEffect";
import { Move } from "./utils/move";
import { StartGame } from "./utils/startGame";
import { buttonStatusAction, gameStatusAction } from "../../redux/gamePage/gamePageActions"
import { levelGameUpAction } from "../../redux/menuPage/menuPageActions"
import { cleaner } from "./utils/cleaner";
import useChange  from "../../hooks/useChange";

export const GamePage: React.FC = () => {
    console.log( 'render GamePage' );
    const change = useChange()
    const dispatch = useDispatch()
    
    const levelGame = useSelector( ( state: RootState ) => state.menuPageReducer.levelGame )
    const speedGame = useSelector( ( state: RootState ) => state.menuPageReducer.speedGame )

    
    const score = useSelector( ( state: RootState ) => state.gamePageReducer.score )
    const buttonStatus = useSelector((state:RootState)=>state.gamePageReducer.buttonStatus)
    
    
    

    const start = () => {
        dispatch(buttonStatusAction(true))
        cleaner()
        const { id } = StartGame();
        const { newTenMoves } = Move( id );
        const {timeEffect} = ArrowEffect( newTenMoves )
        setTimeout(()=>{
            dispatch( gameStatusAction( true ) )
        },timeEffect)
        
    };

    return (
        <div className="GamePage">
            <div className="GamePage-container">
                <span>Children Game LABIRINT</span>
                <span>Score: { score }</span>
                <div>
                    <span>Изменить уровень сложности: </span>
                    <button onClick={()=>change.levelDown()  }>-</button>
                    <span> { levelGame } </span>
                    <button onClick={()=>change.levelUp() }>+</button>
                </div>

                <div>
                    <span>Изменить скорость игры: </span>
                    <button onClick={()=>change.speedDown() }>-</button>
                    <span> { speedGame } </span>
                    <button onClick={()=>change.speedUp() }>+</button>
                </div>
                <GameField />
                <StepsField />
                <button
                    className="GamePage-btn-startGame"
                    onClick={ start }
                    disabled={ buttonStatus ? true : false }
                >START GAME</button>
            </div>
        </div>
    );
};
