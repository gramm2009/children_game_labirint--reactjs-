export type StartGameType={
    id:number
}


export const StartGame = ():StartGameType => {

    let id: number; // ид с ячейкой старт
    
    const gameCells: HTMLCollectionOf<Element> = document.getElementsByClassName( "GameField-gameCell" )
    const cellStart: number = +( Math.random() * ( gameCells.length - 1 ) ).toFixed( 0 ) // Получили старт
    gameCells[ cellStart ].classList.add( "start" )// добавили класс старт
    gameCells[ cellStart ].textContent = "start"//добавили текст старт
    id = +gameCells[ cellStart ].getAttribute( 'id' )!; // получили ид клетки старт

    return { id}
}