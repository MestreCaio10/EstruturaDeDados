const resultado = function(nota){
    switch (Math.floor(nota)){
        case 10: case 9:
            console.log("Aprovado com nota TOP")
            break

        case 8: case 7: case 6:
            console.log("Aprovado com nota razoável")
            break
        
        case 5: case 4:
            console.log("Recuperação")
            break
        
        case 3: case 2: case 1:
            console.log("Substitutiva")
            break
        
        case 0:
            console.log("Reprovado")
            break
        
        default:
            console.log("Nota inválida")
    }
}

resultado(9.8)