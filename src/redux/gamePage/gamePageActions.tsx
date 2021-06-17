

// 1)  статус игры  тру фалс
type GameStatusType = {
    type: typeof GAME_STATUS
    payload: boolean
}

export const GAME_STATUS = 'GAME_STATUS'

export const gameStatusAction = ( status: boolean ): GameStatusType => ( { type: GAME_STATUS, payload: status } )

// 2)   очки игры 
type ScoreType = {
    type: typeof SCORE
    payload: number
}

export const SCORE = 'SCORE'

export const Score = ( score: number ): ScoreType => ( { type: SCORE, payload: score } )


// 3)  блок кнопки
type DisabledButtonType = {
    type: typeof BUTTON_STATUS
    payload: boolean
}

export const BUTTON_STATUS = 'BUTTON_STATUS'

export const buttonStatusAction = ( status: boolean ): DisabledButtonType => ( { type: BUTTON_STATUS, payload: status } )


//Root
export type GamePageActionsType = GameStatusType | ScoreType | DisabledButtonType