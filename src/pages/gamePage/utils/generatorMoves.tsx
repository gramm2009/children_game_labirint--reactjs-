type GeneratorMovesType = {
    tenMoves: Array<number>
}

export const GeneratorMoves = (): GeneratorMovesType => {

    let tenMoves: Array<number> = []

    for ( let i = 0; i < 10; i++ ) {
        let mov: number = ( ( Math.random() * 4 ) );
        mov = Math.ceil( mov )
        tenMoves.push( mov );
    }

    return { tenMoves }
}