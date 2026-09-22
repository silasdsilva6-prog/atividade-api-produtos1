async function carregarProduto() {

    const listaProdutos = document.getElementById("lista-produtos");

    try {

        const resposta = await fetch("/api/produtos");

        if (!resposta.ok) {
            throw new Error("Erro ao buscar o produto.");
        }

        const produto = await resposta.json();

        listaProdutos.innerHTML = `
            <div class="card">

                <h2>${produto.nome}</h2>

                <p>
                    <strong>Categoria:</strong>
                    ${produto.categoria}
                </p>

                <p class="preco">
                    R$ ${produto.preco.toFixed(2).replace(".", ",")}
                </p>

            </div>
        `;

    } catch (erro) {

        console.error(erro);

        listaProdutos.innerHTML = `
            <p class="erro">
                Erro ao carregar o produto.
            </p>
        `;
    }
}

carregarProduto();