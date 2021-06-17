import { GeneratorMoves } from "./generatorMoves";

type MoveType = {
    newTenMoves: Array<number>;
};

export const Move = ( id: number ): MoveType => {

    let coordinatesStep: number = id;
    let newTenMoves: Array<number> = [];
    let finish: HTMLElement | null;

    let status = true

    while ( status ) {
        const { tenMoves } = GeneratorMoves()
        for ( let i = 0; i < tenMoves.length; i++ ) {

            if ( tenMoves[ i ] === 1 ) {
                if ( document.getElementById( `${ coordinatesStep + 1 }` ) ) {
                    coordinatesStep = coordinatesStep + 1;
                    newTenMoves.push( 1 );
                } else {
                    if ( document.getElementById( `${ coordinatesStep + 10 }` ) ) {
                        coordinatesStep = coordinatesStep + 10;
                        newTenMoves.push( 2 );
                    } else {
                        if ( document.getElementById( `${ coordinatesStep - 10 }` ) ) {
                            coordinatesStep = coordinatesStep - 10;
                            newTenMoves.push( 4 );
                        }
                    }
                }
            }

            if ( tenMoves[ i ] === 2 ) {
                if ( document.getElementById( `${ coordinatesStep + 10 }` ) ) {
                    coordinatesStep = coordinatesStep + 10;
                    newTenMoves.push( 2 );
                } else {
                    if ( document.getElementById( `${ coordinatesStep + 1 }` ) ) {
                        coordinatesStep = coordinatesStep + 1;
                        newTenMoves.push( 1 );
                    } else {
                        if ( document.getElementById( `${ coordinatesStep - 1 }` ) ) {
                            coordinatesStep = coordinatesStep - 1;
                            newTenMoves.push( 3 );
                        }
                    }
                }
            }

            if ( tenMoves[ i ] === 3 ) {
                if ( document.getElementById( `${ coordinatesStep - 1 }` ) ) {
                    coordinatesStep = coordinatesStep - 1;
                    newTenMoves.push( 3 );
                } else {
                    if ( document.getElementById( `${ coordinatesStep + 10 }` ) ) {
                        coordinatesStep = coordinatesStep + 10;
                        newTenMoves.push( 2 );
                    } else {
                        if ( document.getElementById( `${ coordinatesStep - 10 }` ) ) {
                            coordinatesStep = coordinatesStep - 10;
                            newTenMoves.push( 4 );
                        }
                    }
                }
            }

            if ( tenMoves[ i ] === 4 ) {
                if ( document.getElementById( `${ coordinatesStep - 10 }` ) ) {
                    coordinatesStep = coordinatesStep - 10;
                    newTenMoves.push( 4 );
                } else {
                    if ( document.getElementById( `${ coordinatesStep + 1 }` ) ) {
                        coordinatesStep = coordinatesStep + 1;
                        newTenMoves.push( 1 );
                    } else {
                        if ( document.getElementById( `${ coordinatesStep - 1 }` ) ) {
                            coordinatesStep = coordinatesStep - 1;
                            newTenMoves.push( 3 );
                        }
                    }
                }
            }
        }

        if ( document.getElementById( `${ coordinatesStep }` )!.classList.contains( "start" ) ) {

            newTenMoves = []

        } else {
            break
        }
    }


    finish = document.getElementById( `${ coordinatesStep }` );
    finish!.classList.add( "finish" );

    return { newTenMoves };
};
