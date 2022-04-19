console.log("Hello World")

// o -> <i class="fa-solid fa-circle-notch"></i>
// x -> <i class="fa-solid fa-xmark"></i>

let startingPage = document.querySelector("#startingPage");
let choose = document.querySelectorAll(".choose");

let mainPage = document.querySelector("#mainPage");
let showChange = document.querySelector("#showChange");
let boxes = document.querySelectorAll(".boxes");

let winner = document.querySelector("#winner")
let winnerName = document.querySelector("#winnerName")
let quit = document.querySelector("#quit")

let changeTurn = null;

choose.forEach(chooseNow =>{
    chooseNow.addEventListener("click", () => {
        if(chooseNow.id === "playerX") {
            changeTurn = false
            console.log(changeTurn);
            showChange.style.left = `0px`;
        }
        else {
            changeTurn = true
            console.log(changeTurn);
            showChange.style.left = `160px`;
        }
        startingPage.style.display = "none"
        mainPage.style.display = "block"
    })
});

boxes.forEach(items =>{
    items.addEventListener("click", () =>{
        if(changeTurn == false) {
            items.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
            items.id = "X"
            console.log(items.id)
            items.style.pointerEvents = "none";
            showChange.style.left = `160px`

            changeTurn = true
        }

        else {
            items.innerHTML = `<i class="fa-solid fa-circle-notch"></i>`;
            items.id = "O"
            console.log(items.id)
            items.style.pointerEvents = "none";
            showChange.style.left = `0px`

            changeTurn = false
        }
        winningFunc();
        drawFunc();
    })
})

let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let winningFunc = () => {
    for(let a = 0; a<=7; a++) {
        let b = winningCombinations[a];
        // console.log(b);

        if(boxes[b[0]].id == "" || boxes[b[1]].id == "" || boxes[b[2]].id == "") {
            continue;
        }
        else if(boxes[b[0]].id == "X" && boxes[b[1]].id == "X" && boxes[b[2]].id == "X") {
            console.log("Congradulations! Player X is the Winner.");
            winnerName.innerText = `Congradulations! Player X is the Winner!`

            mainPage.style.display = "none"
            winner.style.display = "block"
        }

        else if(boxes[b[0]].id == "O" && boxes[b[1]].id == "O" && boxes[b[2]].id == "O")  {
            console.log("Congradulations! Player O is the Winner.");
            winnerName.innerText = `Congradulations! Player O is the Winner!`

            mainPage.style.display = "none"
            winner.style.display = "block"
        }
        else {
            continue;
        }
    }
}

let drawFunc = () => {
    if(boxes[0].id != "" && boxes[1].id != "" && boxes[2].id != "" && boxes[3].id != "" &&boxes[4].id != "" && boxes[5].id != "" &&boxes[6].id != "" && boxes[7].id != "" && boxes[8].id != "") {
        console.log("Match Draw");
        winnerName.innerText = `It's a Draw!`

        mainPage.style.display = "none"
        winner.style.display = "block"
    }
}

quit.addEventListener("click", ()=> {
    window.location.reload();
})
