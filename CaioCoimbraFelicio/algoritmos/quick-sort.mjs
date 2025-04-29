let pass = 0, comps = 0, trocas = 0

function quickSort(vetor, ini = 0, fim = vetor.length - 1){
    if(fim <= ini) return

    pass++

    const pivot = fim
    let div = ini - 1

    for(let i = ini; i < fim; i++){
        comps++
        if(vetor[pivot] > vetor[i]){
            div++
            if(div !== i){
                [ vetor[i], vetor[div] ] = [  vetor[div],  vetor[i] ]
                trocas++
            }
        }
    }
    div++

    comps++
    if(vetor[div] > vetor[pivot] && div !== pivot){
        [ vetor[div], vetor[pivot] ] = [ vetor[pivot], vetor[div] ]
        trocas++
    }

    quickSort(vetor, ini, div - 1)
    quickSort(vetor, div + 1, fim)

}

// let nums = [2, 5, 7, 1, 6, 3, 4]

// quickSort(nums)
// let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
// console.log(nums)
// console.log({pass, comps, trocas, memoriaMB})

import { nomes } from "./data/nomes-desord.mjs"

console.time("Tempo de ordenação")
quickSort(nomes)
let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd("Tempo de ordenação")

console.log(nomes)
console.log({pass, comps, trocas, memoriaMB})