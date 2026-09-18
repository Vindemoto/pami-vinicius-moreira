// Função que retorna tipos
function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}

console.log(saudacao('Vinicius'));

// Interface para objeto Usuario
interface Usuario {
    nome: string;
    idade: number;
    email?: string; // Opcional
}

// Utilizando a interface do usuário fica assim:
function exibirUsuario(usuario: Usuario): void {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
}

exibirUsuario({ nome: 'Ellen', idade: 20 });

// Exemplo de uma função que retorna arrays e tem parâmetros opcionais
function listarNomes(nomes: string[]): void {
    nomes.forEach(nomes => console.log(nomes));
}

listarNomes(['Rato', 'Mosca', 'Verme']);