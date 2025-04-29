let comps = 0, div = 0, jun = 0

function mergeSort(vetor){
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
    vetEsq = mergeSort(vetEsq)
    vetDir = mergeSort(vetDir)

    //mesclagem ordenada de vetEsq com vetDir
    let posEsq = 0, posDir = 0, vetRes = []

    while(posEsq < vetEsq.length && posDir < vetDir.length){
        //o menor elemento é o do vetor esquerdo
        comps++
        if(vetEsq[posEsq] < vetDir[posDir]){
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

import { nomes } from "../data/nomes-desord.mjs"

const nomesOrd = mergeSort(nomes)

console.log(nomesOrd)