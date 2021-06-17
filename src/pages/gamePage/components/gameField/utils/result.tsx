type ResultType = {
    score: number
    status: boolean
}

export const result = ( event: React.MouseEvent<HTMLTableElement> ): ResultType => {

    let score: number = 0
    let status: boolean = false

    let finish: Element = document.querySelector( '.finish' )!
    let error!: Element


    if ( ( event.target as HTMLElement ).classList.contains( 'finish' ) ) {
        console.log( 'this is finish' );
        finish.innerHTML = 'Finish'
        score = 1;
        status = true;
    } else {
        if ( ( event.target as HTMLElement ).classList.contains( 'GameField-gameCell' ) ) {

            error = document.getElementById( `${ ( event.target as HTMLElement ).id }` )!
            error.classList.add('error')
            error.textContent = 'Error'
            finish.innerHTML = 'Finish'
            score = -1;
            status = true;
            
        }
    }
    return { score, status }
}