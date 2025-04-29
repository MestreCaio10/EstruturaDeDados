let comps;

function buscaBinaria(vetor, fnComp) {
  comps = 0;
  let ini = 0;
  let fim = vetor.length - 1;

  while (fim >= ini) {
    comps++;

    let meio = Math.floor((ini + fim) / 2);

    switch (fnComp(vetor[meio])) {
      case 0: //Encontrado o valor de busca
        comps++;
        return meio;

      case 1: // valor de busca > valor do meio
        comps += 2;
        ini = meio + 1;
        break;

      default: //-1, valor de busca < valor do meio
        comps += 2;
        fim = meio - 1;
    }
  }
  return -1;
}

// function compararFn(valorMeio, valorBusca = "ALEXANDRE"){
//     if(valorBusca === valorMeio.first_name){
//         return 0
//     } else if(valorBusca > valorMeio.first_name){
//         return 1
//     } else {
//         return -1
//     }
// }

import {objNomes} from './data/vetor-obj-nomes.mjs'

// console.log(`Posição de ALEXANDRE no FN: ${buscaBinaria(objNomes, compararFn)}, comps: ${comps}`)
// console.log(`Posição de AABRAO no FN: ${buscaBinaria(objNomes, compararGn)}, comps: ${comps}`)

console.log(
  "Posiação de first_name === ALEXANDRE",
  buscaBinaria(objNomes, (valorMeio, valorBusca = "ALEXANDRE") => {
    if (valorBusca === valorMeio.first_name) {
      return 0;
    } else if (valorBusca > valorMeio.first_name) {
      return 1;
    } else {
      return -1;
    }
  })
);
