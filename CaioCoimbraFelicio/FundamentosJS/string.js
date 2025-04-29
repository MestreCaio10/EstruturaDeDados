const facul = "FATEC"
var a, b, c, d, e

a = facul.charAt(0)
b = facul.charAt(1)
c = facul.charAt(2)
d = facul.charAt(3)
e = facul.charAt(4)

console.log(a+b+c+d+e)
console.log(a,b,c,d,e)

console.log(facul.charAt(4))
console.log(facul.charCodeAt(0))
console.log(facul.indexOf("C"))
console.log(facul.substring(1,3))
console.log("Faculdade ".concat(facul).concat("!!!"))
console.log(facul.replace("F", 3))
console.log("Alexandre,Joao,Pedro".split(","))

const nomes = ["alexandre","joao","maria","fulano","ciclano"]
console.log(nomes.slice(1,3)) 