// Obtém o elemento de entrada de texto com o ID "nome" e o armazena na variável inputNome
const inputNome = document.getElementById("nome");

// Adiciona um ouvinte de eventos para a tecla pressionada no campo de entrada de texto
inputNome.addEventListener("keydown", function(event) {
  // Verifica se a tecla pressionada é "Enter" (a tecla Return) ou se o código da tecla é 13
  if (event.key === "Enter" || event.keyCode === 13) {
    // Chama a função processarNome() se a tecla "Enter" for pressionada
    processarNome();
  }
});

// Define a função processarNome() que é chamada quando a tecla "Enter" é pressionada ou quando o botão é clicado
function processarNome() {
    // Obtém o valor do campo de entrada de texto
    let nome = inputNome.value;

    // Remove espaços em branco no início e no final e converte o texto em letras minúsculas
    nome = nome.trim().toLowerCase();

    // Remove acentos do nome
    nome = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // Remove espaços em branco no meio do nome
    nome = nome.replace(/\s/g, '');

    // Obtém a div com o ID "nomeDiv"
    let divNome = document.getElementById("nomeDiv");

    // Adiciona a classe "img" à div para aplicar estilos específicos
    divNome.classList.add("img");

    // Define a imagem de fundo com base no nome processado
    divNome.style.backgroundImage = `url('../fotos/${nome}.png')`;

    // Exibe a div no console do navegador para fins de depuração
    console.log(divNome);
}