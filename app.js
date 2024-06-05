let boxes = document.querySelectorAll(".boxes")
let Turn = "X"
let reset = document.querySelector("#reset")
let showTurn = document.querySelector(".turn")
let allText = document.querySelectorAll(".text")
let winnerText = document.querySelector("#winner")
let WinBanner = document.querySelector(".winnerBanner")
let gameOver = false



showTurn.innerText = Turn
const changeTurn = ()=>{
    return (Turn=== "X")? "0":"X"
}

const isWin = () =>{
    console.log("coming here")
    let winnigCombination =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    winnigCombination.forEach((com)=>{
    if((allText[com[0]].innerText === allText[com[1]].innerText) &&(allText[com[1]].innerText=== allText[com[2]].innerText) && (allText[com[0]].innerText !== "")){
        winnerText.classList.add("hide")
        WinBanner.classList.remove("hide")
        WinBanner.innerText = `${allText[com[0]].innerText} won`
        gameOver =true
        boxes[com[0]].classList.add("win")
        boxes[com[1]].classList.add("win")
        boxes[com[2]].classList.add("win")
        
    }
    
   
    })
}




boxes.forEach((elem)=>{
    let text = elem.querySelector(".text")
    elem.addEventListener("click", ()=>{
        if(!gameOver && text.innerText === ""){
            text.innerText = Turn
        Turn = changeTurn()
        showTurn.innerText = Turn
        isWin()
        }
        
    })
})

// RESET BUTTON LOGIC
reset.addEventListener("click", ()=>{
    winnerText.classList.remove("hide")
        WinBanner.classList.add("hide")
    document.querySelectorAll(".text").forEach((elem)=> elem.innerText = "")
    gameOver = false
    boxes.forEach((elem)=>{
        elem.classList.remove("win")
    })
})