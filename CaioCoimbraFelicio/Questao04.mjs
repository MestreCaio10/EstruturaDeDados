/*

INSTRUÇÕES

a) Dado o algoritmo de busca sequencial abaixo, implemente uma versão que retorne o número de OCORRÊNCIAS
de um valor de busca em um vetor. O teste deve usar o arquivo da pasta "data" varios-nomes.mjs

Você buscará esses 5 nomes a seguir e a saída no terminal deverá ser idêntica a essa abaixo:

Ocorrências de ALEXANDRE: 4
Ocorrências de JOAO: 1
Ocorrências de MARIA: 2
Ocorrências de PEDRO: 3
Ocorrências de ANA: 5

*/

function buscaSequencial(vetor){
  let ana = 0
  let alexandre = 0
  let joao = 0
  let maria = 0
  let pedro = 0

  for(let i = 0; i < vetor.length; i++){
      if(vetor[i] === "ALEXANDRE") {
        alexandre = alexandre + 1
      }else if(vetor[i] === "JOAO") {
        joao = joao + 1
      }else if(vetor[i] === "MARIA") {
        maria = maria + 1
      }else if(vetor[i] === "PEDRO") {
        pedro = pedro + 1
      }else if(vetor[i] === "ANA") {
        ana = ana + 1
      }
  }
  console.log(`Ocorrências de ALEXANDRE: ${alexandre}`)
  console.log(`Ocorrências de JOAO: ${joao}`)
  console.log(`Ocorrências de MARIA: ${maria}`)
  console.log(`Ocorrências de PEDRO: ${pedro}`)
  console.log(`Ocorrências de ANA: ${ana}`)
}

import { nomes } from "./data/varios-nomes.mjs"

buscaSequencial(nomes)