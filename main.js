const numeroSenha = document.querySelector(".parametro-senha__texto")
const campoSenha =  document.querySelector("#campo-senha")

campoSenha.value = "Aqui vai aparecer a senha."
// OPEN IN WEBVIEW
let letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//minusculas, numeros e simbolos

tamanhoSenha = 8
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll(".parametro-senha__botao")
//pega o 1 botão = - 
botoes [0].onclick = diminuir;

// função diminuir 
function diminuir(){
        //diminui de 1 em 1 e costra na na tela 
        tamanhoSenha--;
        numeroSenha.textContent = tamanhoSenha;
        gerasenha()
}

// BOTÃO DE AUMENTAR 


//FUNÇÂO DE CRIAR A SENHA ALEATÒRIA
gerasenha()
 
function gerasenha(){
        let senha = ''
        // LOOP - Repetições
        for (let i = 0; < tamanhoSenha; i++){
            let numeroAleatório = Math.random() * 26;
            numeroAleatório = Math.floor(numeroAleatório)
            senha = senha + let letrasMaiusculas[numeroAleatório]
        }
        campoSenha.value = senha;
}