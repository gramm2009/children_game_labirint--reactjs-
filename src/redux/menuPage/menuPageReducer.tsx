import {
    LEVEL_GAME_DOWN,
    LEVEL_GAME_UP,
    MenuPageActionsType,
    SPEED_GAME_DOWN,
    SPEED_GAME_UP
} from "./menuPageActions";

export type DefaultStateType = {
    levelGame: number
    speedGame: number
    showMenuPage: boolean
}

const defaultState: DefaultStateType = {
    levelGame: 3,
    speedGame: 1,
    showMenuPage: true
};

export const menuPageReducer = ( state = defaultState, action: MenuPageActionsType ) => {
    switch ( action.type ) {
        case LEVEL_GAME_UP:
            return { ...state, levelGame: state.levelGame + 1 };

        case LEVEL_GAME_DOWN:
            return { ...state, levelGame: state.levelGame - 1 };

        case SPEED_GAME_UP:
            return { ...state, speedGame: state.speedGame + 1 };

        case SPEED_GAME_DOWN:
            return { ...state, speedGame: state.speedGame - 1 };

        default:
            return state;
    }
};
