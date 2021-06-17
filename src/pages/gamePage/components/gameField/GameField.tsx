import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameStatusAction, Score, buttonStatusAction } from "../../../../redux/gamePage/gamePageActions";
import { RootState } from "../../../../redux/rootReducer";
import "./styles.scss";
import { result } from "./utils/result";

export const GameField: React.FC = () => {
    const [ size, setSize ] = useState<Array<string>>( [] );
    const sizeGameField = useSelector( ( state: RootState ) => state.menuPageReducer.levelGame );

    const dispatch = useDispatch()
    const statusGame = useSelector( ( state: RootState ) => state.gamePageReducer.statusGame )

    const borderCellValue = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ];

    useEffect( () => {
        const generateItems = ( size: number ): Array<string> => {
            return new Array( size + 1 ).fill( "" );
        };
        setSize( generateItems( sizeGameField ) );
    }, [ sizeGameField ] );

    const answer = ( event: React.MouseEvent<HTMLTableElement> ) => {
        if ( statusGame ) {
            const { score, status } = result( event )

            if ( status ) {
                dispatch( Score( score ) )
                dispatch( gameStatusAction( false ) )
                dispatch( buttonStatusAction( false ) )
            }
        }
    }

    return (
        <table className="GameField" onClick={ answer }>
            <tbody>
                { size.map( ( row, i ) => {
                    return (
                        <tr className="GameField-row" key={ `${ i + 1000 }` }>
                            { size.map( ( cell, k ) => {
                                if ( i === 0 && k === 0 ) {
                                    return <td className=" GameField-zeroCell  GameField-topCell GameField-cell" key={ `${ i }${ k }` }></td>;
                                }
                                if ( i === 0 ) {
                                    return (
                                        <td className=" GameField-topCell GameField-cell" key={ `${ i }${ k }` }>
                                            { borderCellValue[ k - 1 ] }
                                        </td>
                                    );
                                }
                                if ( k === 0 ) {
                                    return (
                                        <td className=" GameField-leftCell GameField-cell" key={ `${ i }${ k }` }>
                                            { borderCellValue[ i - 1 ] }
                                        </td>
                                    );
                                }

                                return <td id={ `${ i }${ k }` } className=" GameField-gameCell GameField-cell" key={ `${ i }${ k }` }></td>;
                            } ) }
                        </tr>
                    );
                } ) }
            </tbody>
        </table>
    );
};
