
let startButton = document.getElementById("startBingo")
startButton.addEventListener("click", stopReload)
startButton.addEventListener("click", saveInitialData)
startButton.addEventListener("click", generateBoards)
startButton.addEventListener("click", adjustBoards)

function stopReload(evt){
    evt.preventDefault()
}

function saveInitialData(){
    size = document.getElementById("size").value
    size = parseInt(size)

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
numberGenerator.addEventListener("click", updateBoard)

function updateTurn(){
    const randomNumber = Math.floor(Math.random() * 50) + 1;//*Funcion Importante
    var numberGenerated = document.getElementById("generated")

    numberGenerated.textContent = randomNumber

    var count = document.getElementById("count")
    var temp = parseInt(localStorage.getItem("counter")) + 1
    localStorage.setItem("counter", temp)
    count.textContent = localStorage.getItem("counter")

    if (maxTurnReached()){
        endGame()
    }
}

function generateBoards(){
    var size = localStorage.getItem("size")
    size = parseInt(size)
    for (let i=0;i<4;i++) {
        //add a h4 that has namei
        var playerName = document.getElementById("name"+(i+1));
        var temp = localStorage.getItem("name"+(i+1))
        playerName.textContent = temp;
        var currentBoard = document.getElementById("board"+(i+1))
        //add size*size divs
        for (j=0; j < size*size ;j++){
            var element = document.createElement("div")
            element.setAttribute("class", "box")
            var text = document.createTextNode(bingoNumbers[i][j])
            element.appendChild(text)
            element.setAttribute("id", ""+i+"-"+j)
            currentBoard.appendChild(element)
        }
    }
}
function adjustBoards(){
    var size = localStorage.getItem("size")
    size = parseInt(size)

    var board = document.documentElement
    board.style.setProperty("--size",""+size)
}
//parte del carrusel
const grande = document.querySelector(".grande")
const punto = document.querySelectorAll(".point")

punto.forEach((eachPoint, i) => {
    punto[i].addEventListener("click",()=>{
        let position = i
        let operation = position *(-25)
        grande.style.transform = `translateX(${operation}%)`
        punto.forEach((eachPoint, i)=>{
            punto[i].classList.remove("activo")
        })
        punto[i].classList.add("activo")
    })
});
//turns and scrore
const MAXTURN = 25
function maxTurnReached(){
    var currentTurn = localStorage.getItem("counter")
    currentTurn = parseInt(currentTurn)
    if (currentTurn == MAXTURN){
        return true
    }
}
function endGame(){
    var endGameSection = document.getElementById("endgamesection")

    var puntajeTittle = document.createElement("h5")
    var puntajeTexto = document.createTextNode("PUNTAJE")
    puntajeTittle.appendChild(puntajeTexto)
    alert(puntajeTittle)
    endGameSection.appendChild(puntajeTittle)
    puntaje = calculateScore()

    for (var i=0;i<4;i++){
        var score =  document.createElement("h6")
        var text = document.createTextNode(""+puntaje[i][0]+": "+puntaje[i][1])
        score.appendChild(text)
        endGameSection.appendChild(score)
    }
}
function calculateScore(){
    puntajes = [
        [localStorage.getItem("name1"),0],
        [localStorage.getItem("name1"),0],
        [localStorage.getItem("name1"),0],
        [localStorage.getItem("name1"),0]]
    var size = localStorage.getItem("size")
    size = parseInt(size)
    for (let i=0;i<4;i++){
        var matching = document.querySelectorAll(".match");
        //carton lleno
        if (matching.length == size*size){
            puntajes[i][1] += 5
        }
        //traer todos los numeros
            var boxes = document.querySelectorAll(".box")
        //horizontales
        var aux = 0
        for(var k=0;k<size;k++) {
            if (boxes.item(j+aux).classList.contains("match")){
            }else{
                break
            }
        }
        puntajes[i][1]+=1
        aux +=size
        //vertivales
        var aux = 0
        for (var k=0;k<size;k++){
            aux = size*k
            if (boxes.item(aux).classList.contains("match")){

            }else{
                break
            }
        }
        puntajes[i][1] += 1
        //diagonales
        var aux = 0
        startingCornes = [0,size-1]
        for (var j=0;j<size-1;j++){
            if(boxes.item(aux).classList.contains("match")){
            }else{
                break
            }
            if(j==size-2){
                puntajes[i][1] += 3
            }
            aux += size+1
        }
        aux = size-1
        for (var j=0;j<size-1;j++){
            if(boxes.item(aux).classList.contains("match")){
            }else{
                break
            }
            if(j==size-2){
                puntajes[i][1] += 3
            }
            aux += size-1
        }
        aux = 0
    }
    return puntajes
}

//numbers in bingo
var size = localStorage.getItem("size")
size = parseInt(size)
const bingo1 = generatingBingoNumbers(size*size)
const bingo2 = generatingBingoNumbers(size*size)
const bingo3 = generatingBingoNumbers(size*size)
const bingo4 = generatingBingoNumbers(size*size)
var bingoNumbers = [bingo1,bingo2,bingo3,bingo4]

function generatingBingoNumbers(n) {
    const numbers = [];
    while (numbers.length < n) {
      const randomNumber = Math.floor(Math.random() * 50) + 1;
        if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
        }
    }
    return numbers;
}
function updateBoard(){
    let size = localStorage.getItem("size")
    size = parseInt(size)

    let numberGenerated = document.getElementById('generated')

    for (let i=0; i<4; i++){
        for (let j=0;j<size*size;j++){
            if(bingoNumbers[i][j] ==  parseInt(numberGenerated.textContent)){
                var matchingNum = document.getElementById(""+i+"-"+j)
                matchingNum.classList.add("match")
            }
        }
    }
}