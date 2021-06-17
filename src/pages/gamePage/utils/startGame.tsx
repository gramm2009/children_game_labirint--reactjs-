export type StartGameType={
    id:number
}


export const StartGame = ():StartGameType => {

    let id: number; 
    
    const gameCells: HTMLCollectionOf<Element> = document.getElementsByClassName( "GameField-gameCell" )
    const cellStart: number = +( Math.random() * ( gameCells.length - 1 ) ).toFixed( 0 )
    gameCells[ cellStart ].classList.add( "start" )
    gameCells[ cellStart ].textContent = "start"
    id = +gameCells[ cellStart ].getAttribute( 'id' )!; 

    return { id}
}