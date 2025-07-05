const botaoTema = document.getElementById("btn-tema");
const botaoNovo = document.getElementById("novo-verciculo");
const versiculoDiv = document.getElementById("versiculo");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        botaoTema.textContent = "☀️ Modo Claro";
    } else {
        botaoTema.textContent = "🌙 Modo Escuro";
    }
});

botaoNovo.addEventListener("click", () => {
    fetch("versiculos.json")
        .then(res => res.json())
        .then(versiculos => {
            const index = Math.floor(Math.random() * versiculos.length);
            versiculoDiv.textContent = versiculos[index];
        })
        .catch(() =>{
            versiculoDiv.textContent = "Erro ao carregar versículos.";
        })
})