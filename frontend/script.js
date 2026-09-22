async function carregarProdutos() {
    const listaProdutos = document.getElementById("lista-produtos");

    try {
        const resposta = await fetch("/api/produtos");

        if (!resposta.ok) {
            throw new Error("Erro ao buscar os produtos.");
        }

        const produtos = await resposta.json();

        listaProdutos.innerHTML = "";

        produtos.forEach((produto) => {
            listaProdutos.innerHTML += `
                <div class="card">

                    <img
                        src="${produto.imagem}"
                        alt="Produto gamer"
                        class="produto-imagem"
                    >

                    <p class="preco">
                        R$ ${produto.preco.toFixed(2).replace(".", ",")}
                    </p>

                </div>
            `;
        });

    } catch (erro) {
        console.error(erro);

        listaProdutos.innerHTML = `
            <p class="erro">
                Erro ao carregar os produtos.
            </p>
        `;
    }
}

carregarProdutos();