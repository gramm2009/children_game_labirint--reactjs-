import { combineReducers } from "redux";
import {menuPageReducer} from './menuPage/menuPageReducer'
import {gamePageReducer} from './gamePage/gamePageReducer'

export const rootReducer =  combineReducers({
    menuPageReducer, gamePageReducer
})

export type RootState = ReturnType<typeof rootReducer>