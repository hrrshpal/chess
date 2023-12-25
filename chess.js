const board = document.querySelector(".chessboard")
const player = document.querySelector("#player")
const info = document.querySelector("#info")
const size=8

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook,
]

function createBoard(){
    startPieces.forEach((startPiece,i)=>{
        const square = document.createElement("div")
        square.classList.add("square")
        square.innerHTML=startPiece
        const row = Math.floor((63-i)/8)+1
        if(row%2===0){
            square.classList.add((i%2===0)?"green":"lightgreen")
        }else{
            square.classList.add((i%2===0)?"lightgreen":"green")
        }
        board.append(square)
        square.setAttribute("square-id",i)
    })
}

createBoard()
