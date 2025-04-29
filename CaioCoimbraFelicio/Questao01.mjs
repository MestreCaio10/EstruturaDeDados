/*
    INSTRUÇÕES

    a) Considere o vetor de produtos-desord.mjs da pasta data, faça a importação correta para a sua utilização.

    b) Utilizando os recursos estudados durante as nossas aulas, com o algoritmo da "BUSCA BINÁRIA", faça o que
    seja necessário para encontrar o produto com nome "Adaptador de tomada", retornando sua posição.
       
*/

let pass = 0, comps = 0, trocas = 0

function quickSort(vetor, fnComp, ini = 0, fim = vetor.length - 1){
    if(fim <= ini) return

    pass++

    const pivot = fim
    let div = ini - 1

    for(let i = ini; i < fim; i++){
        comps++
        if(fnComp(vetor[pivot] , vetor[i])){
            div++
            if(div !== i){
                [ vetor[i], vetor[div] ] = [  vetor[div],  vetor[i] ]
                trocas++
            }
        }
    }
    div++

    comps++
    if(fnComp(vetor[div] , vetor[pivot]) && div !== pivot){
        [ vetor[div], vetor[pivot] ] = [ vetor[pivot], vetor[div] ]
        trocas++
    }

    quickSort(vetor, fnComp, ini, div - 1)
    quickSort(vetor, fnComp, div + 1, fim)

}

import { produtos } from "./data/produtos-desord.mjs"

quickSort(produtos,(elem1, elem2) => elem1.nome > elem2.nome);



function buscaBinaria(vetor, fnComp) {
  let ini = 0;
  let fim = vetor.length - 1;

  while (fim >= ini) {


    let meio = Math.floor((ini + fim) / 2);

    switch (fnComp(vetor[meio])) {
      case 0: //Encontrado o valor de busca
    
        return meio;

      case 1: // valor de busca > valor do meio
        
        ini = meio + 1;
        break;

      default: //-1, valor de busca < valor do meio
        
        fim = meio - 1;
    }
  }
  return -1;
}

console.log(
    "Posição do produto Adaptador de tomada: ",
    buscaBinaria(produtos, (valorMeio, valorBusca = "Adaptador de tomada") => {
      if (valorBusca === valorMeio.nome) {
        return 0;
      } else if (valorBusca > valorMeio.nome) {
        return 1;
      } else {
        return -1;
      }
    })
  );