
let numero = [];// criei o array fora da função para que ele seja criado so uma vez


function adicionar() {
    let valorNum = document.getElementById('num'); // nesta linha peguei o valor digitado 
    let res = document.getElementById('valor'); // nesta criei uma variavel para pegar um espaço no select list
    let procurar = numero.indexOf(Number(num.value)); // criei uma variavel para fazer a procura dentro do array

    if (valorNum.value == '') {
        alert("insira um valor");
    }
    else if (valorNum.value < 1) {
        alert("insira um valor maior ou igual a 10");
    }
    else if (valorNum.value > 100) {
        alert('insira um valor menor que 100');

    } else if (procurar != -1) {
        alert('esse ja existe')
    }

    else {

        let num = Number(valorNum.value);

        numero.push(num); //atribuindo o valor convertido ao array

        let val = document.createElement('option');
        val.text = `adicionando:${valorNum.value}`;
        res.appendChild(val);



    }
}

function fim() {
    let valorNum = document.getElementById('num');
    let num = Number(valorNum.value);
    let resultado = document.getElementById("resul");

    let soma = 0;
    let media = 0;
    for (let pos = 0; pos < numero.length; pos++) {

        soma = soma + numero[pos]
        media = soma / numero.length
    }
    
    let maior = num;
    let menor = num;
    for (let pos = 0; pos < numero.length; pos++) {

        if (numero[pos] > maior) {
            maior = numero[pos]


        } else if (numero[pos] < menor) {
            menor = numero[pos]
        }


    }


    resultado.innerHTML = `Ao todo temos : ${numero.length} números cadastrados <br>A soma deles é: ${soma} <br> A Media: ${(media).toFixed(2)}<br>
    O maior número é: ${maior}<br> o menor: ${menor}`

}











