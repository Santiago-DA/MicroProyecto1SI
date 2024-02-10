
let startButton = document.getElementById("startBingo")
startButton.addEventListener("click", saveInitialData)

function saveInitialData(){
    size = document.getElementById("size").value
    names = Array(4)
    for (let i = 0;i<4;i++){
        names[i] = document.getElementById("playerName"+(i+1)).value
    }
    localStorage.setItem("size", size)
    localStorage.setItem("names", names)
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


