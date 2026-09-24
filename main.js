const numeroSenha = document.querySelector(".parametro-senha__texto")
const campoSenha =  document.querySelector("#campo-senha")

const forcaSenha = document.querySelector(".forca")


campoSenha.value = "Aqui vai aparecer a senha."
// OPEN IN WEBVIEW
let letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//minusculas, numeros e simbolos

tamanhoSenha = 8
numeroSenha.textContent = tamanhoSenha;


const checkbox = document.querySelectorAll(".checkbox")

for(let i = 0; i <  checkbox.lenght; i++){
        checkbox[i].onclick = gerasenha;
}

// checkbox[0] = maiusculas 
// checkbox[1] = minusculas
// checkbox[2] = numeros
// checkbox[3] = símbolos


const botoes = document.querySelectorAll(".parametro-senha__botao")
//pega o 1 botão = - 
botoes [0].onclick = diminuir;

// função diminuir 
function diminuir(){
        //diminui de 1 em 1 e costra na na tela
        
        if(tamanhoSenha > 0){
             tamanhoSenha--;
        numeroSenha.textContent = tamanhoSenha;
        gerasenha()   
       
}
 


        
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
        classificarSenha()
}


// Função para classificar a senha
function classificarSenha(){

    forcaSenha.classList.remove('forte,'media, fraca, )
   
   if(tamanhoSenha > 11){

                }else iftamanhoSenha < 7
        forcaSenha.classList.add('media')
 {else}
  forcaSenha.classList.add('media')
}