/*Fatorial de um número natural é igual a ele próprio
multiplicado por todos os seus antecessores.

5! = 5 * 4 * 3 * 2 * 1 (120)
4! = 4 * 3 * 2 * 1 (24)
3! = 3 * 2 * 1 (6)
2! = 2 * 1 (2)

Casos especiais
1! = 1
0! = 1
*/

function fatorial(n){
    let res = 1
    for(let i = n; i > 1; i--){
        res = res * i
    }
    return res
}

// console.log("Fatorial de 10: ", fatorial(10))

function fatorialRec(n){
    if(n <= 1) return 1
    return n * fatorialRec(n-1)
}
console.log("Fatorial de Recursivo 5: ", fatorialRec(5))
