
import { BUTTON_STATUS, GamePageActionsType, GAME_STATUS, SCORE } from "./gamePageActions";

export type DefaultStateType = {
    statusGame: boolean
    score: number
    buttonStatus: boolean
}

const defaultState: DefaultStateType = {
    statusGame: false,
    score: 0,
    buttonStatus: false
};

export const gamePageReducer = ( state = defaultState, action: GamePageActionsType ) => {
    switch ( action.type ) {
        case GAME_STATUS:
            return { ...state, statusGame: action.payload };

        case SCORE:
            return { ...state, score: state.score + action.payload };

        case BUTTON_STATUS:
            return { ...state, buttonStatus: action.payload };

        default:
            return state;
    }
}