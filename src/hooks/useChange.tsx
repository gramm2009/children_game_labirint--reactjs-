import { useDispatch, useSelector } from "react-redux"
import { levelGameDownAction, levelGameUpAction, speedGameDownAction, speedGameUpAction } from "../redux/menuPage/menuPageActions"
import { RootState } from "../redux/rootReducer"

type  useChangeType= {
    levelUp: () => void
    levelDown: () => void
    speedUp: () => void
    speedDown: () => void
}

const useChange=():useChangeType=>{
    
    const dispatch=useDispatch()
    const levelGame = useSelector( ( state: RootState ) => state.menuPageReducer.levelGame )
    const speedGame = useSelector( ( state: RootState ) => state.menuPageReducer.speedGame )
    
    const levelUp = (): void => {
        
        if ( levelGame !== 6 ) {
            dispatch( levelGameUpAction() )
        } else {
            alert( ' Максимальный уровень в данной игре 6' )
        }
    }
    
    const levelDown = (): void => {
        if ( levelGame !== 3 ) {
            dispatch( levelGameDownAction() )
        } else {
            alert( ' Минимальный уровень в данной игре 3' )
        }
    }
    
    const speedUp = (): void => {
        if ( speedGame !== 3 ) {
            dispatch( speedGameUpAction() )
        } else {
            alert( 'Максимальная скорость в данной игре 3 ' )
        }
    }
    
    const speedDown = (): void => {
        if ( speedGame !== 1 ) {
            dispatch( speedGameDownAction() )
        } else {
            alert( ' Минимальная скорость в данной игре 1' )
        }
    }
    
    return {levelUp, levelDown, speedUp, speedDown}
}

export default useChange