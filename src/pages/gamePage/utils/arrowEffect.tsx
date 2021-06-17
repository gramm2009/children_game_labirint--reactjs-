import "./style.scss"

type ArrowEffectType = {
    timeEffect: number
}

export const ArrowEffect = ( newTenMoves: Array<number> ): ArrowEffectType => {
    let id = 100;
    let timeEffect: number = 0;

    for ( let i = 0; i < newTenMoves.length; i++ ) {

        setTimeout( () => {
            if ( newTenMoves[ i ] === 1 ) {
                document.getElementById( `${ id }` )!.innerHTML = '<div class="span span-right">&#10154;</div> ';
            }
            if ( newTenMoves[ i ] === 2 ) {
                document.getElementById( `${ id }` )!.innerHTML = '<div class="span span-bottom">&#10154;</div> ';
            }
            if ( newTenMoves[ i ] === 3 ) {
                document.getElementById( `${ id }` )!.innerHTML = '<div class="span span-left">&#10154;</div> ';
            }
            if ( newTenMoves[ i ] === 4 ) {
                document.getElementById( `${ id }` )!.innerHTML = '<div class="span span-top">&#10154;</div> ';
            }
            id++;

        }, ( 1 + i ) * 1000 );

        timeEffect = ( 1 + i ) * 1000
    }

    return { timeEffect }


};