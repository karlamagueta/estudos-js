function livro (nome, ano, autor) {
    resultado_livro = {
        nome_upper: nome.toUpperCase(),
        ano: 2023 - ano,
        frase: nome + ' por ' + autor,
    }
    return resultado_livro;
}

resultado = livro ('O Senhor dos Aneis', 1984, 'J R R Tolkien')
console.log (resultado)

/* function checkout(produto, quantidade) {
    const total = produto.preco * quantidade;
    return total;
}

const celular = {
    preco: 1000,
}

total = checkout(celular, 2);
console.log(total)
 */

