
var area = document.getElementById("acessar");
// Função BEM VINDO------------------------------------------------------------------------------------------
function entrar() {
    var nome = prompt("Digite seu nome");

    if(nome=="" || nome==null){
        alert("Por favor preencher todos os campos");
        area.innerHTML = "Click no botão para acessar: "
    }else {
        area.innerHTML = "Bem Vindo " + nome + "<br>"
    }
}