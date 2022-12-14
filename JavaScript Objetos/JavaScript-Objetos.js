//                                        #  JavaScript Objetos  #


const listaCpfs = ['123456798', '123456465', '123456456'] // uma array sozinha não é capaz de guardar dados necessario para um objeto

const cliente = ["nome", "André", "idade", 36]// com apenas array só podemos guardar os valores dentro


//  * Criando um Objeto Cliente *

// Uma objeto é composto por uma cadeia de chaves com valores 

//    objeto
const cliente1 = {
    //  keys:  valores    
    nome: "André",
    idade: 36,
    cpf: "1232456789",
    email: "andre@email.com"
}





// ** Formas de acessar o Objeto **



// console.log(`Meu nome é ${cliente1.nome} e tenho ${cliente1.idade} anos.`) // usando notação de ponto para acessar a chave do objeto ex:${cliente.nome}

// console.log(cliente1.cpf.substring(0,3))// usando  .substring(0,3) para mostrar apenas aguns caracteres dos valores. necessario passar os paramentros






// *** Formas de acessar uma chave sem o nome da chave no objeto ***


const chaves = ["nome", "idade", "cpf", "email"]// usando uma array com os valores escrito com os nomes da chaves do objeto cliente1

// console.log(cliente1[chaves[0]]) // usando notação de conchetes para passar os valores da variavel chaves

// obs: console.log(cliente1[chaves]) se passarmos só a chave dentro do conchete, não será possive acessar pois não existe nenhuma chave chamada chaves dentro do objeto cliente1

// obs: console.log(cliente1.chaves) se passarmos chaves usando notação de ponto, também não é possivel acessar pois chaves não é uma chave do objeto cliente1.

// chaves.forEach(info => console.log(cliente1[info]))// Usamos o forEach na array chaves para que possa acessar todo indice do array mais passando os valores, no exemplo o paramentro (info) traz de dentro da array os valores e é adicionado no console.log dentro da anotação de conchetes do cliente1[info]. dessa forma imprime todos os valores das chaves dentro do objeto cliente1

// console.log(cliente1["idade"]) // passando dentro da anotação de conchetes o nome da chave do objeto cliente1, só podemos passar desta forma quando conhecemos o objeto e sua chave mais não é viavel seu uso na programação







// **** Adicionando chaves e valores dentro do objetos ****



console.log(cliente1); // antes de passar a nova chave e valor

cliente1.fone = "123456789"; // passando com anotação de ponto uma nova chave e usando = para adicionar a essa nova chave os valores podemos criar no objeto uma nova chave com seu valor dentro do objeto.

console.log(cliente1)// depois de passar a nova chave e valor

cliente1.fone = "321654987"; // Ao passarmos um novo valor a chave criada no objeto cliente1, estamos sobreescrevendo os valores dentro da chave.

console.log(cliente1);// depois de sobrescrever o valores da chave imprindo verificamos que foi alterado os valores de .fone do cliente1






//  ***** Adicionado mais de um valor dentro da chave *****

const cliente2 = {
    //  keys:  valores    
    nome: "André",// dados do tipo estring
    idade: 36,// dados do tipo number
    cpf: "1232456789",// dados do tipo string
    email: "andre@email.com",// dados do tipo estring

    // chave fone = dados do tipo array
    fones: ["321654987", "3216549876"] // Para adicionar uma chave com valores dentro de array precisamos colocar conchetes [] depos da chave
}

cliente2.fones.forEach(fones => console.log(fones)) // usamos um metodo de array forEach para percorrer todos os valores da array fones do objeto cliente2








// ******    Adicionando objetos dentro de objetos    ******



cliente2.dependentes = { // Ao colocarmos um objeto existente e passar uma nova chave com anotação de ponto e passando para essa chave = { as novas chaves com seus valores dentro} criamos um novo objeto dentro de outro objeto
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente2); // imprimindo o objeto cliente2 com seu novo objeto dependentes



//  Como fazer alteração dentro do objeto dependentes que está dentro do objeto cliente2



cliente2.dependentes.nome = "Sara Silva"; // Para mudarmos os valores dentro da chave de um objeto dentro de outro objeto, acessamos o objeto principal e com anotação de ponto acessamos o objeto dentro do objeto e outra vez anotação de ponto para acessar a chave que desejamos alterar.

console.log(cliente2)








// ****** Adicionando um objeto novo dentro do objeto chave ex: (dependente) que é chave do objeto cliente3   ******  
// ou seja estamos colocando dentro de um objeto que é do tipo array para que possa guardar mais de um objeto.
// lembrando que cada objeto dentro da array dependente é um indice. ou seja objetos podem ser indices de uma array



const cliente3 = {
    //  keys:  valores    
    nome: "André",// dados do tipo estring
    idade: 36,// dados do tipo number
    cpf: "1232456789",// dados do tipo string
    email: "andre@email.com",// dados do tipo estring

    // chave fone = dados do tipo array
    fones: ["321654987", "3216549876"], // Para adicionar uma chave com valores dentro de array precisamos colocar conchetes [] depos da chave


    // obs: por mais que o os objs dentro seja com diversar chave, dentro do objeto dependentes cada obj é um indice.
    // exeplos: dependente:[ { indice 0},{ indice 1},{ indice 2}]. mesmo sabendo que pode ter diversas chaves dentro de cada indice que é um obj
    dependentes: [{// Trasnfomando a chave dependente em um array para que possamos colocar mais de um objeto dentro do mesmo d : [{ obj},{oObjs}]
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}


cliente3.dependentes.push({ // usamos o metodo de array .push para adicionar o novo objeto dentro da array dependente
    nome: " Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

console.log(cliente3)

// Buscando um dado dentro da array dependente  que temo outros objetos dentro


// Criamos uma const para armazenar uma array
const filhaMaisNova = cliente3.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014")// Usando o metodo de array .filter para verificar se há dentro do obj cliente3 na chave dependente que é de tipo array verificando na chave de nome dataNasc dos objetos se tem o valor "04/01/2014", se acaso tiver a const filhaMaisNova guarda todos os dados desse objeto encontrado dentro da array dependentes

console.log(filhaMaisNova)// imprimindo toda a const que contem os dados do objeto

console.log(filhaMaisNova[0].nome)// imprimindo o objeto de indice 0 porém só foi guardado na varivel esse objeto conforme o filter. Se tentar imprimir outro indice não existe e será indefinido.








// ******  Criando funções dentro dos objetos   ****** 



const cliente4 = {
    //  keys:  valores    
    nome: "André",// dados do tipo estring
    idade: 36,// dados do tipo number
    cpf: "1232456789",// dados do tipo string
    email: "andre@email.com",// dados do tipo estring

    // chave fone = dados do tipo array
    fones: ["321654987", "3216549876"], // Para adicionar uma chave com valores dentro de array precisamos colocar conchetes [] depos da chave


    // obs: por mais que o os objs dentro seja com diversar chave, dentro do objeto dependentes cada obj é um indice.
    // exeplos: dependente:[ { indice 0},{ indice 1},{ indice 2}]. mesmo sabendo que pode ter diversas chaves dentro de cada indice que é um obj
    dependentes: [{// Trasnfomando a chave dependente em um array para que possamos colocar mais de um objeto dentro do mesmo d : [{ obj},{oObjs}]
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }, {
        nome: " Samia Maria",
        parentesco: "filha",
        dataNasc: "04/01/2014"
    }],
    saldo: 100,
    depositar: function (valor) {// Usando uma sintaxis classica função() para que possamos modificar a chave saldo

        this.saldo += valor // usando uma palavra reservada this. para referi-se ao objeto

    }
}


console.log(cliente4.saldo);

cliente4.depositar(30);// Adionando valores no saldo apartir da função depositar do obj cliente4

console.log(cliente4.saldo)



//  *****  Verificando as chaves do objeto *****  
// obs: o objeto não tem indice como uma array por este motivo temos que precisamos utilizar um metodo para percorres cada chave do objeto
// obs1: Objetos é uma listas não ordenadas
// como mostrar os dados para as pessoas legitimo para leitura

// utilizando o metodo (for in) para percorrer objetos



let relatorio = "";// criamos uma variavel para guardar o reaultado do (for in)


// Usando o (for in) para percorrer o objeto e listar a cada loop sua chave no (info), assim conseguimos acessar os valores dentro da chave
for (const info in cliente4) {// usando o (for in) e acessando a chave 
    if (typeof cliente4[info] === "object" || typeof cliente4[info] === "function") {// Verificando se dentro do objetos temos outros objetos e function que não necessita demostrar para uma pessoa ler os dados, ou seja estamos filtrando o necessario
        continue// uso do continue para continuar o if 
    } else {// acaso o loop do for contem chaves com dados primitivos, guardamos em uma variavel para mostrar depois 
        relatorio += ` 
      ${info} ==> ${cliente4[info]}
      `
    }
}

console.log(typeof cliente4.depositar)// typeof mostra o tipo de dados que estão sendo armazenado na posição do objeto
console.log(typeof cliente4.dependentes)// typeof mostra o tipo de dados que estão sendo armazenado na posição do objeto
console.log(typeof cliente4.saldo)// typeof mostra o tipo de dados que estão sendo armazenado na posição do objeto
console.log(typeof cliente4.nome)// typeof mostra o tipo de dados que estão sendo armazenado na posição do objeto
console.log(relatorio)





//  *****  Extraindo lista de chaves do objeto  *****
// Podemos usar metodos de objetos para acessar chaves e valores dentro do objetos



// função que utiliza o metodo de Object.keys para verificar junto com o metodo includes se temos a chave dependente para oferecer o seguro
function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);// Object.keys(objeto) usamos para guardar em uma variavel os nomes de todas as chave dentro do objeto
    if (propsClientes.includes("dependentes")) {// metodo de array includes para verificar dentro da array a propriedade passada no seu parametro, o metodo de array retorna true ou false.
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}


console.log(Object.keys(cliente4))// usando o Object.keys(obj) conseguimos pegar as chaves e mostrar como uma array
console.log(Object.entries(cliente4))// usando o Object.entries(obj) conseguimos pegar as chaves e os valores do objeto e mostrar como array
console.log(Object.values(cliente4))// usando o Object.values(obj) conseguimos pegar os valores de cada chave dentro do objeto
oferecerSeguro(cliente4)





//  *******      Listando um objeto para mostra em uma array espalhando suas chaves e valores em uma array        *******

// podemos usar operador de espalhamento para trazer dentro do objeto as suas chaves e seus valores para guardar em um array ex: [...obj.dependentes]



const cliente5 = [{ // Quando usamos as chaves dentro e dentro os conchetes podemos dizer que temos uma array de objetos
    nome: "Lucca",
    cpf: "123456789",
    dependentes: [{
        nome: "Roblox",
        parentesco: "Jogatina",
        dataNasc: "04/06/2014"
    }]
}, {
    nome: "Ana",
    cpf: "321654987",
    dependentes: [{
        nome: "TikTik",
        parentesco: "Celular",
        dataNasc: "05/05/2015"
    }]
}, {
    nome: "Leonardo",
    cpf: "987654321",
    dependentes: [{
        nome: "Notbook",
        parentesco: "Casa",
        dataNasc: "23/07/2022"
    }]
}]



// Usando o operador de espelhamento para espalhar os valore e as chaves dentro do array
//       variavel            [reticência -> ... espalhamento]        
const listaDeDependentes = [...cliente5[0].dependentes, ...cliente5[1].dependentes, ...cliente5[2].dependentes]

// Usando o .table no console para mostrar uma tabela das chaves e seus valores
console.table(listaDeDependentes);



//   *****  JavaScript Linguagem de Prototype  *****


// quando um objeto JavaScript é criado ele tem propriedades particulares 


// JavaScript é uma linguagem prototipada devido seus objetos oculto estarem por de tras ao objetos, array e variaveis declarada. Esses objetos oculto é que auxilia em diversos metodos e funções que temos por de tras da liuguagem 



// Criando um função para objetos 


function Cliente6(nome, cpf, email, saldo) {
    this.nome = nome// Usamos a palavra this. para referenciar a instancia do objeto referido
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function (valor) {
        this.saldo += valor
    }
}

const leonardo = new Cliente6("Leonardo Luz", "321654987", "leonardoluz@email.com", 300)
console.log(leonardo)



// Criando novo prototipo objeto objeto subclasse
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente6.call(this, nome, cpf, email, saldo)// usamos o metodo .call para referenciar o objeto classe na subclasse colocando a palavra this para referenciar os paramentros do objeto mãe
    this.saldoPoup = saldoPoup
}

const ana = new ClientePoupanca("Ana", "789456123", "ana@email.com", 300, 100)
console.log(ana)


// Usamos o prototype para adicionar ao objeto clientePoupanca a funcao depositarPoup 
ClientePoupanca.prototype.depositarPoup = function (valor) {
    this.saldoPoup += this.saldoPoup
}


const vania = new ClientePoupanca("Vania", "123456798", "vania@email.com", 300, 100)
console.log(vania)

vania.depositarPoup(100)
console.log(vania)
// ana.depositarPoup(100)
// console.log(ana)



// ******      Orientação de Objetos    *****

// Abstrair ou abstração = extrair de algo apenas coisas necessarias para uso envolvido

// classes =  são modelos usados para a criação de objetos.
// Uma classe tem atributos e métodos.

// Atributos e Métodos em Orientação de Objetos. A classe define os atributos (Características) e os métodos (Comportamentos) de um objeto.

// Herança = É um mecanismo da orientação a Objetos que permite que uma classe herde características de uma outra classe.

// Objeto = É a instância de uma classe
// Um objeto é uma instância de classe em memória.


// A orientação a objetos é um modelo (estilo) de se programar
// Na orientação a objetos a idéia é transfomar coisas do mundo para o código.

/* A programação Orientada a Objetos foi incluido no JavaScript para que as pessoas que já estavam acostumada a trabalhar com essa forma de trabalha fica-se mais a vontade para trabalhar na linguagem, as formas mais comum é com objetos */

class Cliente7 {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    exibirSaldo() {
        console.log(`O saldo de ${this.nome} é de R$ ${this.saldo}`)
    }
}
const leo = new Cliente7("Leonardo", "leonardo@email", "321654987", 100)


leo.depositar(500)
console.log(leo)
leo.exibirSaldo()


//   ***** Utilizando outros metodos para manipular objetos e classes



// function imprimeNomeEmail(tipoCliente) {
//     console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
// }

// const cliente1 = {
//     nome: "Carlos",
//     email: "c@email.com"
// }

// const cliente2 = {
//     nome: "Fred",
//     email: "f@email.com"
// }


// Utilizando o metodo .call() para chamar a função imprimeEmail()


// imprimeNomeEmail.call(cliente1, "cliente especial")
// // cliente especial - nome: Carlos, email: c@email.com

// imprimeNomeEmail.call(cliente2, "cliente estudante")
// cliente estudante - nome: Fred, email: f@email.com



/* O método apply() funciona de forma muito semelhante ao call(), porém recebe os argumentos em um array ao invés de separados: */


// function imprimeNomeEmail(tipoCliente, agencia) {
//     console.log(`
//       ${tipoCliente} da agência ${agencia}:
//       - nome: ${this.nome}, email: ${this.email}
//       `)
// }

// const cliente1 = {
//     nome: "Carlos",
//     email: "c@email.com"
// }

// const cliente2 = {
//     nome: "Fred",
//     email: "f@email.com"
// }

// const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
// const clienteEstudante = ["cliente estudante", "Fortaleza"]

// imprimeNomeEmail.apply(cliente1, clienteEspecial)
// cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com

// imprimeNomeEmail.apply(cliente2, clienteEstudante)
// cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com

/* Utilize o método apply() caso você tenha um array de dados e o call() para passar valores individuais como parâmetro. Lembre-se que o array deve seguir a ordem correta dos parâmetros informado na função. */



// O método bind() “prende” ou “liga” uma função ao contexto de um objeto. Por exemplo:



// const personagem = {
//     nome: "Princesa Leia",
//     apresentar: function () {
//         return `a personagem é ${this.nome}`
//     }
// }

/* O objeto acima contém uma propriedade nome e um método apresentar que retorna um string com nome; this.nome liga a propriedade nome ao contexto do objeto em que a função está definida, ou seja, “este objeto”. */


/* const personagemGenerico = personagem.apresentar
console.log(personagemGenerico())
//a personagem é undefined */

/* Quando atribuímos apresentar() à variável personagemGenerico estamos retirando a função apresentar() do contexto do objeto na qual foi criada, e por isso this não está mais acessível; a função perdeu a referência original e não consegue mais localizar onde está this. */



/* Ressolvemos este problema com bind(): */
// const personagemDefinido = personagemGenerico.bind(personagem)
// console.log(personagemDefinido())
//a personagem é Princesa Leia


/* Acima, utilizamos o método bind() para “ligar” a função que atribuímos a personagemGenerico ao objeto personagem. Assim, sempre que esta função for executada a partir da variável personagemDefinido, a função original vai usar o objeto personagem como contexto de execução. Dessa forma, this sempre se refere ao objeto personagem e é capaz de acessar suas propriedades. */




//  *******  Criando uma Classe filha da Classe mãe POO *******


class Cliente8 {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    exibirSaldo() {
        console.log(`O saldo de ${this.nome} é de R$ ${this.saldo}`)
    }
}


class Cliente8Poupanca extends Cliente8 {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPoupanca(valor) {
        this.saldoPoupanca += valor
    }
}

const lucca = new Cliente8Poupanca('Lucca', 'l@email', '123456789', 300, 100)


console.log(lucca)

// Usando o prototype para adicionar o metodo sacarPoupanca
Cliente8Poupanca.prototype.sacarPoupanca = function (valor) {
    this.saldoPoupanca -= valor
}
lucca.sacarPoupanca(100)
lucca.depositar(100)
console.log(lucca) 