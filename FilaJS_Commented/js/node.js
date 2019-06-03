//Criação da classe Node
class Node{ 
    //Criando o construtor da classe que recebe o parâmetro element, que será o elemento enviado
    constructor(element){
    //Criando a variável de instância next, iniciamente recebendo null
    this.next = null;
    //Criando a variável de instância content, que receberá o elemento novo do nó
    this.content = element;
    }
}