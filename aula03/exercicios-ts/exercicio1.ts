let produto: string = 'Mouse';
let preco: number = 59.90;
let disponivel: boolean = true;

function exibir(produto: string, preco: number, disponivel: boolean): string {
    return `Produto: ${produto} -- Preço: R$${preco.toFixed(2)} -- Disponível: ${disponivel}`;
}

console.log(exibir(produto, preco, disponivel));