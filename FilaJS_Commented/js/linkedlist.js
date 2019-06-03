class LinkedList {

    constructor() {
        //Atributos que pertencerão a classe:
        //Cabeça da lista que inicialmente recebe null    
        this.head = null;
        //Tamanho da lista inicado com 0
        this.length = 0;
        //Ambas sendo variáveis de instância
    }

    //Verfica se a lista está vazia
    isEmpty() {
        return this.head === null;
    }

    //Insere no final da lista
    append(element) {
        //Cria o nó, recebe os atributos da classe Node( o content e o next)
        let node = new Node(element),
        //Recebe a referência da cabeça da lista
        current = this.head;
        //Antes de criar o nó ele verifica se a lista está vazia
        if (this.isEmpty()) {
            //Caso esteja, insere no início da lista
            this.head = node;
        }
        //Se não estiver ele coloca no final da lista
        else {
            //Percorre a lista
            while (current.next) {
                /*O primeiro elemento aponta para o segundo e assim até o final da lista, 
                com o último apontando pra null*/
                current = current.next;
            }
            //Depois de percorrer, o último elemento recebe o nó criado
            current.next = node;
        }
        //Incrementa o tamanho da lista
        this.length++;
    }

    //Mostra a lista
    show(separator = ", ") {
        //O elemento atual recebe a cabeça da lista
        let current = this.head,
            //O outpout concatenará com os elementos da lista
            output = '';
        //Se tiver algum elemento ele entra
        if (current != null) {
            //Como a lista tem que começar com(Primeiro elemento, segundo elemento, ... , ultimo elemento)
            output += current.content;
            //Percorre a lista
            while (current.next) {
                //O elemento atual recebe o próximo
                current = current.next;
                //Como já está com o primeiro elemento ele concatena o separador e o próximo... até chegar no último
                output += separator + current.content;
            }
        }
        //Retorna a lista formatada 1ELEMENTO, 2ELEMENTO...ULTIMO.
        return output;
    }
    //Inserir em qualquer posição da lista
    insert(position, element) {
        /*Verifica se a posição inserida está no padrão aceito, MAIOR DO QUE -1 E 
            MENOR OU IGUAL AO TAMANHO DA LISTA*/
            if (position > -1 && position <= this.size()) {
                //Criação do nó
                let node = new Node(element),
                //O current recebe a cabeça da lista
                current = this.head,
                //Como vai inserir em qualquer posição, ele tem que ter a posição anterior
                previous = null, 
                //Indice para comparar com a posição que ele especificou
                index = 0; 
            //Se for na posição 0 ñ é necessário percorrer a lista
            if (position == 0) {
                //O elemento .next ou seja o 2 elemento recebe o primeiro
                node.next = this.head; 
                //O primeiro recebe o segundo
                this.head = node;
                //Resumindo o elemento adicionado troca de lugar com o primeiro
            }
            //Caso seja em outra posição ele percorre até achar a posição
            else {
                //Enquanto o index que vale 0, for menor do que a posição passada, continue o looping
                while (index < position) {
                    //Incrementa index
                    index++;
                    //Recebe a posição anterior
                    previous = current;
                    //Recebe a próxima posição
                    current = current.next;
                }
                //Depois de encontrar a posição passada:
                    //Fasta o elemento que está na posição e recebe uma posição depois
                    node.next = current;
                    //Na anterior recebe o elemento especificado
                    previous.next = node;
            }
            //Incrementa o tamanho da lista
            this.length++;
            //Como inseriu retorna um true mostrando que deu certo
            return true;
        }
        //Caso dê errado mostra false, que não inseriu
        return false;
    }
    //Remove na posição especificada
    removeAt(position) {
        //Verifica se está no limite das posições, maior que -1 e menor que o tamanho final da lista
        if (position > -1 && position < this.size()) {
            //O current recebe a cabeça da lista, para percorre-lá
            let current = this.head,
                //O anterior(previoues), recebe inicialmente null
                previous = null,
                //Indíce iniciada com 0
                index = 0;
            //Caso seja na posição 0 a cabeça da lista receberá o próximo elemento
            if (position === 0) {
                //A cabeça da lista excluí o elemento que estava na posição inicial e aponta para o próximo
                this.head = current.next;
            } 
            //Caso contrário percorrerá a lista    
            else {
                //Enquanto o valor passado nos argumentos for maior do que o índice, continue o looping
                while (index < position) {
                    //Incrementa index
                    index++;
                    //O anterior recebe o atual
                    previous = current;
                    //O atual recebe o próximo
                    current = current.next;
                }
                /*O elemento que está na posição anterior.next, ou seja a posição próxima, recebe o current.next
                 excluindo o que está no current, e apontando para o próximo */
                previous.next = current.next;
            }
            //O elemento é excluído
            current.next = null;
      
            //Decrementa um no tamanho da lista, depois de excluir um elemento
            this.length--;
      
            //Mostra o elemento excluído
            return current.content;
        }
        //Caso não esteja nos limites da posição retorna null
        return null;
    }
    //Remove o último elemento
    remove(element) { 
        //Primeiro pesquisa o índice a ser excluido
        let index = this.indexOf(element);
        //Depois retorna o elemento excluído
        return this.removeAt(index);
    }
    //Retorna o índice do elemento
    indexOf(element) {
        //O current recebe a cabeça da lista, para poder percorre-lá
        let current = this.head,
            //O índice inicia com 0 para ser incrementado posteriormente
            index = 0;
        //Enquanto o current for diferente de null, ou seja, enquanto tiver um próximo elemento, continue o looping
        while (current !== null) {
            //Verifica se o elemento passado pelos argumentos é igual ao que está na lista
            if (current.content === element) {
                //Se for retorna o índice
                return index;
            }
            //Caso ele não sejam iguais, ele necessita incrementar o índice para acompanhar a posição, até encontrar o que é igual
            index++
            //Entrega a próxima posição da lista para percorrer, até encontrar os valores iguais entre element e current.content
            current = current.next;
        }
        //Se ñ retorna -1, que significa que ñ encontrou
        return -1;
    }

    //Retorna o tamanho da lista
    size() {
        return this.length;
    }
    //Retorna o elemento que está na posição
    getElement(position) {        
        //Verifica se a posição é inválida, maior que 0 e menor ou igual a o tamanho da lista
        if (position < 0 && position >= this.length){
            //Retorna null e encerra a busca
            return null;
        }
            //Current inicia apontando pra cabeça para percorrer a lista
            let current = this.head,
            //Index inicialmente recebe 0 para ser incrementado posteriormente
            index = 0;
        //Enquanto o current for diferente de null, ou seja, tiver um elemento na posição, continue o looping
        while (current !== null) {
            //Verifica se o index é igual a posição passada nos argumentos
            if (index === position) {
                //Caso seja igual, retorna o conteúdo do elemento da posição na lista
                return current.content;
            }
            //Incrementa index, caso não tenha encontrado a posição
            index++;
            //Current recebe o próximo até encontrar o da posição
            current = current.next;
        }
    }
    //Busca se o elemento existe ou não
    search(value) {
        /*Se o índice dele for maior ou igual a zero significa
        que ele existe e retorna true, caso contrário retorna false.*/
        return this.indexOf(value) >= 0;
    }

}