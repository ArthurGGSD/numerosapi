document.getElementById("form").onsubmit=function() {
    return false;
}

document.getElementById("btn").onclick=busca;
async function busca () {
    if (document.getElementById("numero").value=="") {
        alert("Digite um número");
        document.getElementById("numero").focus();
        return;
    } else {
        var numero = document.getElementById("numero").value;
        let retorno = await fetch("http://numbersapi.com/"+numero+"/math")
        var texto = await retorno.text();
        document.getElementById("p").innerHTML=texto;
    }
}