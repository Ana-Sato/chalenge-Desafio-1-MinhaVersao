const textInput = document.querySelector("#msg");
const outInput = document.querySelector("#container__mensagem");


function criptografar() {

  let texto = textInput.value;

  let resultCripto = texto.replace("e", "enter")
                          .replace("i", "imes")
                          .replace("a", "ai")
                          .replace("o", "ober")
                          .replace("u", "ufat");

  document.getElementById('container__mensagem').innerHTML = '<text-area readonly id="msgCripto">' + resultCripto + 
  '</text-area>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'

 outInput.classList.add('auto-height'); 
}

function descriptografar() {

    let texto = textInput.value;

    let resultDescripto = texto.replace("enter", "e")
                                .replace("imes", "i")
                                .replace("ai", "a")
                                .replace("ober", "o")
                                .replace("ufat", "u");
  
    document.getElementById('container__mensagem').innerHTML = '<text-area readonly id="msgCripto">' + resultDescripto + 
        '</text-area>' + '<button class="btn-copiar" id="btn-descripto" onclick="copiar()">Copiar</button>';

   outInput.classList.add('auto-height');
}

function copiar() {
  let textoCop = document.getElementById('msgCripto').textContent;

  let inputTemporario = document.createElement("textarea");
  inputTemporario.value = textoCop;
  document.body.appendChild(inputTemporario);

  inputTemporario.select();
  document.execCommand('copy');
  document.body.removeChild(inputTemporario);

  alert("Texto copiado!");
}