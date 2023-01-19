
function calcularMedia( notas ) {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global

function aprovacao( notas ) {

    let media = calcularMedia( notas ); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}


// Função Recursivas

function contagemRegressiva(numero){

    console.log(numero);  
    
    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);

}

// contagemRegressiva(50);

    const formulario1 = document.getElementById('formulario-01');

    if(formulario1)
    formulario1.addEventListener('submit', function( evento ){

    evento.preventDefault();
    evento.stopPropagation();

    if(this.getAttribute('class').match(/erro/) ) {
        return false;
    }


    let dados = new FormData(this);

    let notas = [];

    for(let key of dados.keys()) {

        let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0;

        if(!isNaN(numero)){
            notas.push(numero);
        }

    }

    console.log(notas);

    texto = aprovacao(notas)

    document.getElementById('resultado').innerHTML = texto;

});

function validacampo(elemento) {

    elemento.addEventListener('focusout', function(event) {

    event.preventDefault();

    if(this.value == "") {
        document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho!"
        this.classList.add('erro');
        return false;    
}
    else {
        document.querySelector('.mensagem').innerHTML = "";
        this.classList.remove('erro');
    }
});

}

function validacampoNumerico(elemento) {

    elemento.addEventListener('focusout', function(event) {

    event.preventDefault();

    let numero = this.value.match(/[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value;

    if(this.numero != "" && this.numero.match(/[0-9]*/) && this.numero >= 0 && this.numero <= 10) {
        document.querySelector('.mensagem').innerHTML = "";
        this.classList.remove('erro');   
}
    else {
        document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho!"
        this.classList.add('erro');
        return false;
    }
});

}

function validaUf(elemento){
    elemento.addEventListener('focusout', function(event) {
    
        event.preventDefault();

        if() {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');   
    }
        else {
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho!"
            this.classList.add('erro');
            return false;
}
});
}

function validaEmail(elemento){
    elemento.addEventListener('focusout', function(event) {
    
        event.preventDefault();

        if(this.value.match(/@/) && this.value.match(/./) && this.value.match(/com/)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');   
    }
        else {
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho!"
            this.classList.add('erro');
            return false;
}
});
}

function validaCep(elemento){
    elemento.addEventListener('focusout', function(event) {
    
        event.preventDefault();

    if(this.value.match(/-/)) {
        document.querySelector('.mensagem').innerHTML = "";
        this.classList.remove('erro');   
}
    else {
        document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho!"
        this.classList.add('erro');
        return false;

    }
});
}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');
let camposCep = document.querySelectorAll('input.cep');
let camposUf = document.querySelectorAll('input.uf');

for( let emFoco of camposObrigatorios) {
    validacampo(emFoco);
}

for( let emFoco of camposNumericos) {
    validacampoNumerico(emFoco);
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}

for( let emFoco of camposCep) {
    validaCep(emFoco);
}

for( let emFoco of camposUf) {
    validaUf(emFoco);
}