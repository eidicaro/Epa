function processarNome() {

    let nome = document.getElementById("nome").value;

    nome = nome.trim().toLowerCase();

    nome = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    let divNome = document.getElementById("nomeDiv");
    divNome.classList.add("img")
    divNome.style.backgroundImage = `url('../imagens/${nome}.png')`;
    console.log(divNome)
}