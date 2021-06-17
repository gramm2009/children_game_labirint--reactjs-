// Внимание !!! Мы должны экспортировать общий TYPE из этого файла пример ниже, далее мы его применяем в редюсере как 
// оприделитель для ACTION 

// 1)
type LevelGameUpType = {
    type: typeof LEVEL_GAME_UP
}

export const LEVEL_GAME_UP = 'LEVEL_GAME_UP'

export const levelGameUpAction = (): LevelGameUpType => ( { type: LEVEL_GAME_UP } )

// 2)
type LevelGameDownType = {
    type: typeof LEVEL_GAME_DOWN
}

export const LEVEL_GAME_DOWN = 'LEVEL_GAME_DOWN'

export const levelGameDownAction = (): LevelGameDownType => ( { type: LEVEL_GAME_DOWN } )

// 3)
type SpeedGameUpType = {
    type: typeof SPEED_GAME_UP
}

export const SPEED_GAME_UP = 'SPEED_GAME_UP'

export const speedGameUpAction = (): SpeedGameUpType => ( { type: SPEED_GAME_UP } )

// 4)
type SpeedGameDownType = {
    type: typeof SPEED_GAME_DOWN
}

export const SPEED_GAME_DOWN = 'SPEED_GAME_DOWN'

export const speedGameDownAction = (): SpeedGameDownType => ( { type: SPEED_GAME_DOWN } )

export type MenuPageActionsType = LevelGameUpType | LevelGameDownType | SpeedGameUpType|SpeedGameDownType
// Общий экспорт типов ( далее им определим акшн в редюсере)