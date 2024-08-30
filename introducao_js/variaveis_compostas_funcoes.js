// Declara um array
const notas = [9, 8.5, 7, "10", false];

notas[4] = true;

/**
 * Comentário de bloco
 */
console.log(notas);

// Verifica a quantidade de elementos do array
console.log(notas.length);

// Laço de repetição para percorrer o array
for(let i = 0; i < notas.length; i++){

        // estrutura de controle - condição
       if(typeof notas[i] == 'number'){
            if(notas[i] >= 7){
                console.log("Aprovado.");
            }
            else{
                console.log("Reprovado.");
            }
       }
       else {
            console.log("Nota inválida.");
       }

}

/* Declaração de matriz 3x3
    2 1 0
    0 1 0
    1 2 1
*/
let A = [
    [2, 1, 0],
    [0, 1, 0],
    [1, 2, 1]
];

console.log(A[2][2]);

let capitais = {
    DF: 'Brasília',
    DF_DDD: 61,
    BA: 'Salvador',
    BA_DDD: 71,
    RJ: 'Rio de Janeiro',
    RJ_DDD: 21
};

console.log(capitais.DF);

// Percorre o objeto chave a chave
for (const key in capitais) {
    const valor = capitais[key];
    console.log(key + ' - ' + valor);
}

/**
 * verifica se um número é par
 * @param {integer} n 
 * @returns {boolean}
 */
function verificarNumeroPar(n){
    if(n % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(verificarNumeroPar(2));
console.log(verificarNumeroPar(3));