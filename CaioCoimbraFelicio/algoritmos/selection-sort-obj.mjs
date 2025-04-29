let pass, comps, trocas

function selectionSort(vetor, fnComp){
    pass = 0, comps = 0, trocas = 0

    for(let posSel = 0; posSel < vetor.length - 1; posSel++){
        pass++

        let posMenor = posSel + 1
        for(let i = posMenor + 1; i < vetor.length; i++){
            comps++
            if(fnComp(vetor[posMenor] , vetor[i]) ){
                posMenor = i
            }
        }
        comps++
        if(fnComp(vetor[posSel] , vetor[posMenor])){
            [ vetor[posSel], vetor[posMenor] ] = [ vetor[posMenor], vetor[posSel] ]
            trocas++
        }
    }
}

import {objMotoristas} from "./data/motoristas-obj-desord.mjs"

console.time("tempo de ordenação")
selectionSort(objMotoristas, 
    (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista
)
console.timeEnd("tempo de ordenação")

console.log(objMotoristas)
console.log({pass, comps, trocas})