export const cleaner = () => {
    let start: Element | null = document.querySelector( '.start' )
    let finish: Element | null = document.querySelector( '.finish' )
    let error: Element | null = document.querySelector( '.error' )
    let steps: NodeListOf<Element> = document.querySelectorAll( '.StepsField-cell' )
    let arraySteps: Array<Element> = Array.from( steps )

    if ( start ) {
        start.classList.remove( 'start' )
        start.textContent = ''
    }

    if ( finish ) {
        finish.classList.remove( 'finish' )
        finish.textContent = ''
    }

    if ( error ) {
        error.classList.remove( 'error' )
        error.textContent = ''
    }
    arraySteps.map(el=>el.textContent='')

    console.log( start );
    console.log( finish );
    console.log( steps );
    console.log( error );
    console.log( arraySteps );
}