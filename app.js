
function genereteBoard(){
    var size = document.getElementById("bingoSize");
    console.log(size)
    //var size =  parseInt(size);
    //crear el array de la tabla del bingo
    size = 3
    for (i=0;i<size*size;i++){
        var tag = document.createElement("p")
        var text = document.createTextNode("TEXT");//TODO generete numbers here
        tag.append(text);
        var element = document.getElementById('bingoBoard');
        element.appendChild(tag)
    }
}
function checkValues(){
    var size = document.getElementById("bingoSize").value;
    if ((3<=size) && (5>=size)){
        window.open("/bingo.html")
    }else{
        alert("ingrese un tamaño entre 3 y 5")
    }
}





