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
    fetch("versiculos_1000.json")
        .then(res => res.json())
        .then(versiculos => {
            const index = Math.floor(Math.random() * versiculos.length);
            const versiculoSelecionado = versiculos[index]; // Pega o objeto completo do versículo

            // Verifica se o objeto do versículo tem todos os campos esperados
            if (versiculoSelecionado && typeof versiculoSelecionado === 'object' &&
                versiculoSelecionado.text && versiculoSelecionado.book &&
                versiculoSelecionado.chapter !== undefined && versiculoSelecionado.verse !== undefined) {

                // Constrói a string da referência do versículo (ex: "João 3:16")
                const referencia = `${versiculoSelecionado.book} ${versiculoSelecionado.chapter}:${versiculoSelecionado.verse}`;

                // Atualiza o conteúdo da div com o texto do versículo e a referência
                versiculoDiv.textContent = `${versiculoSelecionado.text} - ${referencia}`;

            } else {
                // Caso o formato do versículo no JSON não seja o esperado (ex: falta 'book', 'chapter', 'verse')
                versiculoDiv.textContent = "Erro: Formato de versículo inválido no JSON. Verifique se 'text', 'book', 'chapter' e 'verse' existem.";
            }
        })
        .catch((error) => {
            // Captura e exibe erros que podem ocorrer durante o fetch ou processamento do JSON
            console.error("Erro ao carregar versículos:", error); // Isso é útil para depurar no console do navegador
            versiculoDiv.textContent = "Erro ao carregar versículos. Tente novamente mais tarde.";
        });
})