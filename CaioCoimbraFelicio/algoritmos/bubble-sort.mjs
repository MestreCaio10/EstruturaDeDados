let pass, comps, trocas

function bubbleSort(vetor){

    let trocou
    pass = 0, comps = 0, trocas = 0

    do {
        trocou = false
        pass++
        for(let i = 0; i < vetor.length - 1; i++){
            comps++
            if(vetor[i] > vetor[i+1]){
                [ vetor[i], vetor[i+1]  ] = [ vetor[i+1], vetor[i] ]
                trocou = true
                trocas++
            }
        }

    } while(trocou)
}

// let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]

// bubbleSort(nums)
// console.log(nums)

import {nomes} from "./data/nomes-desord.mjs"

console.time("tempo de ordenação")
bubbleSort(nomes)
console.timeEnd("tempo de ordenação")

console.log(nomes)
console.log({pass, comps, trocas})