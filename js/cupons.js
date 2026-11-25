function Dica(){
    alert("Drika")
}

function Confirmar(){
    let resposta = document.getElementById("nome").value

    if(resposta != "Drika" && resposta != "drika" && resposta != "DRIKA"){
        alert("Desconto negado!!!")
    }

    else{
        alert("Desconto aceito!!!")
    }
    document.getElementById("nome").value = ""
}