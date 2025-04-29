/*
    INSTRUÇÕES

    Crie um algoritmo em Javascript que implemente a Busca Binária "RECURSIVA" para encontrar qualquer
    valor do vetor [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] e retorne a posição do valor encontrado.
    Se o valor não for encontrado, retorne -1.

*/


function buscaBinariaRec( vetor, valorBusca, ini = 0, fim = vetor.length -1){
    if (ini > fim) {
        return -1
    }
    
    let meio =  Math.floor((ini + fim) / 2)

    if (vetor[meio] === valorBusca){
        return meio
    }else if (vetor[meio] > valorBusca){
        return buscaBinariaRec(vetor, valorBusca, ini , meio -1)
    }else{
        return buscaBinariaRec(vetor, valorBusca, meio + 1, fim)
    }
}
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(`Posição do valor 3: ${buscaBinariaRec(nums, 3)}`)