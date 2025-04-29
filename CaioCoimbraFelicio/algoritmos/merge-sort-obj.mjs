let comps = 0, div = 0, jun = 0

function mergeSort(vetor, fnComp){
    //para ser divido, um vetor precisa ter pelo menos 2 elementos
    if(vetor.length < 2) return vetor
    
    //achar o meio (aproximado) do vetor
    let meio = Math.floor(vetor.length / 2)

    /*slice() divide um vetor da primeira posição informada (inclusive)
    até a última posição informada (exclusive) */ 
    let vetEsq = vetor.slice(0, meio)

    /*quando o segundo parâmetro de slice() é omitido, a fatia vai
    da posição informada (inclusive) até o final do vetor */
    let vetDir = vetor.slice(meio)

    //quantas divisões foram feitas
    div++ 
   
    //chamadas recursivas ao mergeSort
    vetEsq = mergeSort(vetEsq, fnComp)
    vetDir = mergeSort(vetDir, fnComp)

    //mesclagem ordenada de vetEsq com vetDir
    let posEsq = 0, posDir = 0, vetRes = []

    while(posEsq < vetEsq.length && posDir < vetDir.length){
        //o menor elemento é o do vetor esquerdo
        comps++
        if(fnComp(vetEsq[posEsq] , vetDir[posDir])){
            vetRes.push(vetEsq[posEsq])
            posEsq++
        }else{
            vetRes.push(vetDir[posDir])
            posDir++
        }
    }

    //Determinar qual dos vetores tem sobra
    let sobra

    //sobra à esquerda
    if(posEsq < posDir){
    //copia para a sobra todos os elementos a partir de posEsq até o fim de vetEsq
        sobra = vetEsq.slice(posEsq)  
    }
    //sobra à direita
    else{
    //copia para a sobra todos os elementos a partir de posEsq até o fim de vetEsq
    sobra = vetDir.slice(posDir)
    }

    //o vetor final ordenado será a concatenação de vetRes + sobra
    jun++
    return[...vetRes,...sobra]

}

import { objMotoristas } from "./data/motoristas-obj-desord.mjs"

console.time("Tempo de ordenação")
let objMotoristasOrd = mergeSort(objMotoristas,
     (elem1, elem2) => elem1.nome_motorista < elem2.nome_motorista)
let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd("Tempo de ordenação")

// console.time("Tempo de ordenação")
// let objMotoristasOrd = mergeSort(objMotoristas,
//      (elem1, elem2) => elem1.nome_motorista.localeCompare(elem2.nome_motorista, "pt-br") <= 0)
// let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
// console.timeEnd("Tempo de ordenação")

// console.time("Tempo de ordenação")
// let objMotoristasOrd = mergeSort(
//     objMotoristas, (elem1, elem2) => {
//         if(elem1.razao_social === elem2.razao_social){
//             return elem1.nome_motorista < elem2.nome_motorista
//         }else{
//             return elem1.razao_social < elem2.razao_social
//         }
//     }
// )
// let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
// console.timeEnd("Tempo de ordenação")

console.log(objMotoristasOrd)
console.log({comps, div, jun, memoriaMB})