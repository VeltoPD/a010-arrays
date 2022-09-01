const numeros = [4,50,79,88]
const strings = ["perseverança","resiliência","Determinação","Objetivo"]
const mista = ["Vitória",100,true,"Desistir",false,-100]
//As variáveis compostas dos exercícios anteriores se repetem aqui.

const numerosCopia = numeros.slice()
const stringsCopia = strings.slice()
const mistaCopia = mista.slice()
/*Cada variável é copiada usando o método slice, que deixa a cópia 
desvinculada da original. Ou seja, uma alteração na cópia não irá 
alterar a original*/
 
numerosCopia.push(122) //Adicione um number 
stringsCopia.pop() //Remova o último item 
mistaCopia.splice(1,1) //Remova o segundo item  

console.log(numeros, numerosCopia)
console.log(strings, stringsCopia)
console.log(mista, mistaCopia)


