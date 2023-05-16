
var area = document.getElementById("acessar");

var nomeCadastro = "Denilson Araujo";

function entrar() {
    var nome = prompt("Digite seu nome");
    if(nome == nomeCadastro){
        area.innerHTML = "Bem Vindo " + nome + "<br>";
        let botao = document.getElementById('botaoAcessar');
        botao.style.display = "none";

        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);

    }else {
        alert("Nome não localizado no cadastro, por favor realizar cadastro");
        area.innerHTML = "Click no botão para acessar novamente: ";
    }
}

function sair(){
    alert("Até mais!");
    area.innerHTML = "Você Saiu!";
    let botao = document.getElementById('botaoAcessar');
    botao.style.display = "";
}



// Script do professor___________________________________________________________________________________

// let area = document.getElementById('area');
// let botao = document.getElementById("botao");
// nomeCadastro = "Antonio César";
// function entrar() {
//     let nome = prompt("Digite o seu nome");

//     if (nome === '' || nome === null) {
//         alert("Ops, algo deu errado!!!");
//         area.innerHTML = "Clique no botão para acessar";
//     } else {
//         if (nomeCadastro == nome) {
//             area.innerHTML = "Bem vindo " + nome + "<br>";
//             let botaoSair = document.createElement("button");
//             botaoSair.innerText = "Sair da conta";
//             botaoSair.onclick = sair;
//             area.appendChild(botaoSair);
//             botao.setAttribute("hidden","true");
//         }else{
//             alert("Nome não cadatrado, favor realizar cadastro!")
//         }
//     }
// }

// function sair() {
//     alert("Até mais!");
//     area.innerHTML = "Você saiu"
//     botao.removeAttribute("hidden","false");
// }

