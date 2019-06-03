class ArrayList {
    //O array ele tem os métodos então não precisa percorrer igual a lista porque ele é indexado
    constructor() { //Criação do construtor
        //Criação do Array
        this.data = [];
    }
    //Método criado passando o separador que será usado no método join do array, para separar os dados
    show(separator = ', ') {
        return this.data.join(separator); //Utilizando o join para juntar os dados do array de acordo com o separator
    }
    //Insere na última posição da lista
    append(element) {
        this.data.push(element);//Utilizando o método push do array, para inserir o elemento passado por argumentos
    }
    //Insere na posição desejada
    insert(position, element) {
        if (position > -1 && position <= this.size())/*Comparando se a posição digitada está na faixa aceita: 
        posição maior ou igual a -1 E posição menor ou igual ao tamanho do array*/
            this.data.splice(position, 0, element);/*Utilizando o método splice para adicionar o elemento, 
            na posição especificada, não excluindo nenhum, e adicionado o elemento passado nos argumentos*/
    }

    //Remove na posição desejada
    removeAt(position) {
        /*Comparando se a posição passada é maior que -1 e menor que o
        array, pois só pode ser removido na faixa de valores existentes no array de 0 ao tamanho do array*/
        if (position > -1 && position < this.size())
            /*Passando a posição e a quantidade de elementos que serão removidos
            , para o método splice.*/
            this.data.splice(position, 1);
    }
    //Remove o elemento
    remove(element) {
        //Recebendo o índice retornado através do elemento passado, para o método indexOf
        let index = this.indexOf(element);
        //Utilizando o método removeAt() criado na classe, que remove o elemento através do índice
        this.removeAt(index);
    }
    //Procura qual o índice do elemento
    indexOf(element) {
        //Utilizando um loopin para encontrar o índice do elemento
        for (let index = 0; index < this.data.length; index++) {
            //A cada iteração será comparado se o valor que passado é igual ao a posição atual do array
            if (element === this.data[index]) {
                //Caso retorne true, será mostrado o índice encontrado
                return index;
            }
        }
        //Caso contrario, se não encontrar, retornará -1, significando que o índice não foi encontrado
        return -1;
    }

    //Verifica se o array está vazio
    isEmpty() {
        /*
        Compara se o array está vázio, se retornar true significa que ele tem o tamanho igual a 0,
        caso contrário retorna false, significando que ele está preenchido.
        */
        return this.size() === 0;
    }

    //Retorna o tamanho do array
    size() {
        return this.data.length;
    }

    //Pesquisa o elemento da posição especificada
    getElement(position) {
        /*Verifica se a posição passada está no meio aceitado, 
        sendo maior ou igual a zero e menor que a posição final do array.*/
        if (position >= 0 && position < this.size()){
            //Retorna o elemento presente na posição
            return this.data[position];
        }
        //Caso não encontre o elemento retorna null, significando que o mesmo não existe
        return null;
    }
    //Pesquisa se o valor existe
    search(value) {
        //Percorre o array e retorna true se o elemento for igual ao passado no argumento, se não retorna false
        return this.data.some((n) => n === value)
    }
}