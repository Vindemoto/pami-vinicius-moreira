interface Livro {
    titulo: string;
    autor: string;
    anoPubli: number;
}

function exibirLivro(livro: Livro): void {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de Publicação: ${livro.anoPubli}`);
}

exibirLivro({ titulo: 'Springcat', autor: 'Scrat Cheeseton', anoPubli: 2007 });