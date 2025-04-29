let comps = 0, div = 0, jun = 0;

function mergeSort(vetor) {
    console.log(`📥 Entrada do mergeSort: [${vetor.join(', ')}]`);

    if (vetor.length < 2) {
        console.log(`🔙 Retornando vetor unitário ou vazio: [${vetor.join(', ')}]`);
        return vetor;
    }

    let meio = Math.floor(vetor.length / 2);
    let vetEsq = vetor.slice(0, meio);
    let vetDir = vetor.slice(meio);

    div++;
    console.log(`✂️ Divisão #${div}:`);
    console.log(`   ↪️ vetEsq: [${vetEsq.join(', ')}]`);
    console.log(`   ↪️ vetDir: [${vetDir.join(', ')}]`);

    vetEsq = mergeSort(vetEsq);
    vetDir = mergeSort(vetDir);

    let posEsq = 0, posDir = 0, vetRes = [];

    console.log(`🔀 Mesclando vetEsq: [${vetEsq.join(', ')}] com vetDir: [${vetDir.join(', ')}]`);

    while (posEsq < vetEsq.length && posDir < vetDir.length) {
        comps++;
        console.log(`   🆚 Comparação #${comps}: ${vetEsq[posEsq]} (posEsq=${posEsq}) vs ${vetDir[posDir]} (posDir=${posDir})`);

        if (vetEsq[posEsq] < vetDir[posDir]) {
            vetRes.push(vetEsq[posEsq]);
            console.log(`     ✅ ${vetEsq[posEsq]} é menor → vetRes: [${vetRes.join(', ')}]`);
            posEsq++;
        } else {
            vetRes.push(vetDir[posDir]);
            console.log(`     ✅ ${vetDir[posDir]} é menor → vetRes: [${vetRes.join(', ')}]`);
            posDir++;
        }
    }

    let sobra;
    if (posEsq < vetEsq.length) {
        sobra = vetEsq.slice(posEsq);
        console.log(`📌 Sobra à esquerda (posEsq=${posEsq}): [${sobra.join(', ')}]`);
    } else {
        sobra = vetDir.slice(posDir);
        console.log(`📌 Sobra à direita (posDir=${posDir}): [${sobra.join(', ')}]`);
    }

    jun++;
    let resultado = [...vetRes, ...sobra];
    console.log(`🔗 Junção #${jun}: Resultado parcial: [${resultado.join(', ')}]\n`);

    return resultado;
}

let nums = [77, 44, 22, 33];
let numsOrd = mergeSort(nums);

console.log("✅ Resultado final:");
console.log({ numsOrd });
console.log({ comps, div, jun });
