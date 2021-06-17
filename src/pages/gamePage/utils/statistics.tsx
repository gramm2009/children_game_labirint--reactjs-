export const statistics=()=>{
    
}

// export const statistics = ( e, statusGame, ) => {

//     if ( statusGame ) {

//         let finish = document.querySelector( '.finish' )
//         let start = document.querySelector( '.start' )
//         if ( e.target.classList.contains( 'finish' ) ) {
//             console.log( 'this is finish' );
//             finish.innerHTML = 'Finish'
//             cleaner(finish,start)
//             return { statusGame: false, result: 1 }
//         } else {
//             if ( !e.target.classList.contains( 'noGame' ) ) {
//                 let id = e.target.id
//                 let error=document.getElementById( id )
//                 error.innerHTML = "Error"
//                 finish.innerHTML = 'Finish'
//                 console.log( 'Game' );
//                 cleaner(finish,start,error)
//                 return { statusGame: false, result: 0 }
//             }
//         }
//     }
// }


// const cleaner=(finish,start,error)=>{
//     setTimeout(()=>{
//         finish.classList.remove("finish")
//         finish.innerHTML=''
        
//         start.classList.remove("start")
//         start.innerHTML=''
//         let cellArrow=document.querySelectorAll('.cellArrow')
//         for(let i=0;i<cellArrow.length;i++){
//             cellArrow[i].innerHTML=''
//         }
//         if(error){
//             error.innerHTML=''
//         }
//     },2000)
// }