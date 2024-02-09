function checkValues(){
    var size = document.getElementById("bingoSize").value;
    if ((3<=size) && (5>=size)){
        window.open("/bingo.html")
    }else{
        alert("ingrese un tamaño entre 3 y 5")
    }
}