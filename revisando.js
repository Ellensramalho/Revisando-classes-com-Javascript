//Exemplo classes
class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
  }
}

const blueButton = new Button('Comprar', 'blue');
console.log(blueButton)
const redButton = new Button('Vender', 'vermelho')
console.log(redButton)

//Exemplo classes
class Roupa{
    constructor(cor, tamanho){
    this.cor = cor;
    this.tamanho = tamanho;
}

    element(){
        const roupaElement = document.createElement('roupa')
        roupaElement.style.cor = this.cor;
        roupaElement.style.tamanho = this.tamanho;
        return buttonElement;
    } 
}

const roupaNova = new Roupa('Rosa', 'M');
console.log(roupaNova)

//Exemplo classes
class Botao {
  constructor(options) {
    this.options = options;
  }
}

const blueOptions = {
  backgroundColor: 'blue',
  color: 'white',
  text: 'Clique',
  borderRadius: '4px',
}

const pinkOptions = {
    backgroundColor: 'pink',
    color: 'white',
    text: 'Clique',
    borderRadius: '10px',
}

const blueBotao = new Botao(blueOptions);
console.log(blueBotao)
console.log(blueOptions)

const pinkBotao = new Botao(pinkOptions);
console.log(pinkBotao)
console.log(pinkOptions)

//Exemplo GET e SET
class Caderno {
    get tamanho(){
        return this._numero || 100;
    }
    set tamanho(numero){
        this._numero = numero * 200;
    }
}

const c = new Caderno();
console.log(c.tamanho);

c.tamanho = 2;
console.log(c.tamanho); 

//Exemplo SET
const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};

frutas.nova = 'Banana';
frutas.nova = 'Morango';
frutas.nova = 'Melancia'
console.log(frutas.lista); 


//Exemplo classes
class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log('Acelerou');
  }
}
class Moto extends Veiculo {
  empinar() {
    console.log('Empinou com ' + this.rodas + ' rodas');
  }
}

const honda = new Moto(2);
honda.empinar();