function MultiplicaNumeros() {
    let n1 = 2;
    let n2 = 3;

    console.log('2 x 3 =', n1 * n2);
    // + (soma) | - (subtração)
    // * (multiplicação) | / (divisão)
    // ^ (potência) | % (resto de divisão)
}

MultiplicaNumeros();

function MultiplicaComParametros(v1, v2) {
    console.log(v1, 'x', v2, '=', v1 * v2);
}

MultiplicaComParametros(2, 2);

function EquacaoDeBurrinho(x, y, z) {
    let resultado = (x + y) / z;
    return resultado
}

console.log(EquacaoDeBurrinho(2,3,5));

const EquacaoDeTontinho = (x, y, z, w) => {
    return resultado = (x + y) * (z + w) / 2;
}

console.log('O resultado é:', EquacaoDeTontinho(3, 5, 8, 13));