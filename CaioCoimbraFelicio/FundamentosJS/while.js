function inteiroAleatorio(num){
    const valor = Math.random() * num
    return Math.floor(valor)
}

let opcao = 0

while(opcao != 13){
    opcao = inteiroAleatorio(15)
    console.log(`Opção escolhida foi ${opcao}`)
}
