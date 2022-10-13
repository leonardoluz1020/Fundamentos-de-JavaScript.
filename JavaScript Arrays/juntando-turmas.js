const salaDePython = ['Melissa', 'Helena', 'Rodrigo'];
const salaDeJavaScript = ['Ju', 'Leo', 'Raquel'];


const salasUnificadas = salaDePython.concat(salaDeJavaScript); // concatenando as constantes. usando o .concat('dentro a varivel ou constante); 
console.log(salasUnificadas);
 

/* Durante a aula usamos o método concat() para unir (concatenar) arrays gerando um novo com o resultado da concatenação. Neste caso, o método funcionou da seguinte forma: */
// array1.concat(array2)

/* Logo, o método foi utilizado com um array (no caso acima, array1) e recebeu como parâmetro outro array (array2). O resultado foi um novo array com todos os elementos de array1 e array2; isso acontece pois, quando o concat() recebe um array como parâmetro, são apenas os elementos dentro dele que são concatenados, e não o array em si. */

/* E se tentarmos usar esse método passando como parâmetro outro tipo de dado, que não seja array? Abra um arquivo index.js em seu computador e execute o seguinte código: */

/* const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")

console.log(arrayConcat)
console.log(arrayOriginal) */

/* O resultado deve ser:
 [ 'Maria', 'Carlos', 'Eduardo', 'Samanta', 'André', 'Fernanda' ]
[ 'Maria', 'Carlos', 'Eduardo', 'Samanta' ] */

/* Com o exemplo acima, vemos que o JavaScript concatena o array principal e os números passados como parâmetro para criar outro array, mantendo o original sem alterações.

Vamos fazer um novo teste, mas passando mais de um array como parâmetro.
 */

/* 
const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

console.log(arrayConcat)
console.log(arrayOriginal) */

/* Podemos passar mais de um array como parâmetro para que seus elementos sejam concatenados em um único array, junto com o que está sendo chamado com o método (no caso, arrayOriginal.

    Como um último teste, vamos ver o que acontece se um dos parâmetros for um array com dois elementos, um número e um array: */

    const arrayOriginal = [50, 60, 70]
    const arrayConcat = arrayOriginal.concat([80, [90, 100]])
    
    console.log(arrayConcat)
    console.log(arrayOriginal)    

    /* Vimos anteriormente que, quando recebe um array como parâmetro, concat() vai concatenar apenas os elementos. Porém, este método não extrai os elementos do array de forma recursiva; ou seja, não vai extrair os elementos de arrays que estejam “aninhados”. Dessa forma, 80 foi extraído do array com sucesso, porém 90 e 100 não, o método considerou [90, 100] como um único elemento. */

/*     concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original. */

