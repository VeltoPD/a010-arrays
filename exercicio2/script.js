const numeros = [4,50,79,88]
const strings = ["perseverança","resiliência","Determinação","Objetivo"]
const mista = ["Vitória",100,true,"Desistir",false,-100]

//Imprima a quantidade de itens de cada array
console.log(numeros.length)
console.log(strings.length)
console.log(mista.length)

/*Imprima o primeiro item do primeiro array, 
o segundo item do segundo array, e o terceiro
item do terceiro array*/
console.log(numeros[0])
console.log(strings[1])
console.log(mista[2])

/*Imprima uma informação booleana verdadeira do primeiro 
array e uma falsa do terceiro array. */
console.log(numeros.includes(88)) //Includes confere se o dado 88 esta no array numeros
console.log(mista.includes("desistir")) //desistir não se encontra no array mista






