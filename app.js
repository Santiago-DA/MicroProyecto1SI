
let startButton = document.getElementById("startBingo")
startButton.addEventListener("click", saveInitialData)
startButton.addEventListener("click", stopReload)
startButton.addEventListener("click", generateBoards)

function stopReload(evt){
    evt.preventDefault()
}

function saveInitialData(){
    size = document.getElementById("size").value
    size = parseInt(size)

    //TODO redo this
    name1 = document.getElementById("playerName"+1).value
    name2 = document.getElementById("playerName"+2).value
    name3 = document.getElementById("playerName"+3).value
    name4 = document.getElementById("playerName"+4).value
    localStorage.setItem("size", size)
    localStorage.setItem("name1", name1)
    localStorage.setItem("name2", name2)
    localStorage.setItem("name3", name3)
    localStorage.setItem("name4", name4)

    resetCounter()
}
function resetCounter(){
    localStorage.setItem("counter", 0)
    var count = document.getElementById("count")
    count.textContent = localStorage.getItem("counter")
}

var numberGenerator = document.getElementById("numberGen")
numberGenerator.addEventListener("click", updateTurn)

function updateTurn(){
    const randomNumber = Math.floor(Math.random() * 50) + 1;
    var numberGenerated = document.getElementById("numberGenerated")
    numberGenerated.textContent = randomNumber

    var count = document.getElementById("count")
    var temp = parseInt(localStorage.getItem("counter")) + 1
    localStorage.setItem("counter", temp)
    count.textContent = localStorage.getItem("counter")
}

function generateBoards(){
    var size = localStorage.getItem("size")
    size = parseInt(size)
    for (let i=0;i<4;i++) {
        //add a h4 that has namei
        var playerName = document.getElementById("name"+(i+1));
        var temp = localStorage.getItem("name"+(i+1))
        playerName.textContent = temp;
        //add size*size divs
        var currentBoard = document.getElementById("board"+(i+1))
        alert(currentBoardBoard)
        for (j=0; j < size*size ;j++){
            var element = document.createElement("div")
            var text = document.createTextNode("Example")
            element.appendChild(text)
            //currentBoard.appendChild(element)
        }
        alert(element.innerHTML)
        //add all to the div that i search

    }
}
