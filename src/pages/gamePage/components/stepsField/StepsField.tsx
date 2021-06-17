import { useEffect, useState } from "react";
import "./styles.scss";

export const StepsField: React.FC = () => {
    const [ masTr, setMasTr ] = useState<Array<string>>( [] );
    const [ masTd, setMasTd ] = useState<Array<string>>( [] );

    let id: number = 99

    useEffect( () => {
        const generateTr = ( size: number ): Array<string> => {
            return new Array( size ).fill( "" );
        };

        const generateTd = ( size: number ): Array<string> => {
            return new Array( size ).fill( "" );
        };

        setMasTr( generateTr( 2 ) );
        setMasTd( generateTd( 5 ) );
    }, [] );

    return (
        <table className="StepsField">
            <tbody>
                { masTr.map( ( row, i ) => {
                    return (
                        <tr className="StepsField-row" key={ `${ i + id }` }>
                            {masTd.map( ( cell, k ) => {
                                id++
                                return <td className="StepsField-cell" key={ `${ i }${ k }` } id={ `${ id }` }></td>;
                            } ) }
                        </tr>
                    );
                } ) }
            </tbody>
        </table>
    );
};
