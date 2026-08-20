const numeroSenha = document.querySelector(".parametro-senha__texto")
numeroSenha.textContent = 5;

tamanhoSenha = 8
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll(".parametro-senha__botao")

botoes [0].onclick = diminuir;

function diminuir(){
        tamanhoSenha--;
        numeroSenha.textContent = tamanhoSenha;
    
}

    
