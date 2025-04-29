/*
    INSTRUÇÕES

    Crie um algoritmo em Javascript que implemente a Busca Sequencial
    "RECURSIVA" para encontrar qualquer valor do 
    vetor [10, 23, 37, 42, 55, 61, 73, 88, 95, 103, 111, 123, 134, 150, 167]
    e retorne a posição do valor encontrado. Se o valor não for encontrado,
    retorne -1.

*/
function buscaSequencialRecursiva(vetor, valorBusca, pos = 0){
    if (pos >= vetor.length) return -1

    if(vetor[pos] === valorBusca) return pos

    return buscaSequencialRecursiva(vetor, valorBusca, pos +1)
}

let vetor = [10, 23, 37, 42, 55, 61, 73, 88, 95, 103, 111, 123, 134, 150, 167];
let valorBusca = 123
let resultadoBuscaSequencial = buscaSequencialRecursiva(vetor, valorBusca)

console.log(`Resultado: Posição do elemnto/valor 123 é => ${resultadoBuscaSequencial}`) 